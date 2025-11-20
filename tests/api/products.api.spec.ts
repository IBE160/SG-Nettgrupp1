import { test, expect } from '@playwright/test';
import { createProduct } from '../support/factories/product.factory'; // Import the factory

test.describe('Story 1.2: Product API Endpoints', () => {

  // No longer a global newProduct, as each test will create its own unique one.
  // The POST test will create a generic product.

  test.describe('API Endpoint Verification', () => {

    test('AC3: POST /api/products should create a new product', async ({ request }) => {
      const productToCreate = createProduct(); // Use the factory

      const response = await request.post('/api/products', {
        data: productToCreate,
      });

      // Expect the API to respond with 201 Created
      expect(response.status()).toBe(201);

      const body = await response.json();
      
      // Expect the response body to contain the created product with an ID
      expect(body.id).toBeDefined();
      expect(body.name).toBe(productToCreate.name);
      expect(body.price).toBe(productToCreate.price);

      // No longer storing ID globally
    });

    test('AC3: GET /api/products should return a list of products', async ({ request }) => {
      // Create a product specifically for this test
      const productToCreate = createProduct();
      await request.post('/api/products', { data: productToCreate });

      const response = await request.get('/api/products');

      // Expect the API to respond with 200 OK
      expect(response.status()).toBe(200);

      const body = await response.json();

      // Expect the response body to be an array containing at least one product
      expect(Array.isArray(body.data)).toBe(true);
      expect(body.data.length).toBeGreaterThan(0);
      
      // Verify that the created product is in the list
      const foundProduct = body.data.find((p: any) => p.name === productToCreate.name);
      expect(foundProduct).toBeDefined();
    });

    test('AC3: GET /api/products/:id should return a single product', async ({ request }) => {
      // Create a product specifically for this test
      const productToCreate = createProduct();
      const createResponse = await request.post('/api/products', { data: productToCreate });
      const createdProduct = await createResponse.json();
      const createdProductId = createdProduct.id;

      const response = await request.get(`/api/products/${createdProductId}`);

      // Expect the API to respond with 200 OK
      expect(response.status()).toBe(200);

      const body = await response.json();

      // Expect the response body to be the correct product
      expect(body.id).toBe(createdProductId);
      expect(body.name).toBe(productToCreate.name);
    });

  });

});
