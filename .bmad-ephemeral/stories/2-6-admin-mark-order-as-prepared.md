# Story 2.6: Admin Mark Order as Prepared

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
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

## 6. File List
- `api/controllers/orders.js`
- `src/AdminOrderDetailPage.jsx`

---

## 7. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft. |
| 1.1 | 2025-11-25 | Amelia | Implemented and reviewed feature. Marked as done. |

---

## Senior Developer Review (AI)
- **Reviewer:** Amelia
- **Date:** 2025-11-25
- **Outcome:** Approve

### Summary
The backend controller logic was refactored to correctly handle status updates and trigger email notifications. The frontend component correctly calls the endpoint and displays the button conditionally. All acceptance criteria are met.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
|---|---|---|---|
| 1 | "Mark as Prepared" button exists. | IMPLEMENTED | `src/AdminOrderDetailPage.jsx` |
| 2 | Action changes order status. | IMPLEMENTED | `api/controllers/orders.js` |
| 3 | "Ready for Pickup" email is sent. | IMPLEMENTED | `api/controllers/orders.js` |

**Summary: 3 of 3 acceptance criteria fully implemented.**
