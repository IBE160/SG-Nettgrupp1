# Story 2.2: Manage Shopping Cart Contents

**Date:** 2025-11-20
**Author:** BIP
**Status:** Draft
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
