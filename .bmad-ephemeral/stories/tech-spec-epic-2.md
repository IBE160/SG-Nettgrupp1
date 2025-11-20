# Epic Technical Specification: Epic 2: Click-and-Collect Ordering

Date: 2025-11-20
Author: BIP
Epic ID: 2
Status: Draft

---

## Overview

This epic introduces the core e-commerce functionality of the application: a shopping cart and a click-and-collect checkout process. It builds directly upon the product catalog foundation from Epic 1. Customers will be able to select products, manage them in a persistent cart, and submit their order for in-store pickup. Concurrently, it provides the business owner with the initial tools to receive and manage these new orders, directly addressing the PRD goal to "Increase sales and store traffic through online engagement".

## Objectives and Scope

**In Scope:**
- A persistent shopping cart for guest users, likely using `localStorage` to hold a `cartId`.
- Ability to add products, view the cart, change item quantities, and remove items.
- A checkout process to collect customer email and optional phone number (FR006).
- Clear communication to the user that payment happens at pickup and that age restrictions apply (FR018).
- An automated email notification to the store owner upon new order submission (FR008), using the Resend service.
- A new database schema for `carts`, `cart_items`, `orders`, and `order_items`.
- Admin functionality to view new orders and their details (FR010).
- Admin functionality to mark an order as "Prepared" (triggering a customer notification) or "Cancelled" (restocking items) (FR011, FR019).

**Out of Scope:**
- Online payment processing.
- User accounts and saved order history.
- Shipping and delivery options.

## System Architecture Alignment

This epic introduces new backend routes and controllers for `/api/cart` and `/api/orders`, following the established Node.js/Express pattern. It requires significant additions to the database schema in Supabase. Frontend work will include new components `CartPage.jsx`, `CheckoutPage.jsx`, and `ShoppingCartIcon.jsx`, all using `shadcn/ui` for consistency. The Resend email service, as defined in the architecture, will be integrated for order notifications.

## Detailed Design

### Services and Modules

| Tier | Component | Location | Responsibilities |
|---|---|---|---|
| Frontend | `ShoppingCartIcon.jsx` | `src/components/common/` | Displays the current item count in the cart and links to the cart page. |
| Frontend | `CartPage.jsx` | `src/pages/` | Fetches and displays cart contents; allows quantity changes and item removal. |
| Frontend | `CheckoutPage.jsx` | `src/pages/` | Renders the form for customer details and triggers order submission. |
| Frontend | `ConfirmationPage.jsx`| `src/pages/` | Displays the order reference number after successful submission. |
| Backend | `cart.js` (Router) | `api/routes/` | Defines all `/api/cart/*` endpoints. |
| Backend | `cart.js` (Controller)| `api/controllers/` | Handles logic for creating a cart, and adding/updating/deleting cart items. |
| Backend | `orders.js` (Router) | `api/routes/` | Defines all `/api/orders/*` endpoints. |
| Backend | `orders.js` (Controller)| `api/controllers/` | Handles logic for creating an order from a cart and managing order status. |

### Data Models and Contracts

**Table: `orders`**
- `id` (uuid, pk), `reference_number` (text, unique), `customer_email` (text), `customer_phone` (text, nullable), `status` (text, default: 'pending'), `created_at` (timestamptz)

**Table: `order_items`**
- `id` (uuid, pk), `order_id` (uuid, fk to `orders.id`), `product_id` (uuid, fk to `products.id`), `quantity` (integer), `price_at_time_of_order` (decimal)

*(Note: `carts` and `cart_items` tables are temporary and will be created as part of the implementation of Story 2.1)*

### APIs and Interfaces
- **`POST /api/orders`**: Creates an order from a cart.
  - **Request Body**: `{ "cartId": "uuid", "customerEmail": "string", "customerPhone": "string" }`
  - **Response (201 Created)**: `{ "data": { "referenceNumber": "string" } }`
- **`GET /api/orders`**: (Admin) Gets all orders.
  - **Response (200 OK)**: `{ "data": [ { "id": "uuid", "reference_number": "string", ... } ] }`
