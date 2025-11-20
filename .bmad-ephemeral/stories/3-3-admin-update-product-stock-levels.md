# Story 3.3: Admin Update Product Stock Levels

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
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
- [ ] In the `AdminDashboard.jsx` product table, make the "Stock" column editable.
- [ ] This could be an `Input` field directly in the table row. When the value is changed (and unfocused), it should trigger an API call.

### Task 2: Backend API
- [ ] The existing `PUT /api/products/:id` endpoint can be used for this. The frontend will just send a request body containing only the `stock_quantity` field.
- [ ] Ensure the database has a `CHECK` constraint on the `stock_quantity` column to prevent negative values.

### Task 3: Testing
- [ ] Write an E2E test where an admin changes the stock value in the table, saves/unfocuses, reloads the page, and asserts the new stock value is present.

---
## 5. Dev Notes
* The user experience for the inline edit is key. It should feel quick and seamless. Consider showing a saving indicator briefly after the user makes a change.
---

## 6. Dev Agent Record
- **Context Reference:** `3-3-admin-update-product-stock-levels.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
