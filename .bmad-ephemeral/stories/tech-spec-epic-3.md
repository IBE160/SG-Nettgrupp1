# Epic Technical Specification: Epic 3: Admin Product & Inventory Management

Date: 2025-11-20
Author: BIP
Epic ID: 3
Status: Draft

---

## Overview

This epic provides the business owner with advanced tools to fully manage the product catalog and inventory. It builds on the basic admin functionality from Epic 1 by adding the ability to edit all product fields, archive products to hide them from public view, and permanently delete test or erroneous orders. This completes the core set of features required for day-to-day management of the online store, directly addressing the PRD goal to "Reduce manual effort and time spent on inventory and order management."

## Objectives and Scope

**In Scope:**
- Editing all fields of a product, including land of origin and vitola (FR014).
- A mechanism to "archive" and "unarchive" products, controlling their visibility in the public catalog (FR015).
- A streamlined UI for updating only the stock level of a product (FR016).
- A "hard delete" function for orders to permanently remove them from the system (FR012).

**Out of Scope:**
- Bulk editing or importing/exporting of products.
- Reporting or analytics on product performance.

## System Architecture Alignment

This epic primarily expands the existing admin functionality. The frontend work will be concentrated in `AdminDashboard.jsx` and `AdminOrderDetailPage.jsx`, adding new UI controls and logic. On the backend, the existing `PUT /api/products/:id` will be enhanced to handle all fields and the `is_archived` flag. A new `DELETE /api/orders/:id` endpoint will be added to the orders controller. All new functionality will adhere to the established REST and component patterns.

## Detailed Design

### Services and Modules

| Tier | Component | Location | Responsibilities |
|---|---|---|---|
| Frontend | `AdminDashboard.jsx` | `src/pages/` | (Enhanced) Add UI for archiving/unarchiving, filtering archived products, and inline stock editing. |
| Frontend | `AdminOrderDetailPage.jsx` | `src/pages/` | (Enhanced) Add a "Delete Order" button with a confirmation dialog. |
| Backend | `products.js` (Controller) | `api/controllers/` | (Enhanced) Update `PUT` handler to accept all fields; update `GET` handler to filter out archived products. |
| Backend | `orders.js` (Controller) | `api/controllers/` | (Enhanced) Add a `DELETE` handler to permanently remove an order and its items. |

### APIs and Interfaces
- **`PUT /api/products/:id`**: (Enhanced) Will be used to update all product fields, including `land_of_origin`, `vitola`, and `is_archived`.
- **`GET /api/products`**: (Enhanced) The public-facing endpoint must be updated to filter out products where `is_archived = true`.
- **`DELETE /api/orders/:id`**: (New) A new endpoint to permanently delete an order and its associated items.
  - **Response (204 No Content)**

## Non-Functional Requirements
- **Security:** The new `DELETE /api/orders/:id` endpoint must be protected by admin authentication middleware.
- **Usability:** Destructive actions (archive, delete) must have confirmation dialogs to prevent user error.
- **Performance:** Admin operations on products (e.g., edit, archive) should have an API response time of under 500ms.
- **Observability:** Destructive admin actions (e.g., archiving a product, deleting an order) must be logged with the admin's user ID and the target record's ID for auditing purposes.

## Dependencies and Integrations
- No new external dependencies are introduced in this epic. It relies on the existing stack (`React`, `Express`, `@supabase/supabase-js`).

## Acceptance Criteria (Authoritative)
(Aggregated from all stories in Epic 3)
1. Admin can edit a product's name, description, price, stock, land of origin, and vitola.
2. Changes are saved and reflected on the public site.
3. Admin can "Archive" a product.
4. Archived products are hidden from the customer-facing catalog.
5. Admin can view and "Unarchive" an archived product.
6. Admin can modify stock quantity easily from the product list view.
7. Admin can "Delete" an order from the order detail page.
8. A confirmation prompt is shown before deleting an order.
9. Deleted orders are permanently removed.

## Traceability Mapping
| AC # | Spec Section(s) | Component(s) / API(s) | Test Idea |
|---|---|---|---|
| 1-2 | APIs, Detailed Design | `AdminDashboard.jsx`, `PUT /api/products/:id` | E2E: Edit all fields of a product and verify the changes on the public detail page. |
| 3-5 | APIs, Detailed Design | `AdminDashboard.jsx`, `PUT /api/products/:id` | E2E: Archive a product, verify it's gone from the public catalog, then unarchive it and verify it reappears. |
| 6 | Detailed Design | `AdminDashboard.jsx` | E2E: Edit a stock quantity directly in the admin table and verify the change persists. |
| 7-9 | APIs, Detailed Design | `AdminOrderDetailPage.jsx`, `DELETE /api/orders/:id`| E2E: Create a test order, navigate to it in the admin, delete it, and verify it is gone from the order list. |

## Risks, Assumptions, Open Questions
- **Risk:** An admin could accidentally delete a real order. **Mitigation:** The confirmation dialog on the "Delete Order" action is critical and must be implemented.
- **Risk:** The logic for restocking on "Cancel" (Epic 2) vs. not restocking on "Delete" (Epic 3) could be confused. **Mitigation:** The backend logic must be clear and distinct. The `PUT` handler for orders should contain the restocking logic, while the `DELETE` handler should not.

## Test Strategy Summary
- **Integration:** The primary focus should be on integration tests for the API. Verify that the `GET /api/products` endpoint correctly filters archived products. Test that the `DELETE /api/orders/:id` endpoint correctly removes child `order_items` before removing the `orders` record to avoid orphaned rows.
- **E2E:** E2E tests should cover the admin workflows for editing, archiving, and deleting to ensure the UI and API are connected correctly.
