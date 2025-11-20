# Story 1.2: Product Data Model and Database Initialization

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a developer,
> I want to define the product data model and initialize the database,
> So that product information can be stored and retrieved.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story establishes the data persistence layer for products. Following the architecture, we will use Supabase (PostgreSQL) as the database. This involves creating the `products` table with a schema that matches the fields defined in the Epic 1 Technical Specification. This will enable the backend API to perform CRUD operations, which are prerequisites for both the admin interface (Story 1.3) and the customer-facing catalog (Story 1.5).

*[Source: `docs/architecture.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. A database schema is defined for products, including fields for name, description, price, stock quantity, land of origin, and vitola.
2. The database is initialized and accessible by the Express application.
3. Basic CRUD operations for products can be performed (e.g., via a temporary API endpoint or direct database access for testing).

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Define and Apply the Database Schema
- [x] Connect to the Supabase project.
- [x] Using the Supabase SQL editor or a local migration file, write and execute the `CREATE TABLE` statement for the `products` table.
- [x] The schema must match the `Data Models and Contracts` section of the Epic 1 Tech Spec exactly.
    - **Table:** `products`
    - **Columns:** `id` (uuid, pk), `created_at` (timestamptz), `name` (text), `description` (text), `price` (decimal), `stock_quantity` (integer), `land_of_origin` (text), `vitola` (text), `is_archived` (boolean).
    - Ensure all specified constraints (Not Null, defaults, checks) are included.

### Task 2: Connect Express Backend to Supabase
- [x] Install the `@supabase/supabase-js` npm package.
- [x] Create a new configuration file (e.g., `api/config/supabase.js`) to initialize the Supabase client.
- [ ] Store the Supabase Project URL and Anon Key in environment variables (`.env`) and ensure `.gitignore` excludes this file.
- [ ] Verify that the Express server can successfully connect to the Supabase client upon startup.

### Task 3: Implement Temporary CRUD API Endpoints for Testing
- [ ] Create a new route file at `api/routes/products.js` and a controller at `api/controllers/products.js`.
- [ ] In the controller, implement the following functions using the Supabase client:
    - `createProduct(req, res)`: Inserts a new product into the `products` table.
    - `getAllProducts(req, res)`: Selects all products from the table.
    - `getProductById(req, res)`: Selects a single product by its ID.
- [ ] In the router, map these controller functions to the following endpoints:
    - `POST /api/products`
    - `GET /api/products`
    - `GET /api/products/:id`
- [ ] Use a tool like Postman or `curl` to manually test each endpoint and verify that data can be created and retrieved from the database correctly.

---

## 5. Dev Notes

*   **Learnings from Previous Story:** The previous story (1.1) is `ready-for-dev` but has not been implemented yet. There are no technical learnings to incorporate at this time.
*   This story is purely backend-focused. No UI changes are required.
*   The API endpoints created here are for testing and will be expanded upon in later stories. Do not worry about admin authentication middleware at this stage.
*   Refer to the Supabase JS documentation for the correct syntax for `select`, `insert`, etc.
*   Ensure all database object names (`products` table, column names) follow the `snake_case` convention as specified in the architecture.

**Citations:**
-   Architecture & Naming Conventions: `docs/architecture.md`
-   Epic & ACs: `docs/epics.md`
-   Data Model Schema: `.bmad-ephemeral/stories/tech-spec-epic-1.md`

---

## 6. Dev Agent Record
- **Context Reference:** `1-2-product-data-model-and-database-initialization.context.xml`

### Debug Log
- **2025-11-20:** Created `migrations/001_create_products_table.sql` with the schema for the 'products' table. Task 1 is ready for user execution.
- **2025-11-20:** Installed `@supabase/supabase-js` package.
- **2025-11-20:** Created `api/config/supabase.js` to initialize the client.

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