- **`GET /api/orders/:id`**: (Admin) Gets a single order with its items.
  - **Response (200 OK)**: `{ "data": { "id": "uuid", ..., "items": [ ... ] } }`
- **`PUT /api/orders/:id`**: (Admin) Updates an order's status.
  - **Request Body**: `{ "status": "string" }`
  - **Response (200 OK)**: `{ "data": { "id": "uuid", "status": "string", ... } }`

## Non-Functional Requirements
- **Security:** All admin-facing order endpoints (`GET /api/orders`, `GET /api/orders/:id`, `PUT /api/orders/:id`) must be protected by the authentication middleware.
- **Reliability:** The order creation process (`POST /api/orders`) must be transactional. It must decrement product stock and clear the cart only upon successful creation of the order record. If any step fails, the entire operation should be rolled back.
- **Reliability:** The order cancellation logic (`PUT /api/orders/:id` with status "Cancelled") must be transactional to ensure stock is correctly replenished.
- **Performance:** Cart operations (add, update) and the final order creation API call should complete in under 800ms.
- **Observability:** The successful creation of an order, including the triggering of email notifications, must be logged with a unique Order ID for tracking.

## Dependencies and Integrations
- **`@supabase/supabase-js`**: Will be used for all database interactions related to carts and orders.
- **`resend`**: NPM package to be used by the backend in the `POST /api/orders` controller to send email notifications.

## Acceptance Criteria (Authoritative)
(Aggregated from all stories in Epic 2)
1. "Add to Cart" button exists on product pages.
2. Clicking adds product to a persistent cart and updates a cart icon.
3. Out-of-stock items cannot be added.
4. User can view cart contents (name, quantity, price).
5. User can adjust quantity and remove items.
6. Cart total updates dynamically.
7. Checkout page collects user details (email, phone).
8. Order confirmation page is displayed with a reference number.
9. Store owner receives a new order email notification.
10. Admin can view a list of new orders.
11. Admin can view full details of a specific order.
12. Admin can mark an order "Prepared", which sends a customer notification.
13. Admin can mark an order "Cancelled", which returns items to stock.

## Traceability Mapping
| AC # | Spec Section(s) | Component(s) / API(s) | Test Idea |
|---|---|---|---|
| 1-3 | APIs, Detailed Design | `ProductCard.jsx`, `POST /api/cart/.../items` | E2E: Click "Add to Cart", verify cart icon updates. |
| 4-6 | APIs, Detailed Design | `CartPage.jsx`, `GET/PUT/DELETE /api/cart/...` | E2E: Go to cart, change quantity, remove item, verify total. |
| 7 | Detailed Design | `CheckoutPage.jsx` | E2E: Fill out checkout form and proceed. |
| 8-9 | APIs, Dependencies | `POST /api/orders`, `ConfirmationPage.jsx`, Resend | Integration: Test the `POST /api/orders` endpoint, mocking the Resend API call, and verify a 201 response. |
| 10-11 | APIs, Detailed Design | `AdminDashboard.jsx`, `GET /api/orders` | E2E: As admin, view the orders list and click one to see details. |
| 12-13 | APIs, Detailed Design | `AdminOrderDetailPage.jsx`, `PUT /api/orders/:id` | E2E: As admin, change order status to "Prepared" and "Cancelled" and verify UI updates. |

## Risks, Assumptions, Open Questions
- **Risk:** The order creation process involves multiple steps (create order, copy items, decrement stock, delete cart). If this is not handled transactionally, it could lead to data corruption (e.g., stock is decremented but the order fails to create). **Mitigation:** Use a database transaction or a stored procedure in Supabase for the entire operation.
- **Assumption:** The store owner's email for notifications is a single, static address that can be stored in an environment variable.

## Test Strategy Summary
- **Unit/Integration:** The most critical tests for this epic are integration tests for the backend API. The transactional nature of order creation and cancellation must be validated thoroughly. Mock the Resend API to avoid sending real emails during tests.
- **E2E:** A full "happy path" E2E test should be created that simulates a user adding an item to the cart, checking out, and placing an order. A separate E2E test should cover the admin's journey of viewing and managing that order.
