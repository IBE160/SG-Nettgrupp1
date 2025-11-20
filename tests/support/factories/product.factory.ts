import { faker } from '@faker-js/faker';

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  land_of_origin: string;
  vitola: string;
  is_archived?: boolean;
  created_at?: string;
}

export const createProduct = (overrides: Partial<Product> = {}): Product => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  stock_quantity: faker.number.int({ min: 0, max: 1000 }),
  land_of_origin: faker.location.country(),
  vitola: 'Robusto', // Example default
  ...overrides,
});
