import { test, expect } from '@playwright/test';

test.describe('Admin Order Management', () => {

  test('Unauthenticated user is redirected to login', async ({ page }) => {
    await page.goto('/admin/orders');
    await expect(page).toHaveURL('/login');
    await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible();
  });

  test.describe('Authenticated Order Management', () => {
    // Log in before each test in this block
    test.beforeEach(async ({ page }) => {
      const email = process.env.SUPABASE_TEST_EMAIL;
      const password = process.env.SUPABASE_TEST_PASSWORD;

      if (!email || !password) {
        throw new Error('Test credentials SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in your .env file');
      }

      await page.goto('/login');
      await page.getByLabel('Email').fill(email);
      await page.getByLabel('Password').fill(password);
      await page.getByRole('button', { name: 'Login' }).click();
      
      await page.goto('/admin/orders');
      await expect(page).toHaveURL('/admin/orders');
    });

    test('User can view the order management dashboard', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Order Management' })).toBeVisible();
      await expect(page.getByRole('table')).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Reference Number' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Customer Email' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Order Date' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible();
    });
  });
});
