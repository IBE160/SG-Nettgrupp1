# Epic Technical Specification: {{epic_title}}

Date: {{date}}
Author: {{user_name}}
Epic ID: {{epic_id}}
Status: Draft

---

## Overview

This epic establishes the foundational technical infrastructure and delivers the initial customer-facing value for the ibe160 project. It addresses the core goal of establishing a reliable web presence by setting up the repository, CI/CD pipeline, and database. Concurrently, it delivers the first key user feature: a responsive, public-facing product catalog where customers can view product details. It also provides the business owner with the initial, basic tools needed to manage product data, directly supporting the project's goal of reducing manual effort in inventory management.

## Objectives and Scope

**In Scope:**
- Initializing the Git repository and a basic CI/CD pipeline for automated deployments.
- Defining the database schema for products in Supabase (PostgreSQL) and initializing the database.
- Implementing a secure admin login (FR020).
- Building a basic admin interface for adding, editing (basic fields), and viewing products (FR013).
- Creating a landing page with a Google Maps view of the store's location (FR017).
- Ensuring customers can navigate from the landing page to the product catalog.
- Displaying a responsive product catalog page showing product name, description, price, and stock (FR001, NFR001).
- Creating a responsive product detail page showing full details, including land of origin, vitola, and simplified flavor descriptions (FR002, FR003, NFR001).

**Out of Scope:**
- Online payment processing and shipping.
- Advanced product search or filtering capabilities.
- Customer accounts, user profiles, or loyalty features.
- Product categories other than "Cigars and Accessories".
- Shopping cart and checkout functionality (deferred to Epic 2).

## System Architecture Alignment

This epic directly aligns with the established full-stack architecture. The frontend work will involve creating React components within the defined project structure, primarily `src/pages/Products.jsx`, `src/pages/LandingPage.jsx`, and common components like `ProductCard.jsx`. It will utilize the existing Vite setup and `shadcn/ui` components with Tailwind CSS for styling.

On the backend, this epic will create the initial API endpoints for products. This involves creating a `products.js` route and a corresponding controller in the Node.js/Express application. These controllers will interact with the Supabase database using the `@supabase/supabase-js` client to perform CRUD operations on the `products` table, as outlined in the data architecture. Admin authentication will be handled via Supabase Auth, securing the product management endpoints.

## Detailed Design

### Services and Modules

| Tier | Component | Location | Responsibilities |
|---|---|---|---|
| Frontend | `Products.jsx` | `src/pages/` | Fetches and displays the list of all products. Manages catalog view state. |
| Frontend | `ProductDetail.jsx` | `src/pages/` | Fetches and displays detailed information for a single product. |
| Frontend | `ProductCard.jsx` | `src/components/common/` | Renders a summary of a single product for the catalog view. |
| Frontend | `AdminDashboard.jsx` | `src/pages/` | Provides the UI for admin to manage products (add, edit, view). |
| Frontend | `api.js` | `src/services/` | Centralizes `fetch` calls to the backend API, handling requests and responses. |
| Backend | `products.js` (Router) | `api/routes/` | Defines the API routes for product-related endpoints (`/api/products`, `/api/products/:id`). |
| Backend | `products.js` (Controller) | `api/controllers/` | Contains the business logic for handling product CRUD operations. |
| Backend | `auth.js` (Middleware) | `api/middleware/` | Verifies JWT tokens to protect admin-only routes. |

### Data Models and Contracts

A single table, `products`, will be created in the Supabase (PostgreSQL) database.

**Table: `products`**

| Column Name | Data Type | Constraints | Description | FR Mapping |
|---|---|---|---|---|
| `id` | `uuid` | Primary Key, default: `gen_random_uuid()` | Unique identifier for the product. | - |
| `created_at` | `timestamp with time zone` | Not Null, default: `now()` | Timestamp of when the record was created. | - |
| `name` | `text` | Not Null | The name of the product. | FR001 |
| `description` | `text` | Nullable | A detailed description of the product. | FR001 |
| `price` | `decimal` | Not Null, `CHECK (price >= 0)` | The price of the product. | FR001 |
| `stock_quantity` | `integer` | Not Null, default: 0 | The current number of items in stock. | FR001 |
| `land_of_origin` | `text` | Nullable | The product's country of origin. | FR002 |
| `vitola` | `text` | Nullable | The product's vitola (shape and size). | FR002 |
| `is_archived` | `boolean` | Not Null, default: `false` | Flag to hide product from public view. | FR015 |

### APIs and Interfaces

All endpoints will be under the `/api` prefix, which is proxied from the frontend to the backend server.

**`GET /api/products`**
- **Description:** Retrieves a list of all non-archived products for the public catalog.
- **Auth:** None.
- **Response (200 OK):**
  ```json
  {
    "data": [
      {
        "id": "uuid",
        "name": "string",
        "description": "string",
        "price": "decimal",
        "stock_quantity": "integer",
        "land_of_origin": "string",
        "vitola": "string"
      }
    ]
  }
  ```

**`GET /api/products/:id`**
- **Description:** Retrieves detailed information for a single product.
- **Auth:** None.
- **Response (200 OK):** The full product object as defined above.

**`POST /api/products`**
- **Description:** Adds a new product.
- **Auth:** Admin only (JWT required).
- **Request Body:** JSON object with `name`, `description`, `price`, `stock_quantity`, etc.
- **Response (201 Created):** The newly created product object.

**`PUT /api/products/:id`**
- **Description:** Updates an existing product.
- **Auth:** Admin only (JWT required).
- **Request Body:** JSON object with fields to update.
- **Response (200 OK):** The updated product object.

### Workflows and Sequencing

**Customer - View Products:**
1. User navigates to the website's landing page.
2. User clicks the "View Products" link/button.
3. The frontend `Products.jsx` page component mounts.
4. A `fetch` request is dispatched via `api.js` to `GET /api/products`.
5. The backend controller retrieves all non-archived products from the `products` table in Supabase.
6. The frontend receives the product list and renders `ProductCard.jsx` components for each item.
7. User clicks a specific product, navigating to `/products/:id`.
8. The `ProductDetail.jsx` page mounts and fetches data from `GET /api/products/:id` to display full details.

**Admin - Add Product:**
1. Business Owner logs in via the `LoginPage.jsx`, which sends credentials to a `/api/auth/login` endpoint and receives a JWT.
2. The JWT is stored securely in the frontend.
3. Owner navigates to the Admin Dashboard.
4. Owner fills out the "Add Product" form.
5. On submission, a `fetch` request is dispatched to `POST /api/products` with the new product data and the JWT in the `Authorization` header.
6. The `auth.js` middleware validates the JWT.
7. The backend controller inserts the new product into the Supabase `products` table.
8. The new product is returned to the frontend and the product list in the dashboard is updated.

## Non-Functional Requirements

### Performance

- **Responsiveness (NFR001):** The application must be fully responsive and functional across mobile, tablet, and PC devices.
- **Page Load:** The product catalog and product detail pages should have a Largest Contentful Paint (LCP) of 2.5 seconds or less on a standard broadband connection.
- **API Response Time:** All `GET` requests for products should complete in under 500ms on average.

### Security

- **Secure Transport (NFR004):** All website traffic must be served over HTTPS. The Vercel deployment will handle SSL certificate management.
- **Admin Authentication (FR020):** The admin interface must be protected by a secure login. This will be implemented using Supabase Auth, with JWTs issued upon successful login.
- **Authorization:** Backend API routes for `POST` and `PUT` on `/api/products` must be protected, requiring a valid admin JWT. This will be enforced by `auth.js` middleware.
- **Input Validation:** All user-submitted data (admin forms) must be validated on both the frontend (for immediate feedback) and backend (to prevent malicious data injection) to protect against XSS and other attacks.

### Reliability/Availability

- **Uptime (NFR003):** The application should target a 99.9% uptime. This is supported by the Service Level Agreements (SLAs) of the chosen hosting platforms, Vercel and Supabase, which are designed for high availability.
- **Database Backups:** Supabase provides automated daily backups of the PostgreSQL database, ensuring recoverability in case of data loss.

