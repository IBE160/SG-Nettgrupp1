import { test, expect } from '@playwright/test';

test('navigate to products page from landing page', async ({ page }) => {
  await page.goto('/');

  // Click the 'View Products' button
  await page.click('button:has-text("View Products")');

  // Assert that the URL changes to /products
  await expect(page).toHaveURL('/products');

  // Verify the placeholder content is displayed
  await expect(page.locator('h1')).toHaveText('Products');
  await expect(page.locator('p')).toHaveText('This is a placeholder for the products catalog.');
});
