
Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npm run test:e2e tests/e2e/admin.spec.ts -- --project e2e-chromium

> ibe160-react@0.0.0 test:e2e
> playwright test tests/e2e/admin.spec.ts --project e2e-chromium


Running 5 tests using 2 workers

  ✓  1 [e2e-chromium] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (10.5s)
  ✓  2 [e2e-chromium] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (9.9s)
  ✓  3 [e2e-chromium] › tests\e2e\admin.spec.ts:51:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (5.5s)
  ✘  4 [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (22.6s)
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
  ✘  5 [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (20.7s)
[WebServer] Supabase Error in createProduct: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in getAllProducts: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }
[WebServer] Supabase Error in createProduct: {
[WebServer]   code: 'PGRST301',
[WebServer]   details: 'None of the keys was able to decode the JWT',
[WebServer]   hint: null,
[WebServer]   message: 'No suitable key or wrong key type'
[WebServer] }


  1) [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product 

    Error: expect(locator).not.toBeVisible() failed

    Locator:  getByRole('dialog')
    Expected: not visible
    Received: visible
    Timeout:  15000ms

    Call log:
      - Expect "not toBeVisible" with timeout 15000ms
      - waiting for getByRole('dialog')
        18 × locator resolved to <div role="dialog" tabindex="-1" id="radix-:r3:" data-state="open" aria-labelledby="radix-:r4:" aria-describedby="radix-:r5:" class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 da…>…</div>
           - unexpected value "visible"


      73 |       // --- Step 2: Verify the product appears in the table ---
      74 |       // The dialog should be gone
    > 75 |       await expect(dialog).not.toBeVisible();
         |                                ^
      76 |       // The new product should be in the table.
      77 |       const newProductRow = page.getByRole('row', { name: productName });
      78 |       await expect(newProductRow).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:75:32

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

  2) [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details 

    TimeoutError: locator.click: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764261841202' }).getByRole('button', { name: 'Edit' })


      118 |         // --- Step 2: Edit the product to add new details ---
      119 |         const productRow = page.getByRole('row', { name: productName });
    > 120 |         await productRow.getByRole('button', { name: 'Edit' }).click();
          |                                                                ^
      121 |
      122 |         const editDialog = page.getByRole('dialog');
      123 |         await expect(editDialog.getByRole('heading', { name: 'Edit Product' })).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:120:64

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

  2 failed
    [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product 
    [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details 
  3 passed (47.2s)