### Observability

- **Logging:** All backend API requests, responses, and errors will be logged in a structured JSON format using Supabase's built-in logging capabilities. This includes logging the outcome of database operations.
- **Monitoring:** Basic application health monitoring will be available through the Vercel and Supabase dashboards, tracking metrics like serverless function execution, API traffic, and database performance.
- **Error Reporting:** A centralized error handling middleware in the backend will ensure all exceptions are caught and logged consistently, providing a clear trace for debugging.

## Dependencies and Integrations

**NPM Dependencies (from `package.json`):**
- **`express` (^5.1.0):** Backend framework for building the REST API.
- **`react` (^18.2.0):** Frontend library for building the user interface.
- **`react-dom` (^18.2.0):** Serves as the entry point to the DOM and server renderers for React.
- **`react-router-dom` (^7.9.6):** Handles client-side routing for the React application.
- **`jsonwebtoken` (^9.0.2):** Used for creating and verifying JSON Web Tokens for authentication.
- **`bcryptjs` (^3.0.3):** Used for hashing passwords before storing them.

**NPM DevDependencies:**
- **`vite` (^7.2.2):** Frontend build tool and development server.
- **`@vitejs/plugin-react` (^4.2.1):** Vite plugin for React support.
- **`@playwright/test` (^1.56.1):** Framework for End-to-End testing.
- **`@biomejs/biome` (^2.3.6):** Code linter and formatter.
- **`@faker-js/faker` (^10.1.0):** Library for generating mock data for testing.

**External Service Integrations:**
- **Supabase (Database & Auth):** The primary integration point for this epic. The backend will use the `@supabase/supabase-js` client library to interact with the PostgreSQL database for all product data and to manage user authentication for the admin interface.
- **Google Maps API:** The frontend will integrate with the Google Maps Embed API to display the store location on the landing page, as per FR017. This is a client-side only integration.

## Acceptance Criteria (Authoritative)

This section aggregates the acceptance criteria for all stories within Epic 1.

1.  **Story 1.1:** A Git repository is initialized and configured.
2.  **Story 1.1:** A basic CI/CD pipeline is set up for automated builds and deployments.
3.  **Story 1.1:** The application can be successfully deployed and accessed.
4.  **Story 1.2:** A database schema is defined for `products` in Supabase, including fields for name, description, price, stock quantity, land of origin, and vitola.
5.  **Story 1.2:** The database is initialized and accessible by the Express application.
6.  **Story 1.2:** Basic CRUD operations for products can be performed via API endpoints.
7.  **Story 1.3:** A secure admin login page is implemented (FR020).
8.  **Story 1.3:** After logging in, an admin can access a page to add new products with name, description, price, and initial stock (FR013).
9.  **Story 1.3:** An admin can edit an existing product's name, description, price, and stock.
10. **Story 1.3:** An admin can view a list of all products.
11. **Story 1.4:** The landing page contains a clear, responsive button or link to the "Products" page.
12. **Story 1.4:** Clicking this button/link navigates the user to the "Products" page.
13. **Story 1.5:** The "Products" page displays a list of products from the "Cigars and Accessories" category (FR001).
14. **Story 1.5:** Each product in the catalog displays its name, a brief description, price, and current stock quantity.
15. **Story 1.5:** The catalog is up-to-date with product information from the database.
16. **Story 1.6:** Clicking on a product in the catalog navigates to a dedicated product detail page.
17. **Story 1.6:** The detail page displays the product's name, full description, price, real-time stock, land of origin, and vitola (FR001, FR002).
18. **Story 1.6:** The detail page includes simplified, relatable language for taste/flavor descriptions (FR003).
19. **Story 1.7:** The landing page includes an embedded, interactive Google Maps view centered on the store location (FR017).
20. **All Stories:** All UI components are fully responsive across mobile, tablet, and PC devices (NFR001).

## Traceability Mapping

