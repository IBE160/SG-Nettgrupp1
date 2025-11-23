# Story 2.4: Order Confirmation and Store Notification

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Customer, I want to receive confirmation that my order has been placed.
> As a Business Owner, I want to be notified of new orders.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story connects the frontend checkout form to the backend to create a persistent order. It's a critical step that involves creating a new data model for orders, a new API endpoint to handle order creation, and sending an email notification to the store owner.

*[Source: `docs/PRD.md`, `docs/architecture.md`]*

---

## 3. Acceptance Criteria

1. Upon successful order placement, a confirmation page is displayed with a unique reference number (FR007).
2. An email containing order details is automatically sent to the store's designated email address (FR008).
3. The system records the new order in the admin dashboard (FR009).

---

## 4. Technical Implementation Plan

### Task 1: Database Schema for Orders
- [ ] In Supabase, define a new table `orders` with columns for `id`, `reference_number`, `customer_email`, `customer_phone`, `status` (e.g., 'pending', 'prepared'), and `created_at`.
- [ ] Define a new table `order_items` with columns for `order_id`, `product_id`, and `quantity`.

### Task 2: Backend API for Order Creation
- [ ] Create a `POST /api/orders` endpoint.
- [ ] This endpoint should accept a `cartId` and customer details (`email`, `phone`).
- [ ] The controller logic should:
    1. Create a new record in the `orders` table.
    2. Copy items from `cart_items` to `order_items`, associating them with the new `order_id`.
    3. Decrement the `stock_quantity` for each product in the `products` table.
    4. Delete the original cart from the `carts` table.
    5. Use the Resend (`resend`) npm package to send an email to the store owner with the order details.
    6. Return the new order's `reference_number`.

### Task 3: Frontend Order Submission
- [ ] In `CheckoutPage.jsx`, on form submission, call the `POST /api/orders` endpoint.
- [ ] Upon a successful response, redirect the user to a new `/confirmation/:orderRef` page.
- [ ] Create a `ConfirmationPage.jsx` component that displays the `orderRef` from the URL.

---
## 5. Dev Notes
*   This is a complex, transactional process. The backend logic must be robust to handle potential failures (e.g., if stock is insufficient at the last minute).
*   The Resend API key must be stored securely as an environment variable on the backend.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
