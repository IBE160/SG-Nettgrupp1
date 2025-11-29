PS C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1> $env:BASE_URL="http://localhost:5173"; npx playwright test tests/e2e/admin-archive-product.spec.ts

Running 6 tests using 4 workers

  ✘  1 [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product (17.2s)
  ✘  2 [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog (17.2s)     
  ✘  3 [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product (19.4s)
  ✘  4 [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog (19.2s)      
  ✘  5 [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog (16.0s)       
  ✘  6 [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product (16.1s)


  1) [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product 

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-chromium\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  2) [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog 

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-chromium\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  3) [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-firefox\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  4) [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-firefox\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  5) [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-de8af-ive-and-unarchive-a-product-e2e-webkit\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  6) [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog

    TimeoutError: locator.fill: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByLabel('Email')


      35 |
      36 |     await page.goto('/login');
    > 37 |     await page.getByLabel('Email').fill(email);
         |                                    ^
      38 |     await page.getByLabel('Password').fill(password);
      39 |     await page.getByRole('button', { name: 'Sign In' }).click();
      40 |     await expect(page).toHaveURL('/admin');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\admin-archive-product.spec.ts:37:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\admin-archive-product-Stor-b25dd-sible-in-the-public-catalog-e2e-webkit\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  6 failed
    [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product
    [e2e-chromium] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog
    [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product
    [e2e-firefox] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog
    [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:44:3 › Story 3.2: Admin Archive Product › AC5: Admin can archive and unarchive a product
    [e2e-webkit] › tests\e2e\admin-archive-product.spec.ts:64:3 › Story 3.2: Admin Archive Product › AC6: Archived products are not visible in the public catalog

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.