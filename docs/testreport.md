PS C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1> npx playwright test tests/e2e/add-to-cart.spec.ts --project=e2e-chromium

Running 1 test using 1 worker

  ✘  1 … › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon (18.9s)

  1) [e2e-chromium] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon 

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('[data-testid="product-card"]') to be visible


       8 |
       9 |     // Wait for at least one product card to be visible, indicating products have loaded
    > 10 |     await page.waitForSelector('[data-testid="product-card"]', { state: 'visible' });
         |                ^
      11 |
      12 |     // Look for an "Add to Cart" button and click it
      13 |     // Using a more generic selector, but data-testid is preferred.
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\add-to-cart.spec.ts:10:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-chromium\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-chromium\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  1 failed
    [e2e-chromium] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon 