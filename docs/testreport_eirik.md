
Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npx playwright test tests/e2e/admin.spec.ts

Running 18 tests using 2 workers

  ✓   1 …nt › AC1: Unauthenticated user is redirected to login (5.3s)  ✓   2 …anagement › AC1: Login with invalid credentials fails (9.3s) 
  ✘   6 …Story 3.2: Admin can archive and unarchive a product (23.2s)
  ✓   7 …t › AC1: Unauthenticated user is redirected to login (10.5s)
  ✓   8 …anagement › AC1: Login with invalid credentials fails (6.8s)
  ✓   9 …, AC4: User can log in and view the product dashboard (6.9s)
  ✘  10 …ests › Story 3.1: Admin can edit all product details (30.3s)
  ✘  11 …s › AC2, AC3, AC4: Full E2E - Add and Edit a product (34.5s)
  ✘  12 …Story 3.2: Admin can archive and unarchive a product (31.2s)
  ✓  13 …nt › AC1: Unauthenticated user is redirected to login (3.1s)
  ✓  14 …anagement › AC1: Login with invalid credentials fails (3.5s)
  ✓  15 …, AC4: User can log in and view the product dashboard (4.6s)
  ✘  16 …s › AC2, AC3, AC4: Full E2E - Add and Edit a product (36.2s)
  ✘  17 …ests › Story 3.1: Admin can edit all product details (31.6s)
  ✘  18 …Story 3.2: Admin can archive and unarchive a product (24.7s)


  1) [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - 
Add and Edit a product 

    Error: expect(locator).not.toBeVisible() failed

    Locator:  getByRole('row', { name: 'E2E Test Cigar 1764363319428' })
    Expected: not visible
    Received: visible
    Timeout:  15000ms

    Call log:
      - Expect "not toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363319428' })
        18 × locator resolved to <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">…</tr>
           - unexpected value "visible"


       99 |       await expect(editDialog).not.toBeVisible();
      100 |       // The old row should be gone
    > 101 |       await expect(newProductRow).not.toBeVisible();
          |                                       ^
      102 |       // The new, updated row should be visible
      103 |       const updatedRow = page.getByRole('row', { name: updatedProductName });
      104 |       await expect(updatedRow).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:101:39

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-chromium\trace.zip     

    ─────────────────────────────────────────────────────────────────

  2) [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('link', { name: /E2E Test Cigar 1764363320160/ })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('link', { name: /E2E Test Cigar 1764363320160/ })


      137 |         // Wait for the product link to be visible in the catalog, then click it
      138 |         const productLink = page.getByRole('link', { name: new RegExp(productName) });
    > 139 |         await expect(productLink).toBeVisible();
          |                                   ^
      140 |         await productLink.click();
      141 |
      142 |         // Assert the new details are visible on the product detail page
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:139:35

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-chromium\trace.zip     

    ─────────────────────────────────────────────────────────────────

  3) [e2e-chromium] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('row', { name: 'E2E Test Cigar 1764363347948' }).getByRole('button', { name: 'Archive' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363347948' }).getByRole('button', { name: 'Archive' })


      163 |         // This is the key assertion that is expected to fail initially.
      164 |         const archiveButton = productRow.getByRole('button', { name: 'Archive' });
    > 165 |         await expect(archiveButton).toBeVisible();
          |                                     ^
      166 |     });
      167 |   });
      168 | });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:165:37

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-chromium\trace.zip     

    ─────────────────────────────────────────────────────────────────

  4) [e2e-firefox] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

    Error: expect(locator).not.toBeVisible() failed

    Locator:  getByRole('row', { name: 'E2E Test Cigar 1764363374664' })
    Expected: not visible
    Received: visible
    Timeout:  15000ms

    Call log:
      - Expect "not toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363374664' })
        16 × locator resolved to <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">…</tr>
           - unexpected value "visible"


       99 |       await expect(editDialog).not.toBeVisible();
      100 |       // The old row should be gone
    > 101 |       await expect(newProductRow).not.toBeVisible();
          |                                       ^
      102 |       // The new, updated row should be visible
      103 |       const updatedRow = page.getByRole('row', { name: updatedProductName });
      104 |       await expect(updatedRow).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:101:39

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-firefox\trace.zip      

    ─────────────────────────────────────────────────────────────────

  5) [e2e-firefox] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('link', { name: /E2E Test Cigar 1764363373868/ })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('link', { name: /E2E Test Cigar 1764363373868/ })


      137 |         // Wait for the product link to be visible in the catalog, then click it
      138 |         const productLink = page.getByRole('link', { name: new RegExp(productName) });
    > 139 |         await expect(productLink).toBeVisible();
          |                                   ^
      140 |         await productLink.click();
      141 |
      142 |         // Assert the new details are visible on the product detail page
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:139:35

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-firefox\trace.zip      

    ─────────────────────────────────────────────────────────────────

  6) [e2e-firefox] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('row', { name: 'E2E Test Cigar 1764363419230' }).getByRole('button', { name: 'Archive' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363419230' }).getByRole('button', { name: 'Archive' })


      163 |         // This is the key assertion that is expected to fail initially.
      164 |         const archiveButton = productRow.getByRole('button', { name: 'Archive' });
    > 165 |         await expect(archiveButton).toBeVisible();
          |                                     ^
      166 |     });
      167 |   });
      168 | });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:165:37

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-firefox\trace.zip      

    ─────────────────────────────────────────────────────────────────

  7) [e2e-webkit] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

    Error: expect(locator).not.toBeVisible() failed

    Locator:  getByRole('row', { name: 'E2E Test Cigar 1764363433613' })
    Expected: not visible
    Received: visible
    Timeout:  15000ms

    Call log:
      - Expect "not toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363433613' })
        16 × locator resolved to <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">…</tr>
           - unexpected value "visible"


       99 |       await expect(editDialog).not.toBeVisible();
      100 |       // The old row should be gone
    > 101 |       await expect(newProductRow).not.toBeVisible();
          |                                       ^
      102 |       // The new, updated row should be visible
      103 |       const updatedRow = page.getByRole('row', { name: updatedProductName });
      104 |       await expect(updatedRow).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:101:39

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-207cc-2E---Add-and-Edit-a-product-e2e-webkit\trace.zip       

    ─────────────────────────────────────────────────────────────────

  8) [e2e-webkit] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('link', { name: /E2E Test Cigar 1764363452380/ })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('link', { name: /E2E Test Cigar 1764363452380/ })


      137 |         // Wait for the product link to be visible in the catalog, then click it
      138 |         const productLink = page.getByRole('link', { name: new RegExp(productName) });
    > 139 |         await expect(productLink).toBeVisible();
          |                                   ^
      140 |         await productLink.click();
      141 |
      142 |         // Assert the new details are visible on the product detail page
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:139:35

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-a5f6a-an-edit-all-product-details-e2e-webkit\trace.zip       

    ─────────────────────────────────────────────────────────────────

  9) [e2e-webkit] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('row', { name: 'E2E Test Cigar 1764363477789' }).getByRole('button', { name: 'Archive' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('row', { name: 'E2E Test Cigar 1764363477789' }).getByRole('button', { name: 'Archive' })


      163 |         // This is the key assertion that is expected to fail initially.
      164 |         const archiveButton = productRow.getByRole('button', { name: 'Archive' });
    > 165 |         await expect(archiveButton).toBeVisible();
          |                                     ^
      166 |     });
      167 |   });
      168 | });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:165:37

    attachment #1: screenshot (image/png) ───────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\test-failed-1.png
    ─────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ───────────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\video.webm
    ─────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ──────────────────────────
    test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-Story-1-3-Admin-Prod-30b68-ive-and-unarchive-a-product-e2e-webkit\trace.zip       

    ─────────────────────────────────────────────────────────────────

  9 failed
    [e2e-chromium] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-chromium] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details
    [e2e-chromium] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-firefox] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:59:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:108:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-webkit] › tests\e2e\admin.spec.ts:147:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
  9 passed (3.2m)
