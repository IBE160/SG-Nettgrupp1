Kunde@DESKTOP-V7J8NU0 MINGW64 ~/Documents/HIM/IBE160/SG-Nettgrupp1 (elb_phase3)
$ npm run test:e2e

> ibe160-react@0.0.0 test:e2e
> playwright test


Running 73 tests using 2 workers

  ✘   1 …dd-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon (18.7s)  ✓   2 …um] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.5s)  ✓   3 …-chromium] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (4.1s)  ✘   4 …3:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (17.8s)  ✘   5 …pec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (18.0s)  ✘   6 ….spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (18.1s)  ✘   7 …s:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (18.0s)  ✘   8 …-chromium] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart (17.7s)  ✘   9 [e2e-chromium] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity (17.7s) 
  ✘  10 [e2e-chromium] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity (17.6s) 
  ✘  11 …e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0 (17.7s)  ✘  12 …› tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button (19.0s)  ✓  13 …Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (15ms)  ✓  14 …5 › Story 1.1: Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (5ms)  ✓  15 …ect Infrastructure Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (1.7s)  ✓  16 …ject Infrastructure Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (30ms)  ✓  17 [e2e-chromium] › tests\e2e\landing.spec.ts:5:3 › Story 1.7: Landing Page › AC1: should display the store location map (3.4s)       
  ✘  18 …tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order (16.2s)  ✘  19 [e2e-chromium] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page (19.1s)
  ✓  20 …e-chromium] › tests\e2e\order-management.spec.ts:5:3 › Admin Order Management › Unauthenticated user is redirected to login (1.1s)  ✘  21 …ment.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard (18.0s)  ✘  22 …e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard (18.1s)  ✘  23 …dd-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon (25.5s)  ✓  24 …ox] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (7.6s)  ✓  25 …e-firefox] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (4.8s)  ✘  26 …3:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (23.5s)  ✘  27 …pec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (24.3s)  ✘  28 ….spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (23.8s)  ✘  29 …s:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (23.0s)  ✘  30 …e-firefox] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart (22.3s)  ✘  31 [e2e-firefox] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity (21.5s)  
  ✘  32 [e2e-firefox] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity (21.9s)  
  ✘  33 …e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0 (21.5s)  ✘  34 …› tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button (21.8s)  ✓  35 …Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (22ms)  ✓  36 …5 › Story 1.1: Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (6ms)  ✓  37 …ect Infrastructure Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (3.2s)  ✓  38 …oject Infrastructure Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (4ms)  ✘  39 [e2e-firefox] › tests\e2e\landing.spec.ts:5:3 › Story 1.7: Landing Page › AC1: should display the store location map (3.2s)        
  ✘  40 [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page (22.5s)
  ✘  41 … tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order (6.1s)  ✓  42 …2e-firefox] › tests\e2e\order-management.spec.ts:5:3 › Admin Order Management › Unauthenticated user is redirected to login (6.2s)  ✘  43 …ment.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard (21.1s)  ✘  44 …e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard (21.7s)  ✘  45 …dd-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon (17.2s)  ✓  46 …it] › tests\e2e\admin.spec.ts:13:3 › Story 1.3: Admin Product Management › AC1: Unauthenticated user is redirected to login (2.2s)  ✓  47 …2e-webkit] › tests\e2e\admin.spec.ts:20:3 › Story 1.3: Admin Product Management › AC1: Login with invalid credentials fails (2.9s)  ✘  48 …3:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard (18.2s)  ✘  49 …pec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product (18.6s)  ✘  50 ….spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details (18.8s)  ✘  51 …s:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product (18.4s)  ✘  52 …2e-webkit] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart (17.4s)  ✘  53 [e2e-webkit] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity (17.7s)   
     54 [e2e-webkit] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity
     55 …› tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0 (17.1s)  ✘  56 …› tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button (17.4s)  ✓  57 …Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (19ms)  ✓  58 …5 › Story 1.1: Basic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (6ms)  ✓  59 …ect Infrastructure Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (1.5s)  ✓  60 …oject Infrastructure Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (3ms)  ✓  61 [e2e-webkit] › tests\e2e\landing.spec.ts:5:3 › Story 1.7: Landing Page › AC1: should display the store location map (4.8s)
     62 [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page
      ✘  63 …tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order (18.5s)  ✓  64 [e2e-webkit] › tests\e2e\order-management.spec.ts:5:3 › Admin Order Management › Unauthenticated user is redirected to login (2.6s)     65 …r-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard     66 …tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard

    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  22) [e2e-firefox] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity 

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  23) [e2e-firefox] › tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  24) [e2e-firefox] › tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  25) [e2e-firefox] › tests\e2e\landing.spec.ts:5:3 › Story 1.7: Landing Page › AC1: should display the store location map 

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:5173/", waiting until "load"


      4 |
      5 |   test('AC1: should display the store location map', async ({ page }) => {
    > 6 |     await page.goto('/');
        |                ^
      7 |
      8 |     // Find the iframe for the Google Map
      9 |     const mapFrame = page.frameLocator('iframe[src*="google.com/maps"]');
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\landing.spec.ts:6:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\landing-Story-1-7-Landing--cd9f9-play-the-store-location-map-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\landing-Story-1-7-Landing--cd9f9-play-the-store-location-map-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\landing-Story-1-7-Landing--cd9f9-play-the-store-location-map-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\landing-Story-1-7-Landing--cd9f9-play-the-store-location-map-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\landing-Story-1-7-Landing--cd9f9-play-the-store-location-map-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  26) [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page 

    TimeoutError: page.click: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('button:has-text("View Products")')


       5 |
       6 |   // Click the 'View Products' button
    >  7 |   await page.click('button:has-text("View Products")');
         |              ^
       8 |
       9 |   // Assert that the URL changes to /products
      10 |   await expect(page).toHaveURL('/products');
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\navigation.spec.ts:7:14

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-firefox\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  27) [e2e-firefox] › tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an 
order

    Error: page.goto: NS_ERROR_CONNECTION_REFUSED
    Call log:
      - navigating to "http://localhost:5173/login", waiting until "load"


      12 |     }
      13 |
    > 14 |     await page.goto('/login');
         |                ^
      15 |     await page.getByLabel('Email').fill(email);
      16 |     await page.getByLabel('Password').fill(password);
      17 |     await page.getByRole('button', { name: 'Sign In' }).click();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\order-cancellation.spec.ts:14:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  28) [e2e-firefox] › tests\e2e\order-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin/orders"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


      25 |
      26 |       await page.goto('/admin/orders');
    > 27 |       await expect(page).toHaveURL('/admin/orders');
         |                          ^
      28 |     });
      29 |
      30 |     test('User can view the order management dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\order-management.spec.ts:27:26

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  29) [e2e-firefox] › tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from 
the dashboard

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


       8 |     await page.fill('input[type="password"]', 'password123'); // Use the admin password
       9 |     await page.click('button[type="submit"]');
    > 10 |     await expect(page).toHaveURL('/admin'); // Or wherever admin is redirected
         |                        ^
      11 |
      12 |     // 2. Wait for the products table to be visible
      13 |     await expect(page.locator('table')).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\stock-update.spec.ts:10:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-firefox\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-firefox\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-firefox\trace.zip
    Usage:

        npx playwright show-trace test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-firefox\trace.zip      

    ────────────────────────────────────────────────────────────────────────────────────────────────

  30) [e2e-webkit] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       7 |
       8 |     // Wait for product links to be visible
    >  9 |     await page.waitForSelector('ul > li > a');
         |                ^
      10 |
      11 |     // Get initial cart item count from the nav bar
      12 |     const cartItemCount = page.locator('[data-testid="cart-item-count"]');
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\add-to-cart.spec.ts:9:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\add-to-cart-Add-to-Cart-Us-3ca51-rt-and-update-the-cart-icon-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  31) [e2e-webkit] › tests\e2e\admin.spec.ts:53:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin/products"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await page.goto('/admin/products');
    > 48 |       await expect(page).toHaveURL('/admin/products');
         |                          ^
      49 |       // Verify that the product management specific heading is visible
      50 |       await expect(page.getByRole('heading', { name: 'Product Management' })).toBeVisible();
      51 |     });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:26

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

  32) [e2e-webkit] › tests\e2e\admin.spec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Product Management' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Product Management' })


      48 |       await expect(page).toHaveURL('/admin/products');
      49 |       // Verify that the product management specific heading is visible
    > 50 |       await expect(page.getByRole('heading', { name: 'Product Management' })).toBeVisible();
         |                                                                               ^
      51 |     });
      52 |
      53 |     test('AC2, AC4: User can log in and view the product dashboard', async ({ page }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:50:79

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

  33) [e2e-webkit] › tests\e2e\admin.spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin/products"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await page.goto('/admin/products');
    > 48 |       await expect(page).toHaveURL('/admin/products');
         |                          ^
      49 |       // Verify that the product management specific heading is visible
      50 |       await expect(page.getByRole('heading', { name: 'Product Management' })).toBeVisible();
      51 |     });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:26

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

  34) [e2e-webkit] › tests\e2e\admin.spec.ts:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin/products"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


      46 |       // Wait for navigation to the dashboard and for the table to be ready
      47 |       await page.goto('/admin/products');
    > 48 |       await expect(page).toHaveURL('/admin/products');
         |                          ^
      49 |       // Verify that the product management specific heading is visible
      50 |       await expect(page.getByRole('heading', { name: 'Product Management' })).toBeVisible();
      51 |     });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\admin.spec.ts:48:26

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

  35) [e2e-webkit] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart 

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-0c86c--the-added-item-in-the-cart-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-0c86c--the-added-item-in-the-cart-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-0c86c--the-added-item-in-the-cart-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-0c86c--the-added-item-in-the-cart-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-0c86c--the-added-item-in-the-cart-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  36) [e2e-webkit] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity 

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-298a2-ow-increasing-item-quantity-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  37) [e2e-webkit] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity 

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-c2a7c-ow-decreasing-item-quantity-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  38) [e2e-webkit] › tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-8fec0--quantity-is-decreased-to-0-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  39) [e2e-webkit] › tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button

    TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('ul > li > a') to be visible


       6 |     await page.goto('/products');
       7 |     // Wait for product links to be visible
    >  8 |     await page.waitForSelector('ul > li > a');
         |                ^
       9 |     // Click the first product link
      10 |     await page.locator('ul > li > a').first().click();
      11 |     // On the product detail page, wait for the add to cart button and click it
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\cart-management.spec.ts:8:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart-management-Shopping-C-8f3c2-art-using-the-remove-button-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  40) [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page 

    TimeoutError: page.click: Timeout 15000ms exceeded.
    Call log:
      - waiting for locator('button:has-text("View Products")')


       5 |
       6 |   // Click the 'View Products' button
    >  7 |   await page.click('button:has-text("View Products")');
         |              ^
       8 |
       9 |   // Assert that the URL changes to /products
      10 |   await expect(page).toHaveURL('/products');
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\navigation.spec.ts:7:14

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-webkit\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  41) [e2e-webkit] › tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order

    TimeoutError: locator.click: Timeout 15000ms exceeded.
    Call log:
      - waiting for getByRole('button', { name: 'Sign In' })


      15 |     await page.getByLabel('Email').fill(email);
      16 |     await page.getByLabel('Password').fill(password);
    > 17 |     await page.getByRole('button', { name: 'Sign In' }).click();
         |                                                         ^
      18 |
      19 |     await expect(page).toHaveURL('/admin');
      20 |     await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\order-cancellation.spec.ts:17:57

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\order-cancellation-Story-2-cd45f-4-Admin-can-cancel-an-order-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  42) [e2e-webkit] › tests\e2e\order-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the 
order management dashboard

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('heading', { name: 'Order Management' })
    Expected: visible
    Timeout: 15000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" with timeout 15000ms
      - waiting for getByRole('heading', { name: 'Order Management' })


      29 |
      30 |     test('User can view the order management dashboard', async ({ page }) => {
    > 31 |       await expect(page.getByRole('heading', { name: 'Order Management' })).toBeVisible();
         |                                                                             ^
      32 |       await expect(page.getByRole('table')).toBeVisible();
      33 |       await expect(page.getByRole('cell', { name: 'Reference Number' })).toBeVisible();
      34 |       await expect(page.getByRole('cell', { name: 'Customer Email' })).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\order-management.spec.ts:31:77

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\order-management-Admin-Ord-bfe36--order-management-dashboard-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  43) [e2e-webkit] › tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard

    Error: expect(page).toHaveURL(expected) failed

    Expected: "http://localhost:5173/admin"
    Received: "http://localhost:5173/login"
    Timeout:  15000ms

    Call log:
      - Expect "toHaveURL" with timeout 15000ms
        18 × unexpected value "http://localhost:5173/login"


       8 |     await page.fill('input[type="password"]', 'password123'); // Use the admin password
       9 |     await page.click('button[type="submit"]');
    > 10 |     await expect(page).toHaveURL('/admin'); // Or wherever admin is redirected
         |                        ^
      11 |
      12 |     // 2. Wait for the products table to be visible
      13 |     await expect(page.locator('table')).toBeVisible();
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\e2e\stock-update.spec.ts:10:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-webkit\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-webkit\error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-webkit\trace.zip
    Usage:

        npx playwright show-trace test-results\all\stock-update-Admin-Stock-U-edb12-directly-from-the-dashboard-e2e-webkit\trace.zip       

    ────────────────────────────────────────────────────────────────────────────────────────────────

  44) [api-tests] › tests\api\cart.api.spec.ts:26:3 › Story 2.1: Cart API Endpoints › POST /api/cart should create a new cart 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 201
    Received: 400

      19 |       },
      20 |     });
    > 21 |     expect(response.status()).toBe(201);
         |                               ^
      22 |     product = await response.json();
      23 |     productId = product.id!;
      24 |   });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\api\cart.api.spec.ts:21:31

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart.api-Story-2-1-Cart-AP-c24c5-rt-should-create-a-new-cart-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart.api-Story-2-1-Cart-AP-c24c5-rt-should-create-a-new-cart-api-tests\trace.zip        

    ────────────────────────────────────────────────────────────────────────────────────────────────

  45) [api-tests] › tests\api\cart.api.spec.ts:55:3 › Story 2.1: Cart API Endpoints › POST /api/cart/:cartId/items should not add an item if stock is insufficient

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 201
    Received: 400

      19 |       },
      20 |     });
    > 21 |     expect(response.status()).toBe(201);
         |                               ^
      22 |     product = await response.json();
      23 |     productId = product.id!;
      24 |   });
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\api\cart.api.spec.ts:21:31

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\cart.api-Story-2-1-Cart-AP-613d3-em-if-stock-is-insufficient-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\cart.api-Story-2-1-Cart-AP-613d3-em-if-stock-is-insufficient-api-tests\trace.zip        

    ────────────────────────────────────────────────────────────────────────────────────────────────

  46) [api-tests] › tests\api\products.api.spec.ts:13:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: POST /api/products should create a new product

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 201
    Received: 400

      21 |       });
      22 |
    > 23 |       expect(response.status()).toBe(201);
         |                                 ^
      24 |       const body = await response.json();
      25 |       expect(body.id).toBeDefined();
      26 |       expect(body.name).toBe(productToCreate.name);
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\api\products.api.spec.ts:23:33

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-90bc1-should-create-a-new-product-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-90bc1-should-create-a-new-product-api-tests\trace.zip        

    ────────────────────────────────────────────────────────────────────────────────────────────────

  47) [api-tests] › tests\api\products.api.spec.ts:29:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products should return a list of products

    Error: expect(received).toBeDefined()

    Received: undefined

      43 |       expect(body.data.length).toBeGreaterThan(0);
      44 |       const foundProduct = body.data.find((p: any) => p.name === productToCreate.name);
    > 45 |       expect(foundProduct).toBeDefined();
         |                            ^
      46 |     });
      47 |
      48 |     test('AC3: GET /api/products/:id should return a single product', async ({ request }) => {
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\api\products.api.spec.ts:45:28

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-f204e-d-return-a-list-of-products-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-f204e-d-return-a-list-of-products-api-tests\trace.zip        

    ────────────────────────────────────────────────────────────────────────────────────────────────

  48) [api-tests] › tests\api\products.api.spec.ts:48:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products/:id should return a single product

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 400

      58 |
      59 |       const response = await request.get(`/api/products/${createdProductId}`);
    > 60 |       expect(response.status()).toBe(200);
         |                                 ^
      61 |       const body = await response.json();
      62 |       expect(body.id).toBe(createdProductId);
      63 |       expect(body.name).toBe(productToCreate.name);
        at C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\tests\api\products.api.spec.ts:60:33

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-8a553-uld-return-a-single-product-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-8a553-uld-return-a-single-product-api-tests\trace.zip        

    ────────────────────────────────────────────────────────────────────────────────────────────────

  48 failed
    [e2e-chromium] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon
    [e2e-chromium] › tests\e2e\admin.spec.ts:53:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-chromium] › tests\e2e\admin.spec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-chromium] › tests\e2e\admin.spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit 
