Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npx playwright test tests/e2e/admin.spec.ts --project=e2e-chromium

Running 6 tests using 2 workers

  ✓  1 …e-chromium] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (3.8s)
  ✓  2 …ium] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.7s)  ✘  3 …52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (21.7s)  ✘  4 …spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (21.1s)  ✘  5 …n.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (21.1s)  ✘  6 …ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (20.7s)

  1) [e2e-chromium] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in 
and view the product dashboard 

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Product List' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Product List' })


      47 |       await expect(page).toHaveURL('/admin');
      48 |       // Verify that the product management specific heading is visible
    > 49 |       await expect(page.getByRole('heading', { name: 'Product List' })).toBeVisible();
         |                                                                         ^
      50 |     });
      51 |
      52 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:49:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-chromium\trace.zip     

    ────────────────────────────────────────────────────────────────────────────────────────────────

  2) [e2e-chromium] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - 
Add and Edit a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Product List' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Product List' })


      47 |       await expect(page).toHaveURL('/admin');
      48 |       // Verify that the product management specific heading is visible
    > 49 |       await expect(page.getByRole('heading', { name: 'Product List' })).toBeVisible();
         |                                                                         ^
      50 |     });
      51 |
      52 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:49:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\trace.zip     

    ────────────────────────────────────────────────────────────────────────────────────────────────

  3) [e2e-chromium] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Product List' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Product List' })


      47 |       await expect(page).toHaveURL('/admin');
      48 |       // Verify that the product management specific heading is visible
    > 49 |       await expect(page.getByRole('heading', { name: 'Product List' })).toBeVisible();
         |                                                                         ^
      50 |     });
      51 |
      52 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:49:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\trace.zip     

    ────────────────────────────────────────────────────────────────────────────────────────────────

  4) [e2e-chromium] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Product List' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Product List' })


      47 |       await expect(page).toHaveURL('/admin');
      48 |       // Verify that the product management specific heading is visible
    > 49 |       await expect(page.getByRole('heading', { name: 'Product List' })).toBeVisible();
         |                                                                         ^
      50 |     });
      51 |
      52 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:49:73

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\trace.zip     

    ────────────────────────────────────────────────────────────────────────────────────────────────

  4 failed
    [e2e-chromium] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-chromium] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-chromium] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details
    [e2e-chromium] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
  2 passed (53.5s)
