import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Management', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the products page
    await page.goto('/products');
    // Wait for product links to be visible
    await page.waitForSelector('ul > li > a');
    // Click the first product link
    await page.locator('ul > li > a').first().click();
    // On the product detail page, wait for the add to cart button and click it
    await page.waitForSelector('button:has-text("Add to Cart")');
    await page.locator('button:has-text("Add to Cart")').click();
    
    // Wait for the cart count to update to 1
    const cartItemCount = page.locator('[data-testid="cart-item-count"]');
    await expect(cartItemCount).toHaveText('1');

    // Go to the cart page
    await page.goto('/cart');
  });

  test('should display the added item in the cart', async ({ page }) => {
    await expect(page.locator('ul > li')).toHaveCount(1);
    await expect(page.locator('strong')).toBeVisible(); // Check for product name
    await expect(page.locator('text=Quantity:')).toBeVisible();
  });

  test('should allow increasing item quantity', async ({ page }) => {
    await expect(page.locator('text=Quantity: 1')).toBeVisible();

    // Assuming the total is visible and we can parse it
    const initialTotal = parseFloat((await page.locator('h3').textContent()).replace('Total: $', ''));

    await page.locator('button:has-text("+")').click();

    await expect(page.locator('text=Quantity: 2')).toBeVisible();

    const newTotal = parseFloat((await page.locator('h3').textContent()).replace('Total: $', ''));
    expect(newTotal).toBeGreaterThan(initialTotal);
    // More precise check if we know the product price
    // expect(newTotal).toBe(initialTotal * 2);
  });

  test('should allow decreasing item quantity', async ({ page }) => {
    // First, increase the quantity to 2
    await page.locator('button:has-text("+")').click();
    await expect(page.locator('text=Quantity: 2')).toBeVisible();

    const initialTotal = parseFloat((await page.locator('h3').textContent()).replace('Total: $', ''));

    await page.locator('button:has-text("-")').click();

    await expect(page.locator('text=Quantity: 1')).toBeVisible();

    const newTotal = parseFloat((await page.locator('h3').textContent()).replace('Total: $', ''));
    expect(newTotal).toBeLessThan(initialTotal);
  });

  test('should remove item from cart when quantity is decreased to 0', async ({ page }) => {
    await page.locator('button:has-text("-")').click();
    await expect(page.locator('p:has-text("Your cart is empty.")')).toBeVisible();
  });

  test('should remove item from cart using the remove button', async ({ page }) => {
    await page.locator('button:has-text("Remove")').click();
    await expect(page.locator('p:has-text("Your cart is empty.")')).toBeVisible();
  });
});
