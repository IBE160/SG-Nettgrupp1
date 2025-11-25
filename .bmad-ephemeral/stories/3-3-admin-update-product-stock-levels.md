# Story 3.3: Admin Update Product Stock Levels

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
**Epic:** Epic 3: Admin Product & Inventory Management

---

## 1. User Story

> As a Business Owner,
> I want to quickly update the stock levels for products
> So that the online catalog accurately reflects physical inventory.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story provides a more streamlined way for the business owner to manage stock, which is a frequent operation. Instead of going through the full edit form, this provides a more direct way to update just the stock quantity.

*[Source: `docs/PRD.md` (FR016), `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. From the product list or product edit page in the admin interface, I can easily modify the stock quantity for any product (FR016).
2. Changes to stock levels are immediately reflected in the customer-facing catalog.
3. The system prevents setting stock to a negative value.

---

## 4. Technical Implementation Plan

### Task 1: Frontend UI for Quick Stock Update
- [x] In the `AdminDashboard.jsx` product table, make the "Stock" column editable.
- [x] This could be an `Input` field directly in the table row. When the value is changed (and unfocused), it should trigger an API call.

### Task 2: Backend API
- [x] The existing `PUT /api/products/:id` endpoint can be used for this. The frontend will just send a request body containing only the `stock_quantity` field.
- [x] Ensure the database has a `CHECK` constraint on the `stock_quantity` column to prevent negative values.

### Task 3: Testing
- [x] Write an E2E test where an admin changes the stock value in the table, saves/unfocuses, reloads the page, and asserts the new stock value is present.

---
## 5. Dev Notes
* The user experience for the inline edit is key. It should feel quick and seamless. Consider showing a saving indicator briefly after the user makes a change.
---

## 6. File List
- `migrations/006_add_stock_check_constraint.sql`
- `src/pages/AdminDashboard.jsx`
- `tests/e2e/stock-update.spec.ts`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
| 1.2 | 2025-11-25 | Amelia | Implemented feature, added tests, and marked as done. |

---

## 8. Senior Developer Review (AI)
- **Reviewer:** Amelia
- **Date:** 2025-11-25
- **Outcome:** Approve

### Summary
The implementation correctly adds an inline editing feature for stock management on the admin dashboard. A necessary database constraint was added, and the feature is covered by a new E2E test. All acceptance criteria are met.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
|---|---|---|---|
| 1 | Modify stock quantity from product list. | IMPLEMENTED | `src/pages/AdminDashboard.jsx` |
| 2 | Changes are reflected immediately. | IMPLEMENTED | The UI updates optimistically, and a page reload confirms persistence via the E2E test. |
| 3 | Prevents negative stock. | IMPLEMENTED | `migrations/006_add_stock_check_constraint.sql` |

**Summary: 3 of 3 acceptance criteria fully implemented.**
