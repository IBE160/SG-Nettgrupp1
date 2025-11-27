# Story 3.1: Admin Edit Full Product Details

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** Epic 3: Admin Product & Inventory Management

---

## 1. User Story

> As a Business Owner,
> I want to edit all details of an existing product, including name, description, price, stock, land of origin, and vitola
> So that I can maintain accurate and and complete product information.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story expands the basic product editing functionality from Epic 1 (Story 1.3) to include all fields. This requires updating the frontend form in the `AdminDashboard.jsx` component and ensuring the backend `PUT /api/products/:id` endpoint can handle updates to all fields defined in the schema.

*[Source: `docs/epics.md`, `docs/architecture.md`]*

---

## 3. Acceptance Criteria

1. From the product list in the admin interface, I can select a product to edit.
2. The edit form pre-populates with existing product data.
3. I can modify the product's name, description, price, stock quantity, land of origin, and vitola (FR014).
4. Changes are saved and reflected in the customer-facing catalog.

---

## 4. Technical Implementation Plan

### Task 1: Update Frontend Edit Form
- [ ] In `AdminDashboard.jsx`, modify the "Edit" dialog's form.
- [ ] Add `Input` fields for `land_of_origin` and `vitola`. Ensure all fields (`name`, `description`, `price`, `stock_quantity`, `land_of_origin`, `vitola`) are present and pre-populate with the selected product's data.

### Task 2: Update Backend API
- [ ] In the `PUT /api/products/:id` controller function in `api/controllers/products.js`, ensure the update logic can handle all new fields. The existing logic should already be flexible enough if it passes the whole request body to the Supabase client.

### Task 3: Testing
- [ ] Write an E2E test to:
    1. Log in as admin.
    2. Click to edit a product.
    3. Change the value of `land_of_origin` and `vitola`.
    4. Save the changes.
    5. Verify the product list shows the updated data.
    6. Navigate to the public product detail page and assert the new values are displayed.

---
## 5. Dev Notes
* This is an incremental update to existing functionality. The main work is on the frontend form.
---

## 6. Dev Agent Record
- **Context Reference:** `3-1-admin-edit-full-product-details.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
