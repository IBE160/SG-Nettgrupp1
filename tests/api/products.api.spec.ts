import { test, expect } from '@playwright/test';

test.describe('Story 1.2: Product API Endpoints', () => {

  const newProduct = {
    name: 'Test Cigar',
    description: 'A test cigar from a test factory.',
    price: 9.99,
    stock_quantity: 100,
    land_of_origin: 'Testland',
    vitola: 'Testoro',
  };

  let createdProductId: string;

  test.describe('API Endpoint Verification', () => {

    test('AC3: POST /api/products should create a new product', async ({ request }) => {
      const response = await request.post('/api/products', {
        data: newProduct,
      });

      // Expect the API to respond with 201 Created
      expect(response.status()).toBe(201);

      const body = await response.json();
      
      // Expect the response body to contain the created product with an ID
      expect(body.id).toBeDefined();
      expect(body.name).toBe(newProduct.name);
      expect(body.price).toBe(newProduct.price);

      // Store the created ID for subsequent tests
      createdProductId = body.id;
    });

    test('AC3: GET /api/products should return a list of products', async ({ request }) => {
      // This test depends on the POST test above to have created a product.
      // For a more robust suite, we would seed data independently for each test.
      const response = await request.get('/api/products');

      // Expect the API to respond with 200 OK
      expect(response.status()).toBe(200);

      const body = await response.json();

      // Expect the response body to be an array containing at least one product
      expect(Array.isArray(body.data)).toBe(true);
      expect(body.data.length).toBeGreaterThan(0);
      expect(body.data[0].name).toBeDefined();
    });

    test('AC3: GET /api/products/:id should return a single product', async ({ request }) => {
      // This test depends on the POST test to have stored a created product ID.
      expect(createdProductId, 'This test requires a product to have been created by the POST test first.').toBeDefined();

      const response = await request.get(`/api/products/${createdProductId}`);

      // Expect the API to respond with 200 OK
      expect(response.status()).toBe(200);

      const body = await response.json();

      // Expect the response body to be the correct product
      expect(body.id).toBe(createdProductId);
      expect(body.name).toBe(newProduct.name);
    });

  });

});
