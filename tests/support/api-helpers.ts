import { APIRequestContext } from '@playwright/test';

// A helper to create a product via API to speed up test setup
export const createProduct = async (request: APIRequestContext, product: { name: string; description: string; price: number; stock_quantity: number; }) => {
  const response = await request.post('/api/products', {
    data: product,
  });
  if (!response.ok()) {
    throw new Error(`Failed to create product: ${await response.text()}`);
  }
  return await response.json();
};

// A helper to create an order via API for testing purposes
export const createOrder = async (request: APIRequestContext, orderData: { customer_email: string; items: { product_id: number; quantity: number }[] }) => {
    const response = await request.post('/api/test/orders', {
        data: orderData
    });
    if (!response.ok()) {
        throw new Error(`Failed to create order: ${await response.text()}`);
      }
    return await response.json();
}

// A helper to delete an order via API for testing purposes
export const deleteOrder = async (request: APIRequestContext, orderId: string) => {
    const response = await request.delete(`/api/test/orders/${orderId}`);
    if (!response.ok()) {
        throw new Error(`Failed to delete order ${orderId}: ${await response.text()}`);
      }
    return response.ok();
}

