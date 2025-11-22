import { test, expect } from '@playwright/test';

test.describe('Add to Cart User Flow', () => {
  test('should allow a user to add a product to the cart and update the cart icon', async ({ page }) => {
    // Assume a product page exists. For simplicity, we'll try to find an "Add to Cart" button.
    // In a real scenario, you would navigate to a specific product detail page.
    await page.goto('/products'); // Navigate to the products listing page

    // Wait for at least one product card to be visible, indicating products have loaded
    await page.waitForSelector('[data-testid="product-card"]', { state: 'visible' });

    // Look for an "Add to Cart" button and click it
    // Using a more generic selector, but data-testid is preferred.
    const addToCartButton = page.locator('button:has-text("Add to Cart")').first();
    await expect(addToCartButton).toBeVisible();

    // Get initial cart item count
    // Assuming a cart icon with a count element, e.g., <span data-testid="cart-item-count">0</span>
    const cartItemCount = page.locator('[data-testid="cart-item-count"]');
    let initialCount = 0;
    if (await cartItemCount.isVisible()) {
      initialCount = parseInt(await cartItemCount.textContent() || '0', 10);
    }

    await addToCartButton.click();

    // Wait for the cart item count to update.
    // This expects the count to increment by at least 1, assuming one product was added.
    await expect(cartItemCount).not.toHaveText(String(initialCount));
    await expect(cartItemCount).toHaveText(String(initialCount + 1)); // Assuming one item added for now

    // Optional: Further verification (e.g., navigate to cart page and check for the product)
    // This requires knowing the cart page URL and specific product details.
    // await page.locator('[data-testid="shopping-cart-link"]').click();
    // await expect(page.locator(`text=${productName}`)).toBeVisible();
  });
});
