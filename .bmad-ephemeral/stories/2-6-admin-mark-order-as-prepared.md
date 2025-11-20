# Story 2.6: Admin Mark Order as Prepared

**Date:** 2025-11-20
**Author:** BIP
**Status:** Draft
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Business Owner,
> I want to update the status of an order to "Prepared"
> So that I can track its preparation and notify the customer.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story adds a key action to the order management workflow: marking an order as ready for pickup. This involves a backend endpoint to update the order's status and sending an email notification to the customer.

*[Source: `docs/PRD.md`, `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. From the order detail view in the admin interface, a button/action exists to "Mark as Prepared".
2. Clicking this action changes the order status to "Prepared" (FR011).
3. The system automatically sends a "Ready for Pickup" email notification to the customer (FR019).

---

## 4. Technical Implementation Plan

### Task 1: Backend API for Status Update
- [ ] Create a `PUT /api/orders/:id` endpoint, protected by admin auth middleware.
- [ ] The endpoint should accept a new `status` in the request body.
- [ ] The controller logic should update the `status` field for the given order in the `orders` table.

### Task 2: Email Notification
- [ ] After successfully updating the order status to "Prepared", the controller should use the Resend service to send an email to the `customer_email` associated with the order.
- [ ] The email should state that their order is ready for pickup and include the reference number.

### Task 3: Frontend Button
- [ ] In the `AdminOrderDetailPage.jsx` component, add a "Mark as Prepared" button.
- [ ] This button should only be visible if the order status is currently 'pending'.
- [ ] Clicking the button should call the `PUT /api/orders/:id` endpoint with the new status "Prepared".
- [ ] Upon success, the status displayed on the page should update.

---
## 5. Dev Notes
*   The email content should be simple and clear.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
