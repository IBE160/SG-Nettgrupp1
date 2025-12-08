import { test, expect } from '@playwright/test';

test.describe('Add to Cart User Flow', () => {
  test('should allow a user to add a product to the cart and update the cart icon', async ({ page }) => {
    // Navigate to the products listing page
    await page.goto('/products'); 

    // Wait for product links to be visible
    await page.waitForSelector('ul > li > a');

    // Get initial cart item count from the nav bar
    const cartItemCount = page.locator('[data-testid="cart-item-count"]');
    const initialCount = parseInt(await cartItemCount.textContent() || '0', 10);

    // Click the first product link to go to the detail page
    await page.locator('ul > li > a').first().click();
    
    // On the product detail page, wait for the add to cart button and click it
    await page.waitForSelector('button:has-text("Add to Cart")');
    await page.locator('button:has-text("Add to Cart")').click();

    // Wait for the cart item count to update.
    await expect(cartItemCount).toHaveText(String(initialCount + 1));

    // Optional: Further verification
    await page.goto('/cart');
    await expect(page.locator('ul > li')).toHaveCount(1);
  });
});
