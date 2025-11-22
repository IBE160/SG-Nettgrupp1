PS C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1> npm run test:e2e

> ibe160-react@0.0.0 test:e2e
> playwright test


Running 18 tests using 4 workers

  ✓   1 …nfrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (4ms)  ✓   2 …ture Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (5ms)  ✓   3 …asic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (5ms)
  ✓   4 …e Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (833ms)
  ✘   5 [e2e-chromium] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page (15.9s)
  ✓   6 …nfrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (9ms)
  ✓   7 …asic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (8ms)
  ✓   8 …re Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (2.7s)
  ✘   9 [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page (32.2s)
  ✓  10 …ture Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (7ms)  ✓  11 …nfrastructure Setup › Acceptance Criteria Verification › AC1: A Git repository is initialized and configured (6ms)  ✓  12 …asic Project Infrastructure Setup › Acceptance Criteria Verification › AC2: A basic CI/CD pipeline is set up (2ms)  ✓  13 …re Setup › Acceptance Criteria Verification › AC3: The application can be successfully accessed via its URL (1.3s)  ✓  14 …ture Setup › Acceptance Criteria Verification › AC4: Basic project dependencies are installed and configured (6ms)  ✘  15 [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page (16.2s)
  ✘  16 …2: Product API Endpoints › API Endpoint Verification › AC3: POST /api/products should create a new product (147ms)  ✘  17 …Product API Endpoints › API Endpoint Verification › AC3: GET /api/products should return a list of products (80ms)  ✘  18 …oduct API Endpoints › API Endpoint Verification › AC3: GET /api/products/:id should return a single product (70ms)


  1) [e2e-chromium] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page 

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
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\navigation.spec.ts:7:14

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-chromium\video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-chromium\error-context.md   

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-chromium\trace.zip
    Usage:

        npx playwright show-trace test-results\all\navigation-navigate-to-products-page-from-landing-page-e2e-chromium\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  2) [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page

    TimeoutError: page.goto: Timeout 30000ms exceeded.
    Call log:
      - navigating to "http://localhost:5173/", waiting until "load"


      2 |
      3 | test('navigate to products page from landing page', async ({ page }) => {
    > 4 |   await page.goto('/');
        |              ^
      5 |
      6 |   // Click the 'View Products' button
      7 |   await page.click('button:has-text("View Products")');
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\navigation.spec.ts:4:14

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

  3) [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page ─

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
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\e2e\navigation.spec.ts:7:14

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

  4) [api-tests] › tests\api\products.api.spec.ts:11:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: POST /api/products should create a new product

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 201
    Received: 400

      17 |
      18 |       // Expect the API to respond with 201 Created
    > 19 |       expect(response.status()).toBe(201);
         |                                 ^
      20 |
      21 |       const body = await response.json();
      22 |
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\api\products.api.spec.ts:19:33

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-90bc1-should-create-a-new-product-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-90bc1-should-create-a-new-product-api-tests\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  5) [api-tests] › tests\api\products.api.spec.ts:31:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products should return a list of products

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 400

      37 |
      38 |       // Expect the API to respond with 200 OK
    > 39 |       expect(response.status()).toBe(200);
         |                                 ^
      40 |
      41 |       const body = await response.json();
      42 |
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\api\products.api.spec.ts:39:33

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-f204e-d-return-a-list-of-products-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-f204e-d-return-a-list-of-products-api-tests\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  6) [api-tests] › tests\api\products.api.spec.ts:52:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products/:id should return a single product

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 400

      60 |
      61 |       // Expect the API to respond with 200 OK
    > 62 |       expect(response.status()).toBe(200);
         |                                 ^
      63 |
      64 |       const body = await response.json();
      65 |
        at C:\Users\kimha\Desktop\IBE160\Gruppeoppgave\SG-Nettgrupp1\tests\api\products.api.spec.ts:62:33

    attachment #1: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results\all\products.api-Story-1-2-Pro-8a553-uld-return-a-single-product-api-tests\trace.zip
    Usage:

        npx playwright show-trace test-results\all\products.api-Story-1-2-Pro-8a553-uld-return-a-single-product-api-tests\trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  6 failed
    [e2e-chromium] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page
    [e2e-firefox] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page ─
    [e2e-webkit] › tests\e2e\navigation.spec.ts:3:1 › navigate to products page from landing page ──
    [api-tests] › tests\api\products.api.spec.ts:11:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: POST /api/products should create a new product
    [api-tests] › tests\api\products.api.spec.ts:31:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products should return a list of products
    [api-tests] › tests\api\products.api.spec.ts:52:5 › Story 1.2: Product API Endpoints › API Endpoint Verification › AC3: GET /api/products/:id should return a single product
  12 passed (36.6s)

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.