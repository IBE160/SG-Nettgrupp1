import { test, expect } from '@playwright/test';
import { createProduct, Product } from '../support/factories/product.factory';
import { getAuthToken } from '../support/helpers';

test.describe('Story 2.1: Cart API Endpoints', () => {

  let product: Product;
  let productId: string;
  let token: string;

  test.beforeAll(async ({ request }) => {
    token = await getAuthToken();
    // Create a product to be used in cart tests
    const productToCreate = createProduct({ stock_quantity: 10 });
    const response = await request.post('/api/products', {
      data: productToCreate,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status()).toBe(201);
    product = await response.json();
    productId = product.id!;
  });

  test('POST /api/cart should create a new cart', async ({ request }) => {
    const response = await request.post('/api/cart');
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.id).toBeDefined();
  });

  test('POST /api/cart/:cartId/items should add an item to the cart', async ({ request }) => {
    // 1. Create a cart
    const cartResponse = await request.post('/api/cart');
    const cart = await cartResponse.json();
    const cartId = cart.id;

    // 2. Add item to cart
    const addItemResponse = await request.post(`/api/cart/${cartId}/items`, {
      data: {
        productId: productId,
        quantity: 1,
      },
    });
    expect(addItemResponse.status()).toBe(201);
    const item = await addItemResponse.json();

    expect(item.id).toBeDefined();
    expect(item.cart_id).toBe(cartId);
    expect(item.product_id).toBe(productId);
    expect(item.quantity).toBe(1);
  });

  test('POST /api/cart/:cartId/items should not add an item if stock is insufficient', async ({ request }) => {
    // 1. Create a cart
    const cartResponse = await request.post('/api/cart');
    const cart = await cartResponse.json();
    const cartId = cart.id;

    // 2. Try to add item with quantity greater than stock
    const addItemResponse = await request.post(`/api/cart/${cartId}/items`, {
      data: {
        productId: productId,
        quantity: 20, // more than stock_quantity
      },
    });
    expect(addItemResponse.status()).toBe(400);
    const body = await addItemResponse.json();
    expect(body.message).toBe('Not enough stock');
  });

  test('POST /api/cart/:cartId/items should update quantity if item already exists', async ({ request }) => {
    // 1. Create a cart
    const cartResponse = await request.post('/api/cart');
    const cart = await cartResponse.json();
    const cartId = cart.id;

    // 2. Add item to cart
    await request.post(`/api/cart/${cartId}/items`, {
      data: {
        productId: productId,
        quantity: 1,
      },
    });

    // 3. Add same item again
    const addItemAgainResponse = await request.post(`/api/cart/${cartId}/items`, {
        data: {
          productId: productId,
          quantity: 2,
        },
      });
      expect(addItemAgainResponse.status()).toBe(201);
      const item = await addItemAgainResponse.json();

      expect(item.quantity).toBe(3);
  });
});
