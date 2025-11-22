import { test, expect } from '@playwright/test';

// Use a unique name for the product to avoid conflicts between parallel tests
const getTestProductName = () => `E2E Test Cigar ${Date.now()}`;

test.describe('Story 1.3: Admin Product Management', () => {
  let productName;

  test.beforeEach(() => {
    productName = getTestProductName();
  });

  test('AC1: Unauthenticated user is redirected to login', async ({ page }) => {
    await page.goto('/admin');
    // Expect to be redirected to the login page
    await expect(page).toHaveURL('/login');
    await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible();
  });

  test('AC1: Login with invalid credentials fails', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('wrong@test.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Expect an error message to be visible
    await expect(page.getByText('Invalid login credentials')).toBeVisible();
  });

  test.describe('Authenticated Tests', () => {
    // Log in before each test in this block
    test.beforeEach(async ({ page }) => {
      // It's crucial to use environment variables for test credentials
      const email = process.env.SUPABASE_TEST_EMAIL;
      const password = process.env.SUPABASE_TEST_PASSWORD;

      if (!email || !password) {
        throw new Error('Test credentials SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in your .env file');
      }

      await page.goto('/login');
      await page.getByLabel('Email').fill(email);
      await page.getByLabel('Password').fill(password);
      await page.getByRole('button', { name: 'Sign In' }).click();
      
      // Wait for navigation to the dashboard and for the table to be ready
      await expect(page).toHaveURL('/admin');
      await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
    });

    test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
      // The beforeEach hook already covers login and navigation.
      // Now, we verify the content.
      await expect(page.getByRole('table')).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Name' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Price' })).toBeVisible();
    });

    test('AC2, AC3, AC4: Full E2E - Add and Edit a product', async ({ page }) => {
      // --- Step 1: Add a new product ---
      await page.getByRole('button', { name: 'Add New Product' }).click();
      
      // The form is in a dialog, so we target it
      const dialog = page.getByRole('dialog');
      await expect(dialog.getByRole('heading', { name: 'Add New Product' })).toBeVisible();
      
      await dialog.getByLabel('Name').fill(productName);
      await dialog.getByLabel('Description').fill('A test description.');
      await dialog.getByLabel('Price').fill('10.99');
      await dialog.getByLabel('Stock').fill('50');
      await dialog.getByRole('button', { name: 'Save' }).click();

      // --- Step 2: Verify the product appears in the table ---
      // The dialog should be gone
      await expect(dialog).not.toBeVisible();
      // The new product should be in the table.
      const newProductRow = page.getByRole('row', { name: productName });
      await expect(newProductRow).toBeVisible();
      await expect(newProductRow.getByRole('cell', { name: '$10.99' })).toBeVisible();
      await expect(newProductRow.getByRole('cell', { name: '50' })).toBeVisible();

      // --- Step 3: Edit the product ---
      await newProductRow.getByRole('button', { name: 'Edit' }).click();

      // A new dialog should appear for editing
      const editDialog = page.getByRole('dialog');
      await expect(editDialog.getByRole('heading', { name: 'Edit Product' })).toBeVisible();

      // Verify it's pre-filled
      await expect(editDialog.getByLabel('Name')).toHaveValue(productName);

      // Update the fields
      const updatedProductName = `${productName} (Updated)`;
      await editDialog.getByLabel('Name').fill(updatedProductName);
      await editDialog.getByLabel('Price').fill('12.99');
      await editDialog.getByRole('button', { name: 'Save' }).click();

      // --- Step 4: Verify the changes ---
      await expect(editDialog).not.toBeVisible();
      // The old row should be gone
      await expect(newProductRow).not.toBeVisible();
      // The new, updated row should be visible
      const updatedRow = page.getByRole('row', { name: updatedProductName });
      await expect(updatedRow).toBeVisible();
      await expect(updatedRow.getByRole('cell', { name: '$12.99' })).toBeVisible();
    });
  });
});
