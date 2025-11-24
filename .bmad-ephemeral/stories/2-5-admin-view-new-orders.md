# Story 2.5: Admin View New Orders

**Date:** 2025-11-20
**Author:** BIP
**Status:** Done
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Business Owner,
> I want to view a list of all incoming and pending orders
> So that I can manage my workload and prepare orders for pickup.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story extends the Admin Dashboard created in Epic 1 to include order management. The business owner needs to be able to see a list of new orders and view their details. This requires a new API endpoint to fetch orders and frontend work to display them.

*[Source: `docs/PRD.md`, `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. The admin dashboard includes a section or list displaying new orders.
2. Each order entry shows key details (e.g., reference number, customer email, order date, status).
3. I can click on an order to view its full details, including ordered items and quantities (FR010).

---

## 4. Technical Implementation Plan

### Task 1: Backend API for Fetching Orders
- [x] Create a `GET /api/orders` endpoint, protected by the admin auth middleware.
- [x] The controller should fetch all records from the `orders` table.
- [x] Create a `GET /api/orders/:id` endpoint, also protected, that fetches a single order and its associated `order_items` (with product details joined).

### Task 2: Frontend Admin Dashboard UI
- [x] In `AdminDashboard.jsx`, add a new tab or section for "Orders".
- [x] In this section, fetch data from `GET /api/orders` and display the orders in a `Table`.
- [x] The table should show the reference number, customer email, date, and status.
- [x] Make each row clickable. Clicking a row should navigate to a new dynamic route `/admin/orders/:orderId`.

### Task 3: Order Detail View
- [x] Create a new `src/pages/AdminOrderDetailPage.jsx` component.
- [x] This page should fetch data from `GET /api/orders/:orderId` and display the full order details, including the list of products and their quantities.

---
## 5. Dev Notes
*   This is mostly about reading and displaying data. The main complexity is in the backend query to join orders with items and products.
---
## 6. Dev Agent Record
### File List
- api/controllers/orders.js (new)
- api/routes/orders.js (new)
- api-server.js (modified)
- src/AdminProductManagementPage.jsx (modified)
- src/AdminOrderDetailPage.jsx (new)
- src/App.jsx (modified)

### Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.1 | søndag 23. november 2025 | BIP | Added backend API for fetching orders, implemented frontend UI for admin order management (tabbed view), and created a new page for admin order details. |
| 1.0 | 2025-11-20 | BIP | Initial draft |

### Technical Debt / Known Issues
- **Linting Issue:** A persistent formatting error in `src/lib/utils.js` could not be resolved automatically or through precise manual instructions due to PowerShell execution policy restrictions and biome CLI nuances. This requires manual intervention outside of this workflow to conform to biome's strict formatting.

---
