# Story 2.1: Add Products to Shopping Cart

**Date:** 2025-11-20
**Author:** BIP
**Status:** Draft
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
- [ ] In Supabase, define a new table `carts` to hold cart sessions.
- [ ] Define a new table `cart_items` with columns for `cart_id` (foreign key to `carts`), `product_id` (foreign key to `products`), and `quantity`.

### Task 2: Backend API for Cart
- [ ] Create new route file `api/routes/cart.js` and controller `api/controllers/cart.js`.
- [ ] Implement a `POST /api/cart` endpoint to create a new cart.
- [ ] Implement a `POST /api/cart/:cartId/items` endpoint that accepts a `productId` and `quantity`. This should handle adding a new item or incrementing the quantity of an existing one.
- [ ] The logic must check `products.stock_quantity` before adding to the cart and return an error if stock is insufficient.

### Task 3: Frontend UI and Logic
- [ ] In `ProductCard.jsx` and `ProductDetailPage.jsx`, add an "Add to Cart" button.
- [ ] Implement frontend state management for the `cartId`. On first add-to-cart, create a new cart via the API and store the ID.
- [ ] When "Add to Cart" is clicked, call the `POST /api/cart/:cartId/items` endpoint.
- [ ] Create a `ShoppingCartIcon.jsx` component in the main header/navigation that displays the number of items in the cart. This value should be updated after a successful "Add to Cart" action.

---
## 5. Dev Notes
*   This is the first story of Epic 2. It's critical to get the data model for the cart correct.
*   The cart should be persistent. For this iteration, we can store the `cartId` in the browser's `localStorage` to persist it between sessions for a non-logged-in user.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