| AC # | Spec Section(s) | Component(s) / API(s) | Test Idea |
|---|---|---|---|
| 1-3 | Overview, System Arch. | Git, Vercel/Deployment Target | E2E: Deploy a test branch and verify the "Hello World" page is accessible via its URL. |
| 4-5 | Data Models | Supabase `products` table | Integration: Write a test script that connects to the test DB and verifies the `products` table and its columns exist. |
| 6 | APIs & Interfaces | `POST`, `GET`, `PUT` `/api/products` | Integration: Test each API endpoint using a test client, verifying correct status codes and payloads for create, read, update. |
| 7 | Security, Workflows | `LoginPage.jsx`, Supabase Auth | E2E: Attempt to access an admin page without logging in, expect redirect. Log in with valid/invalid credentials. |
| 8-10 | Services & Modules, APIs | `AdminDashboard.jsx`, `POST`/`PUT` `/api/products` | E2E: Log in as admin, create a new product, verify it appears in the list. Edit the product and verify changes. |
| 11-12 | System Arch. | `LandingPage.jsx`, React Router | E2E: Load the landing page, click the "View Products" button, and assert that the URL changes to the products page. |
| 13-15 | Data Models, APIs | `Products.jsx`, `GET /api/products` | E2E: Seed the database with mock products. Load the products page and verify all mock products are displayed correctly. |
| 16-18 | APIs, Services & Modules | `ProductDetail.jsx`, `GET /api/products/:id` | E2E: From the products page, click a product. Verify the URL is correct and the detail page shows all expected fields. |
| 19 | Objectives & Scope | `LandingPage.jsx`, Google Maps API | E2E: Load the landing page and assert that the map container element is present and visible. |
| 20 | Performance | All Frontend Components | E2E (Playwright): Run all E2E tests across different viewport sizes (mobile, tablet, desktop) to ensure functionality. |

## Risks, Assumptions, Open Questions

- **Risk:** The accuracy of the online stock quantity is entirely dependent on the business owner's manual updates. If updates are infrequent, customers may see incorrect information.
  - **Mitigation:** This will be highlighted during the handover and training with the business owner. Future epics may include features to simplify stock-taking.
- **Assumption:** The free tiers for Supabase and the Google Maps Embed API will be sufficient for the initial traffic and usage of the application.
  - **Next Step:** Monitor usage post-launch to anticipate any need to upgrade to paid plans.
- **Assumption:** The business owner will provide the "simplified, relatable language for taste/flavor descriptions" (FR003) for each product.
  - **Next Step:** Confirm this with the business owner and determine the format for this content.
- **Question:** What is the exact physical address to be used for the pin on the Google Maps view (FR017)?
  - **Next Step:** Obtain the precise address from the business owner before implementing Story 1.7.

## Test Strategy Summary

The testing strategy will be multi-layered to ensure quality, guided by the `Traceability Mapping` table.

- **Unit Testing:** A framework (e.g., Vitest) will be used to test small, isolated pieces of logic. This is particularly relevant for utility functions (e.g., input validators, data formatters) and potentially for simple, pure UI components.
- **Integration Testing:** Tests will be written to verify the interactions between different parts of the application. Key areas for integration testing include:
  - **API Endpoints:** Testing each API endpoint (`GET`, `POST`, `PUT` for `/api/products`) to ensure they correctly interact with the Supabase database and that the `auth.js` middleware correctly protects admin routes.
  - **Frontend Data Fetching:** Testing React components that fetch data (e.g., `Products.jsx`) to ensure they handle API responses, loading states, and errors correctly.
- **End-to-End (E2E) Testing:** The existing Playwright setup will be used to write tests that simulate full user journeys. Key E2E tests for this epic will include:
  - The complete customer flow: navigating from the landing page, viewing the product catalog, and viewing a product's detail page.
  - The admin login flow, including successful and unsuccessful attempts.
  - The admin product management flow: logging in, adding a new product, and verifying it appears in the public catalog.
  - Responsiveness tests will be conducted by running the E2E suite against multiple viewport sizes as defined in Playwright's configuration.
