
Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npx playwright test tests/e2e/admin.spec.ts 

Running 18 tests using 2 workers

  ✓   1 …-chromium] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (6.2s)
  ✓   2 …um] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.6s)  ✘   3 …2:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (22.4s)  ✘   4 …pec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (20.8s)  ✘   5 ….spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (20.9s)  ✘   6 …s:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (20.7s)  ✓   7 …x] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (10.3s)  ✓   8 …-firefox] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (16.9s)  ✘   9 …2:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (25.8s)  ✘  10 …pec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (23.8s)  ✘  11 ….spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (25.0s)  ✘  12 …s:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (25.4s)
  ✓  13 …it] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (3.0s)  ✓  14 …2e-webkit] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (4.9s)  ✘  15 …2:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (19.6s)  ✘  16 …pec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (19.8s)  ✘  17 ….spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (19.6s)  ✘  18 …s:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (18.9s)

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

  5) [e2e-firefox] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard

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

  6) [e2e-firefox] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

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

  7) [e2e-firefox] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

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

  8) [e2e-firefox] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

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

  9) [e2e-webkit] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard

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

  10) [e2e-webkit] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

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

  11) [e2e-webkit] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

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

  12) [e2e-webkit] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

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
    [e2e-chromium] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-chromium] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-chromium] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details
    [e2e-chromium] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-firefox] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-firefox] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:52:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-webkit] › tests\e2e\admin.spec.ts:60:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:109:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-webkit] › tests\e2e\admin.spec.ts:148:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
  6 passed (3.1m)
