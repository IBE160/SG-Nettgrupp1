import { test, expect } from '@playwright/test';

test.describe('Admin Stock Update', () => {
  test('should allow an admin to update stock levels directly from the dashboard', async ({ page }) => {
    // 1. Navigate to login and sign in as admin
    await page.goto('/login');
    await page.fill('input[type="email"]', 'admin@example.com'); // Use a valid admin user
    await page.fill('input[type="password"]', 'password123'); // Use the admin password
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/admin'); // Or wherever admin is redirected

    // 2. Wait for the products table to be visible
    await expect(page.locator('table')).toBeVisible();
    
    // 3. Find the first product row and its stock input
    const firstRow = page.locator('table tbody tr:first-child');
    const stockInput = firstRow.locator('input[type="number"]');

    // 4. Get the initial stock value, increment it, and update the input
    const initialStock = await stockInput.inputValue();
    const newStock = parseInt(initialStock, 10) + 1;
    
    await stockInput.fill(newStock.toString());
    
    // 5. Click away to blur the input and trigger the update
    await page.locator('h1').click(); 

    // Wait for a potential network request to complete. 
    // A better way would be to wait for a specific success indicator, but for now, a small delay works.
    await page.waitForTimeout(500);

    // 6. Reload the page to ensure the change is persistent
    await page.reload();
    await expect(page.locator('table')).toBeVisible();

    // 7. Assert that the stock value has been updated
    const updatedStockInput = page.locator('table tbody tr:first-child').locator('input[type="number"]');
    await expect(updatedStockInput).toHaveValue(newStock.toString());
  });
});
