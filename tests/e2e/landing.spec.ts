import { test, expect } from '@playwright/test';

test.describe('Story 1.7: Landing Page', () => {

  test('AC1: should display the store location map', async ({ page }) => {
    await page.goto('/');
    
    // Find the iframe for the Google Map
    const mapFrame = page.frameLocator('iframe[src*="google.com/maps"]');

    // The map itself is in the frame, but we can assert the iframe exists and is visible
    await expect(mapFrame.locator('html')).toBeVisible();

    // As a bonus, we can check for something inside the map frame,
    // like the "View larger map" link, to be more certain.
    // This can be brittle if Google changes their embed structure.
    await expect(mapFrame.locator('a:has-text("View larger map")')).toBeVisible();
  });

});
