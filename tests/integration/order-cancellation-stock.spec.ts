import { test, expect, APIRequestContext } from '@playwright/test';
import { createProduct, createOrder, deleteOrder } from '../support/api-helpers'; // Adjust path as needed

test.describe('AC3: Order Cancellation restores product stock (Integration)', () => {
  let adminRequest: APIRequestContext;
  let productId: string;
  let initialStock: number;
  let orderId: string;
  const productName = `Test Product ${Date.now()}`;
  const productQuantity = 5;

  test.beforeAll(async ({ playwright }) => {
    // Authenticate as admin to get an APIRequestContext with auth
    const email = process.env.SUPABASE_TEST_EMAIL;
    const password = process.env.SUPABASE_TEST_PASSWORD;

    if (!email || !password) {
        throw new Error('Test credentials SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in your .env file');
    }

    const authResponse = await playwright.request.post('http://localhost:3001/api/auth/login', { // Assuming a login endpoint
        data: { email, password },
    });
    const authJson = await authResponse.json();
    const token = authJson.token;

    adminRequest = playwright.request.newContext({
      baseURL: 'http://localhost:3001',
      extraHTTPHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });

    // Create a product
    const product = await createProduct(adminRequest, {
      name: productName,
      description: 'A product for testing stock restoration.',
      price: 10.00,
      stock_quantity: 100,
    });
    productId = product.id;
    initialStock = product.stock_quantity;
  });

  test.afterAll(async () => {
    // Clean up created product
    if (productId) {
      await adminRequest.delete(`/api/products/${productId}`); // Assuming a delete product endpoint
    }
    await adminRequest.dispose();
  });

  test.beforeEach(async () => {
    // Create an order for the product
    const order = await createOrder(adminRequest, {
      customer_email: 'testcustomer@example.com',
      items: [{ product_id: productId, quantity: productQuantity }],
    });
    orderId = order.id;

    // Verify stock decreased after order creation
    const { data: productAfterOrder } = await adminRequest.get(`/api/products/${productId}`).then(res => res.json());
    expect(productAfterOrder.stock_quantity).toBe(initialStock - productQuantity);
  });

  test.afterEach(async () => {
    // Ensure order is deleted after each test
    if (orderId) {
        await deleteOrder(adminRequest, orderId);
    }
  });


  test('should restore product stock when an order is cancelled', async () => {
    // Cancel the order
    const cancelResponse = await adminRequest.put(`/api/orders/${orderId}`, {
      data: { status: 'Cancelled' },
    });
    expect(cancelResponse.ok()).toBeTruthy();

    const cancelledOrder = await cancelResponse.json();
    expect(cancelledOrder.status).toBe('Cancelled');

    // Get the product stock after cancellation
    const { data: productAfterCancellation } = await adminRequest.get(`/api/products/${productId}`).then(res => res.json());
    
    // Assert that the stock is restored to its initial value
    expect(productAfterCancellation.stock_quantity).toBe(initialStock);
  });
});
