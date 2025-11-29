import { test, expect, Page, Locator } from '@playwright/test';

// Use a unique name for the product to avoid conflicts
const getTestProductName = () => `E2E Archive Test ${Date.now()}`;

// Helper function to create a product and return its row locator
async function createProductAndReturnRow(page: Page, productName: string): Promise<Locator> {
  await page.getByRole('button', { name: 'Add New Product' }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Name').fill(productName);
  await dialog.getByLabel('Description').fill('A product to test archiving.');
  await dialog.getByLabel('Price').fill('99.99');
  await dialog.getByLabel('Stock').fill('10');
  await dialog.getByRole('button', { name: 'Save' }).click();

  // Verify it was created and return its row
  const productRow = page.getByRole('row', { name: productName });
  await expect(productRow).toBeVisible();
  return productRow;
}

test.describe('Story 3.2: Admin Archive Product', () => {
  let productName: string; // Declare productName here to be accessible by all tests
  
  test.beforeEach(async ({ page }) => {
    productName = getTestProductName(); // Generate a unique name for each test run

    // Log in as an admin user before each test
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

  test('AC5: Admin can archive and unarchive a product', async ({ page }) => {
    const productRow = await createProductAndReturnRow(page, productName);

    // --- Step 1: Archive the product ---
    const archiveButton = productRow.getByRole('button', { name: 'Archive' });
    await archiveButton.click();

    // --- Step 2: Verify the product is archived ---
    const unarchiveButton = productRow.getByRole('button', { name: 'Unarchive' });
    await expect(unarchiveButton).toBeVisible();
    await expect(productRow).toHaveClass(/opacity-50/); // Check for a visual style indicating it's archived
    
    // --- Step 3: Unarchive the product ---
    await unarchiveButton.click();

    // --- Step 4: Verify the product is unarchived ---
    await expect(productRow.getByRole('button', { name: 'Archive' })).toBeVisible();
    await expect(productRow).not.toHaveClass(/opacity-50/);
  });

  test('AC6: Archived products are not visible in the public catalog', async ({ page }) => {
    const productRow = await createProductAndReturnRow(page, productName);

    // --- Step 1: Archive the product ---
    const archiveButton = productRow.getByRole('button', { name: 'Archive' });
    await archiveButton.click();
    await expect(productRow.getByRole('button', { name: 'Unarchive' })).toBeVisible();

    // --- Step 2: Navigate to the public product catalog ---
    await page.goto('/products');

    // --- Step 3: Assert that the archived product is NOT visible ---
    await expect(page.getByText(productName)).not.toBeVisible();

    // --- Step 4: Navigate back to admin and unarchive for cleanup (optional but good practice) ---
    // This step is important to ensure the product is unarchived for subsequent test runs
    // if a test run is interrupted. However, since productName is unique per test,
    // it's not strictly necessary for test isolation.
    await page.goto('/admin');
    const unarchiveButton = page.getByRole('row', { name: productName }).getByRole('button', { name: 'Unarchive' });
    await unarchiveButton.click();
    await expect(page.getByRole('row', { name: productName }).getByRole('button', { name: 'Archive' })).toBeVisible();
  });
});