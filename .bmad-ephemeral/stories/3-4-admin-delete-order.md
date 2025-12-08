# Story 3.4: Admin Delete Order

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
**Epic:** Epic 3: Admin Product & Inventory Management

---

## 1. User Story

> As a Business Owner,
> I want to delete an order
> So that I can remove cancelled or erroneous orders from my active list.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story adds the "hard delete" functionality for orders, distinct from the "cancel" action in Epic 2. This is for permanent removal of test orders or other mistakes, cleaning up the admin's view. This is a destructive action and must be handled with care.

*[Source: `docs/PRD.md` (FR012), `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. From the order list or order detail page in the admin interface, I can select an order and choose to "Delete".
2. A confirmation prompt appears before deletion.
3. The order is permanently removed from the admin dashboard (FR012).

---

## 4. Technical Implementation Plan

### Task 1: Backend API for Deletion
- [x] Create a `DELETE /api/orders/:id` endpoint, protected by admin auth middleware.
- [x] The controller logic should delete the record from the `orders` table. `ON DELETE CASCADE` handles the `order_items`.

### Task 2: Frontend UI
- [x] In the `AdminOrderDetailPage.jsx`, add a "Delete Order" button.
- [x] Clicking this button should open a confirmation `AlertDialog` from `shadcn/ui`.
- [x] Only upon confirming the dialog should the `DELETE /api/orders/:id` endpoint be called.
- [x] After a successful deletion, the user should be redirected back to the main orders list on the admin dashboard.

---
## 5. Dev Notes
*   This is a destructive action. The confirmation dialog is not optional; it's a critical part of the user flow to prevent mistakes.
*   Unlike cancelling, deleting an order should *not* return stock to the inventory, as it's intended for non-fulfilled or erroneous orders.
---

## 6. File List
- `api/controllers/orders.js`
- `api/routes/orders.js`
- `src/AdminOrderDetailPage.jsx`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
| 1.2 | 2025-11-25 | Amelia | Implemented feature and marked as done. |

---

## 8. Senior Developer Review (AI)
- **Reviewer:** Amelia
- **Date:** 2025-11-25
- **Outcome:** Approve

### Summary
The implementation correctly adds "hard delete" functionality for orders. The backend API is simple and effective due to the database's `ON DELETE CASCADE` feature. The frontend provides a clear, safe user flow with a confirmation dialog. All acceptance criteria are met.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
|---|---|---|---|
| 1 | "Delete" action exists. | IMPLEMENTED | `src/AdminOrderDetailPage.jsx` |
| 2 | Confirmation prompt appears. | IMPLEMENTED | `src/AdminOrderDetailPage.jsx` |
| 3 | Order is permanently removed. | IMPLEMENTED | `api/controllers/orders.js` |

**Summary: 3 of 3 acceptance criteria fully implemented.**
