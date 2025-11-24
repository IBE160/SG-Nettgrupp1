# Story 2.2: Manage Shopping Cart Contents

**Date:** 2025-11-20
**Author:** BIP
Status: review
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Customer,
> I want to view and modify the contents of my shopping cart
> So that I can finalize my order before checkout.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story creates the dedicated shopping cart page where users can review their selected items. It builds directly on Story 2.1. The user must be able to see all items, adjust quantities, and remove items. The backend needs to support these modification and deletion actions.

*[Source: `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. I can view all items currently in my shopping cart, including product name, quantity, and price.
2. I can adjust the quantity of each item in the cart.
3. I can remove items from the cart.
4. The cart total updates dynamically with changes.
5. The system automatically updates the shopping cart with product changes (e.g., if stock changes) (FR005).

---

## 4. Technical Implementation Plan

### Task 1: Create Shopping Cart Page
- [ ] Create a new `src/pages/CartPage.jsx` component.
- [ ] Add a route for `/cart` that renders this page.
- [ ] When the page loads, call a new `GET /api/cart/:cartId` endpoint to fetch all items in the cart.
- [ ] Display the items in a list or table, showing product details (name, price) and the quantity.

### Task 2: Backend API for Cart Management
- [ ] Create the `GET /api/cart/:cartId` endpoint that joins `cart_items` with `products` to return full item details.
- [ ] Create a `PUT /api/cart/:cartId/items/:itemId` endpoint to update the quantity of an item.
- [ ] Create a `DELETE /api/cart/:cartId/items/:itemId` endpoint to remove an item from the cart.

### Task 3: Frontend Logic for Cart Management
- [ ] In `CartPage.jsx`, add controls for each item to increment/decrement quantity. These controls should call the `PUT` endpoint.
- [ ] Add a "Remove" button for each item that calls the `DELETE` endpoint.
- [ ] Implement logic to calculate and display the subtotal and total price of the cart. This should recalculate whenever the cart's contents change.

---
## 5. Dev Notes
*   Ensure all API endpoints for modifying the cart re-validate stock availability.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |

---
# Senior Developer Review (AI)

**Reviewer:** Amelia (dev)
**Date:** 2025-11-24
**Outcome:** BLOCKED

### Summary
The review is **Blocked** due to critical issues that prevent the feature from being tested or validated. The application's main entry point (`src/App.jsx`) contains unresolved merge conflicts, indicating an unstable codebase. Furthermore, core functionality for managing the shopping cart is incomplete, with critical backend APIs and frontend logic missing. The implementation deviates from the technical plan without justification.

### Key Findings (by severity)
- **[HIGH] Unresolved Merge Conflicts:** `src/App.jsx` has unresolved merge conflicts, making the application unstable.
- **[HIGH] Critical Functionality Missing:** The ability to update item quantities and remove items from the cart is not implemented. The backend APIs (`PUT`, `DELETE`) and the corresponding frontend context functions are missing.
- **[HIGH] Cart Page Not Accessible:** The planned `/cart` route was not added to `src/App.jsx`, so the new shopping cart component cannot be accessed.
- **[MEDIUM] Deviation from Plan:** The frontend component was created at `src/ShoppingCart.jsx` instead of the planned `src/pages/CartPage.jsx`.
- **[MEDIUM] Incomplete Frontend-Backend Integration:** The `ShoppingCart.jsx` component is not connected to the `CartContext`, rendering it non-functional.

### Acceptance Criteria Coverage
**Summary: 0 of 5 acceptance criteria fully implemented.**

| AC# | Description | Status | Evidence / Notes |
|---|---|---|---|
| 1 | View all items currently in my shopping cart... | PARTIAL | The backend API (`api/controllers/cart.js:123`) and UI component (`src/ShoppingCart.jsx:20`) exist, but are not connected. |
| 2 | Adjust the quantity of each item in the cart. | MISSING | The backend API endpoint and frontend `updateQuantity` function are not implemented. |
| 3 | Remove items from the cart. | MISSING | The backend API endpoint and frontend `removeFromCart` function are not implemented. |
| 4 | The cart total updates dynamically with changes. | MISSING | A `calculateTotal` function exists (`src/ShoppingCart.jsx:13`), but it cannot be dynamic as modification functions are missing. |
| 5 | The system automatically updates the shopping cart with product changes... | PARTIAL | Stock is checked when adding an item (`api/controllers/cart.js:62`), but not when viewing the cart. |

### Task Completion Validation
**Summary: Tasks were not completed as planned.** The checkboxes in the story are also not checked, but the story was incorrectly moved to review.

| Task | Marked As | Verified As | Evidence / Notes |
|---|---|---|---|
| Create `src/pages/CartPage.jsx` | Incomplete | NOT DONE | Component was created at `src/ShoppingCart.jsx` instead. |
| Add route for `/cart` | Incomplete | NOT DONE | Route is missing in `src/App.jsx`. |
| Create `PUT` endpoint for quantity | Incomplete | NOT DONE | Missing from `api/controllers/cart.js` and `api/routes/cart.js`. |
| Create `DELETE` endpoint for item | Incomplete | NOT DONE | Missing from `api/controllers/cart.js` and `api/routes/cart.js`. |
| Implement frontend quantity controls | Incomplete | NOT DONE | Functions are not implemented in `src/context/CartContext.jsx`. |
| Implement frontend remove button | Incomplete | NOT DONE | Function is not implemented in `src/context/CartContext.jsx`. |

### Action Items

**Code Changes Required:**
- [ ] **[High]** Resolve the merge conflicts in `src/App.jsx`. This must be the first priority.
- [ ] **[High]** Implement the `PUT /api/cart/:cartId/items/:itemId` endpoint and the corresponding `updateCartItem` controller function in `api/controllers/cart.js`.
- [ ] **[High]** Implement the `DELETE /api/cart/:cartId/items/:itemId` endpoint and the corresponding `deleteCartItem` controller function in `api/controllers/cart.js`.
- [ ] **[High]** Implement the `updateQuantity` and `removeFromCart` functions within `src/context/CartContext.jsx` to call the new backend APIs.
- [ ] **[High]** Add the `/cart` route to `src/App.jsx` to render the shopping cart component.
- [ ] **[Medium]** Connect the `ShoppingCart.jsx` component to the `CartContext` by using the `useCart` hook to get cart items and action functions.
- [ ] **[Low]** Consider moving `src/ShoppingCart.jsx` to `src/pages/CartPage.jsx` to align with the technical plan and project structure.
