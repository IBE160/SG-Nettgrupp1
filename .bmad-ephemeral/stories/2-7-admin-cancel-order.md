# Story 2.7: Admin Cancel Order

**Date:** 2025-11-20
**Author:** BIP
**Status:** Draft
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Business Owner,
> I want to update the status of an order to "Cancelled"
> So that I can handle orders that are not picked up or are cancelled by the customer.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story adds the final piece of basic order management: cancellation. The critical part of this workflow is not just updating the status, but also returning the stock from the cancelled order back to the main inventory to ensure stock levels remain accurate.

*[Source: `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. From the order detail view in the admin interface, a button/action exists to "Mark as Cancelled".
2. Clicking this action changes the order status to "Cancelled" (FR011).
3. The stock for the items in the cancelled order is returned to the main inventory.
4. The order remains in the system for historical records but is clearly marked as "Cancelled".

---

## 4. Technical Implementation Plan

### Task 1: Backend API for Cancellation
- [ ] In the `PUT /api/orders/:id` endpoint, add logic to handle a status of "Cancelled".
- [ ] When an order is cancelled, the controller must:
    1. Update the order's status to "Cancelled".
    2. Fetch all `order_items` for that order.
    3. For each item, get the quantity and `product_id`.
    4. Increment the `stock_quantity` in the `products` table for that `product_id` by the item's quantity.
- [ ] This entire operation should be transactional to ensure stock is not lost if part of the process fails.

### Task 2: Frontend Button
- [ ] In `AdminOrderDetailPage.jsx`, add a "Mark as Cancelled" button.
- [ ] This button should be visible for orders with a status of 'pending' or 'prepared'.
- [ ] Clicking the button should call the `PUT /api/orders/:id` endpoint with the new status "Cancelled".
- [ ] A confirmation dialog should appear before the action is executed to prevent accidental cancellations.
- [ ] Upon success, the status on the page should update, and the "Mark as Prepared/Cancelled" buttons should become disabled.

---
## 5. Dev Notes
*   The transactional nature of the backend logic is the most complex part of this story. Use a database transaction (`plv8` function in Supabase or similar) to ensure the status update and the stock replenishment happen together or not at all.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
