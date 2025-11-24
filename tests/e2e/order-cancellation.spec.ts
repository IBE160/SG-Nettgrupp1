import { test, expect } from '@playwright/test';

test.describe('Story 2.7: Admin Order Cancellation', () => {

  // Log in as admin before each test
  test.beforeEach(async ({ page }) => {
    const email = process.env.SUPABASE_TEST_EMAIL;
    const password = process.env.SUPABASE_TEST_PASSWORD;

    if (!email || !password) {
      throw new Error('Test credentials SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in your .env file');
    }

    await page.goto('/login');
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    await expect(page).toHaveURL('/admin');
    await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
  });

  test('AC1, AC2, AC4: Admin can cancel an order', async ({ page }) => {
    // Navigate to the order management tab
    await page.getByRole('button', { name: 'Order Management' }).click();
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();

    // Find the first order that is 'pending' or 'prepared'
    const pendingOrderRow = page.locator('tr:has(td:text-is("pending"), td:text-is("prepared"))').first();
    const orderCount = await pendingOrderRow.count();

    if (orderCount === 0) {
        console.log('Skipping test: No pending or prepared orders found to cancel.');
        // If there are no such orders, we can't test the cancellation.
        // In a real-world scenario, we would seed the database or create an order via API.
        test.skip(true, 'No pending or prepared orders available to test cancellation.');
        return;
    }
    
    const referenceNumberCell = pendingOrderRow.locator('td').first();
    const referenceNumber = await referenceNumberCell.textContent();

    // Click the order to navigate to its detail page
    await pendingOrderRow.click();
    await expect(page).toHaveURL(/\/admin\/orders\/.+/);
    await expect(page.getByRole('heading', { name: /Order Details/ })).toBeVisible();

    // Verify the correct order is displayed
    await expect(page.getByText(referenceNumber)).toBeVisible();

    // Set up a confirmation dialog handler
    page.on('dialog', dialog => dialog.accept());

    // Click the cancel button
    const cancelButton = page.getByRole('button', { name: 'Mark as Cancelled' });
    await expect(cancelButton).toBeVisible();
    await cancelButton.click();

    // Verify the status updates on the page
    await expect(page.getByText('Status: Cancelled')).toBeVisible();

    // Verify the action buttons are gone
    await expect(cancelButton).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Mark as Prepared' })).not.toBeVisible();
  });
});
