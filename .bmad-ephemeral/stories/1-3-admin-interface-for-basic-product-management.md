# Story 1.3: Admin Interface for Basic Product Management

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a Business Owner,
> I want to add, edit, and view basic product information (name, description, price, stock)
> So that I can manage the product catalog.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story introduces the first major feature for the business owner: a secure area to manage products. This involves creating a login page and a dashboard for basic CRUD operations. This work directly builds upon the database schema and API endpoints planned in Story 1.2. The frontend will be built using React and `shadcn/ui` components, and authentication will be handled by Supabase Auth, as specified in the architecture. This is a critical prerequisite for any product-related feature.

*[Source: `docs/architecture.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. A secure admin login page is implemented (FR020).
2. After logging in, I can access a page to add new products with name, description, price, and initial stock (FR013).
3. I can edit an existing product's name, description, price, and stock.
4. I can view a list of all products with their basic details.

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Create Admin Login Page (FR020)
- [ ] Create a new page component `src/pages/LoginPage.jsx`.
- [ ] Use `shadcn/ui` components (`Input`, `Button`, `Card`) to build a simple login form with "Email" and "Password" fields.
- [ ] Implement a function to handle form submission. This function should call the Supabase `signInWithPassword` method.
- [ ] Upon successful login, store the returned JWT in a secure manner (e.g., in memory or a secure cookie) and redirect the user to a new `/admin` route.
- [ ] Display an error message on failed login attempts.

### Task 2: Create Admin Dashboard Page
- [ ] Create a new page component `src/pages/AdminDashboard.jsx`.
- [ ] Create a protected route for `/admin` that checks for a valid JWT. If no token is present, redirect the user to `/login`.
- [ ] On this page, fetch and display a list of all products by calling the `GET /api/products` endpoint.
- [ ] Display the products in a `shadcn/ui` `Table` component, showing columns for Name, Price, and Stock.
- [ ] Add an "Edit" button to each row.

### Task 3: Implement "Add Product" Functionality (FR013)
- [ ] In `AdminDashboard.jsx`, add a "Add New Product" button.
- [ ] Clicking the button should open a `Dialog` (modal) containing a form with fields for Name, Description, Price, and Stock.
- [ ] On form submission, call a new API endpoint `POST /api/products`, sending the product data and the JWT for authorization.
- [ ] The backend must include an `auth.js` middleware on this endpoint to verify the JWT.
- [ ] After a successful API response, close the dialog and refresh the product list.

### Task 4: Implement "Edit Product" Functionality
- [ ] When the "Edit" button on a product row is clicked, open a `Dialog` pre-filled with that product's data.
- [ ] On form submission, call a new API endpoint `PUT /api/products/:id`, sending the updated data and the JWT.
- [ ] The backend must also protect this endpoint with the `auth.js` middleware.
- [ ] After a successful response, close the dialog and refresh the product list to show the updated information.

---

## 5. Dev Notes

*   **Learnings from Previous Story:** The previous story (1.2) is `ready-for-dev` but has not been implemented yet. There are no technical learnings to incorporate at this time.
*   **Authentication:** This is the first story that implements authentication. Follow the Supabase Auth documentation closely. The `architecture.md` specifies using Supabase Auth, not rolling our own JWT logic from scratch with `jsonwebtoken`. The backend middleware should use the Supabase client to validate the token sent from the frontend.
*   **Component Library:** Rely heavily on `shadcn/ui` for all UI elements (Button, Card, Dialog, Table, Input) to maintain design consistency.
*   **API:** This story requires creating the `POST` and `PUT` endpoints for products, which were defined in the Tech Spec for Epic 1. These endpoints MUST be protected by authentication.

**Citations:**
-   Architecture & Auth Strategy: `docs/architecture.md`
-   Epic & ACs: `docs/epics.md`
-   API & Data Model Definitions: `.bmad-ephemeral/stories/tech-spec-epic-1.md`

---

## 6. Dev Agent Record
- **Context Reference:** `1-3-admin-interface-for-basic-product-management.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
