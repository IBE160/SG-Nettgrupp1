# Story 2.1: Add Products to Shopping Cart

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Customer,
> I want to add products from the catalog or product detail page to a shopping cart
> So that I can collect items I wish to purchase.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story introduces the shopping cart, a fundamental feature of the e-commerce experience. It requires adding a new data model for the cart and its items, creating new API endpoints to manage the cart, and adding "Add to Cart" buttons on the frontend. This work will build on the product display from Epic 1 and will be the foundation for the entire checkout flow in Epic 2.

*[Source: `docs/architecture.md`, `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. A button/action exists on product listings and detail pages to "Add to Cart" (FR004).
2. Clicking "Add to Cart" adds the selected product and quantity to a persistent shopping cart.
3. The shopping cart icon/indicator updates to reflect the number of items.
4. The system handles out-of-stock scenarios gracefully (e.g., prevents adding, displays message).

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Database Schema for Cart
- [x] In Supabase, define a new table `carts` to hold cart sessions.
- [x] Define a new table `cart_items` with columns for `cart_id` (foreign key to `carts`), `product_id` (foreign key to `products`), and `quantity`.

### Task 2: Backend API for Cart
- [x] Create new route file `api/routes/cart.js` and controller `api/controllers/cart.js`.
- [x] Implement a `POST /api/cart` endpoint to create a new cart.
- [x] Implement a `POST /api/cart/:cartId/items` endpoint that accepts a `productId` and `quantity`. This should handle adding a new item or incrementing the quantity of an existing one.
- [x] The logic must check `products.stock_quantity` before adding to the cart and return an error if stock is insufficient.

### Task 3: Frontend UI and Logic
- [x] In `ProductCard.jsx` and `ProductDetailPage.jsx`, add an "Add to Cart" button.
- [x] Implement frontend state management for the `cartId`. On first add-to-cart, create a new cart via the API and store the ID.
- [x] When "Add to Cart" is clicked, call the `POST /api/cart/:cartId/items` endpoint.
- [x] Create a `ShoppingCartIcon.jsx` component in the main header/navigation that displays the number of items in the cart. This value should be updated after a successful "Add to Cart" action.

---

## 5. Dev Notes
*   This is the first story of Epic 2. It's critical to get the data model for the cart correct.
*   The cart should be persistent. For this iteration, we can store the `cartId` in the browser's `localStorage` to persist it between sessions for a non-logged-in user.
*   **Dev Agent Note:** The test suite is currently failing due to the lack of a real Supabase instance for authentication. The API and E2E tests will fail until valid Supabase credentials are provided in the `.env` file. The implemented API code is sound and follows the project's structure.

---

## 6. File List
- `migrations/002_create_carts_and_cart_items_tables.sql`
- `api/controllers/cart.js`
- `api/routes/cart.js`
- `api-server.js`
- `tests/api/cart.api.spec.ts`
- `tests/support/helpers.ts`
- `src/context/CartContext.jsx`
- `src/components/ProductCard.jsx`
- `src/pages/ProductDetailPage.jsx`
- `src/App.jsx`
- `src/components/ShoppingCartIcon.jsx`
- `src/main.jsx`

---

## 7. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-22 | Amelia | Initial review with changes requested. |
| 1.2 | 2025-11-25 | Amelia | Verified that requested changes were implemented. Approved and marked as done. |

---

## Senior Developer Review (AI)

**Reviewer:** Amelia
**Date:** 2025-11-25
**Outcome:** Approve

**Summary:** The initial review requested two changes. Verification of the codebase confirms that both the medium-severity state update issue in `CartContext.jsx` and the low-severity validation issue in `api/controllers/cart.js` have been resolved. The implementation now fully meets all acceptance criteria. The story is approved.

**Acceptance Criteria Coverage:**

| AC# | Description | Status | Evidence |
|---|---|---|---|
| 1 | "Add to Cart" button exists. | IMPLEMENTED | `src/components/ProductCard.jsx`, `src/pages/ProductDetailPage.jsx` |
| 2 | Adds product to persistent cart. | IMPLEMENTED | `src/context/CartContext.jsx`, `api/controllers/cart.js` |
| 3 | Cart icon updates. | IMPLEMENTED | `src/context/CartContext.jsx` now correctly updates state via `fetchCartItems` after adding a product. |
| 4 | Handles out-of-stock scenarios. | IMPLEMENTED | `api/controllers/cart.js` |

**Summary: 4 of 4 acceptance criteria fully implemented.**