all product details
    [e2e-chromium] › tests\e2e\admin.spec.ts:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-chromium] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart         
    [e2e-chromium] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity 
    [e2e-chromium] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity 
    [e2e-chromium] › tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0
    [e2e-chromium] › tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button
    [e2e-chromium] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page 
    [e2e-chromium] › tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order
    [e2e-chromium] › tests\e2e\order-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the 
order management dashboard
    [e2e-chromium] › tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard
    [e2e-firefox] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update the cart icon
    [e2e-firefox] › tests\e2e\admin.spec.ts:53:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-firefox] › tests\e2e\admin.spec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-firefox] › tests\e2e\admin.spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-firefox] › tests\e2e\admin.spec.ts:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-firefox] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart 
    [e2e-firefox] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity 
    [e2e-firefox] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity 
    [e2e-firefox] › tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0
    [e2e-firefox] › tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button
    [e2e-firefox] › tests\e2e\landing.spec.ts:5:3 › Story 1.7: Landing Page › AC1: should display the store location map 
    [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page ─
    [e2e-firefox] › tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order
    [e2e-firefox] › tests\e2e\order-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard
    [e2e-firefox] › tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard
    [e2e-webkit] › tests\e2e\add-to-cart.spec.ts:4:3 › Add to Cart User Flow › should allow a user to add a product to the cart and update 
the cart icon
    [e2e-webkit] › tests\e2e\admin.spec.ts:53:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC4: User can log in and view the product dashboard
    [e2e-webkit] › tests\e2e\admin.spec.ts:61:5 › Story 1.3: Admin Product Management › Authenticated Tests › AC2, AC3, AC4: Full E2E - Add and Edit a product
    [e2e-webkit] › tests\e2e\admin.spec.ts:110:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.1: Admin can edit all product details
    [e2e-webkit] › tests\e2e\admin.spec.ts:149:5 › Story 1.3: Admin Product Management › Authenticated Tests › Story 3.2: Admin can archive and unarchive a product
    [e2e-webkit] › tests\e2e\cart-management.spec.ts:23:3 › Shopping Cart Management › should display the added item in the cart 
    [e2e-webkit] › tests\e2e\cart-management.spec.ts:29:3 › Shopping Cart Management › should allow increasing item quantity 
    [e2e-webkit] › tests\e2e\cart-management.spec.ts:45:3 › Shopping Cart Management › should allow decreasing item quantity 
    [e2e-webkit] › tests\e2e\cart-management.spec.ts:60:3 › Shopping Cart Management › should remove item from cart when quantity is decreased to 0
    [e2e-webkit] › tests\e2e\cart-management.spec.ts:65:3 › Shopping Cart Management › should remove item from cart using the remove button
    [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page ──
    [e2e-webkit] › tests\e2e\order-cancellation.spec.ts:23:3 › Story 2.7: Admin Order Cancellation › AC1, AC2, AC4: Admin can cancel an order
    [e2e-webkit] › tests\e2e\order-management.spec.ts:30:5 › Admin Order Management › Authenticated Order Management › User can view the order management dashboard
    [e2e-webkit] › tests\e2e\stock-update.spec.ts:4:3 › Admin Stock Update › should allow an admin to update stock levels directly from the dashboard
    [api-tests] › tests\api\cart.api.spec.ts:26:3 › Story 2.1: Cart API Endpoints › POST /api/cart should create a new cart 
    [api-tests] › tests\api\cart.api.spec.ts:55:3 › Story 2.1: Cart API Endpoints › POST /api/cart/:cartId/items should not add an item if 
stock is insufficient
    [api-tests] › tests\api\products.api.spec.ts:13:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: POST /api/products should create a new product
    [api-tests] › tests\api\products.api.spec.ts:29:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products should return a list of products
    [api-tests] › tests\api\products.api.spec.ts:48:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products/:id should return a single product
  2 did not run
  23 passed (8.5m)
