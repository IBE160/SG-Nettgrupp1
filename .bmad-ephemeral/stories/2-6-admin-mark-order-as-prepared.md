# Story 2.6: Admin Mark Order as Prepared

**Date:** 2025-11-20
**Author:** BIP
**Status:** Done
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
- [x] Create a `PUT /api/orders/:id` endpoint, protected by admin auth middleware.
- [x] The endpoint should accept a new `status` in the request body.
- [x] The controller logic should update the `status` field for the given order in the `orders` table.

### Task 2: Email Notification
- [x] After successfully updating the order status to "Prepared", the controller should use the Resend service to send an email to the `customer_email` associated with the order.
- [x] The email should state that their order is ready for pickup and include the reference number.

### Task 3: Frontend Button
- [x] In the `AdminOrderDetailPage.jsx` component, add a "Mark as Prepared" button.
- [x] This button should only be visible if the order status is currently 'pending'.
- [x] Clicking the button should call the `PUT /api/orders/:id` endpoint with the new status "Prepared".
- [x] Upon success, the status displayed on the page should update.

---
## 5. Dev Notes
*   The email content should be simple and clear.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|

---
## 7. Code Review
**Reviewer:** Amelia (Developer Agent)
**Date:** 2025-11-23

### Summary
The implementation of the story is good. The backend and frontend changes are well-structured and follow the requirements.

### Issues Found
- The `AdminOrderDetailPage.jsx` component was calling a `GET /api/orders/:id` endpoint that was not defined in the backend.

### Resolution
- Added a `getOrderById` controller function to `api/controllers/orders.js`.
- Added a `GET /api/orders/:id` route to `api/routes/orders.js`.

### Conclusion
All files have been reviewed and are now correct. The story is ready for the next stage.
