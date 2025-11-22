Development of story `2-1-add-products-to-shopping-cart` is complete and marked for review.

**Key Changes:**

*   **Database Schema:** Created `002_create_carts_and_cart_items_tables.sql` migration.
*   **Backend API:** Implemented `api/controllers/cart.js` and `api/routes/cart.js` with `POST /api/cart` and `POST /api/cart/:cartId/items` endpoints.
*   **Frontend UI & Logic:**
    *   Created `src/context/CartContext.jsx` for cart state management.
    *   Created `src/pages/Products.jsx` and `src/components/ProductCard.jsx` (filling in missing components from previous stories).
    *   Created `src/pages/ProductDetailPage.jsx` (filling in missing component from previous stories).
    *   Created `src/components/ShoppingCartIcon.jsx`.
    *   Integrated `CartProvider` in `src/main.jsx` and `Layout` component in `src/App.jsx`.
    *   Added "Add to Cart" buttons to `ProductCard.jsx` and `ProductDetailPage.jsx`.
*   **Test Setup Fixes:**
    *   Corrected import paths in `api/middleware/auth.js` and `api/controllers/products.js`.
    *   Installed missing `@radix-ui` dependencies.
    *   Added `@tailwindcss/postcss` and updated `postcss.config.js`.
    *   Configured path alias in `vite.config.js`.
    *   Updated Playwright configuration to correctly load environment variables and start servers.
    *   Created `tests/support/helpers.ts` for API test authentication.
    *   Updated `tests/api/products.api.spec.ts` and `tests/api/cart.api.spec.ts` to use authentication.

**Current Status:**

The story is marked `review` in the `sprint-status.yaml`. All technical tasks in the story markdown are checked.

**Note on Tests:**

Automated tests are failing due to the lack of a real Supabase instance and valid credentials. The API and E2E tests are correctly attempting to authenticate and interact with Supabase, but cannot complete without a functional connection. The code changes themselves are believed to be correct and follow the established architectural patterns.

Please let me know if you would like an explanation of anything implemented.