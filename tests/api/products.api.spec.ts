import { test, expect } from '@playwright/test';
import { createProduct } from '../support/factories/product.factory';
import { getAuthToken } from '../support/helpers';

test.describe('Story 1.2: Product API Endpoints', () => {
  let token: string;

  test.beforeAll(async () => {
    token = await getAuthToken();
  });

  test.describe('API Endpoint Verification', () => {
    test('AC3: POST /api/products should create a new product', async ({ request }) => {
      const productToCreate = createProduct();

      const response = await request.post('/api/products', {
        data: productToCreate,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(201);
      const body = await response.json();
      expect(body.id).toBeDefined();
      expect(body.name).toBe(productToCreate.name);
    });

    test('AC3: GET /api/products should return a list of products', async ({ request }) => {
      // Create a product specifically for this test
      const productToCreate = createProduct();
      await request.post('/api/products', {
        data: productToCreate,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await request.get('/api/products');
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(Array.isArray(body.data)).toBe(true);
      expect(body.data.length).toBeGreaterThan(0);
      const foundProduct = body.data.find((p: any) => p.name === productToCreate.name);
      expect(foundProduct).toBeDefined();
    });

    test('AC3: GET /api/products/:id should return a single product', async ({ request }) => {
      const productToCreate = createProduct();
      const createResponse = await request.post('/api/products', {
        data: productToCreate,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const createdProduct = await createResponse.json();
      const createdProductId = createdProduct.id;

      const response = await request.get(`/api/products/${createdProductId}`);
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body.id).toBe(createdProductId);
      expect(body.name).toBe(productToCreate.name);
    });
  });
});
