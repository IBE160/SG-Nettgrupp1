
Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npx playwright test tests/e2e/admin.spec.ts 

Running 18 tests using 2 workers

  ✓   1 …um] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.3s)  ✓   2 …-chromium] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (5.7s)  ✘   3 …1:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (21.4s)  ✘   4 …pec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (19.2s)  ✘   5 ….spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (19.9s)  ✘   6 …s:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (19.4s)  ✓   7 …ox] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (8.4s)
  ✓   8 …-firefox] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (14.0s)  ✘   9 …1:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (25.6s)  ✘  10 …pec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (23.1s)  ✘  11 ….spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (24.9s)  ✘  12 …s:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (24.0s)  ✓  13 …it] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.3s)
  ✓  14 …2e-webkit] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (3.6s)  ✘  15 …1:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (19.3s)  ✘  16 …pec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (19.7s)  ✘  17 ….spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (19.8s)  ✘  18 …s:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (18.9s)

  1) [e2e-chromium] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in 
and view the product dashboard 

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

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

  2) [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - 
Add and Edit a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

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

  3) [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

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

  4) [e2e-chromium] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

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

  5) [e2e-firefox] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  6) [e2e-firefox] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  7) [e2e-firefox] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  8) [e2e-firefox] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  9) [e2e-webkit] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-eb3af--view-the-product-dashboard-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  10) [e2e-webkit] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  11) [e2e-webkit] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  12) [e2e-webkit] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Admin Dashboard' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Admin Dashboard' })


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await expect(page).toHaveURL('/admin');
    > 48 |       await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
         |                                                                            ^
      49 |     });
      50 |
      51 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:76

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  12 failed
    [e2e-chromium] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details
    [e2e-chromium] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-firefox] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-firefox] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-webkit] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-webkit] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
  6 passed (2.9m)
