# Test Design: Epic 1 - Project Foundation & Product Catalog

**Date:** 2025-11-14
**Author:** BIP
**Status:** Draft / Approved

---

## Executive Summary

**Scope:** full test design for Epic 1

**Risk Summary:**

- Total risks identified: 78
- High-priority risks (≥6): 25
- Critical categories: DATA, BUS, SEC, TECH, OPS

**Coverage Summary:**

- P0 scenarios: 60 (120 hours)
- P1 scenarios: 55 (55 hours)
- P2/P3 scenarios: 2 (1 hours)
- **Total effort**: 176 hours (~22 days)

---

## Risk Assessment

### High-Priority Risks (Score ≥6)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner | Timeline |
|---|---|---|---|---|---|---|---|---|
| R-001 | DATA | Potential for stock inaccuracies due to manual processes. | 3 | 3 | 9 | Implement robust inventory management system with automated updates and reconciliation. | DEV/QA | Epic 3 |
| R-002 | BUS | Inefficient operations, owner's time diverted. | 3 | 2 | 6 | Streamline admin workflows for order and product management. | UX/DEV | Epic 2, 3 |
| R-003 | BUS | Barrier to purchase, impacting customer satisfaction and sales. | 3 | 3 | 9 | Implement user-friendly product catalog, shopping cart, and checkout. | UX/DEV | Epic 1, 2 |
| R-007 | DATA | Failure to maintain stock accuracy (99% match). | 2 | 3 | 6 | Implement automated stock level updates and regular reconciliation processes. | DEV/QA | Epic 3 |
| R-008 | DATA | Inaccurate stock levels displayed to customers (FR001). | 2 | 3 | 6 | Ensure real-time stock synchronization between database and UI. | DEV/QA | Epic 1 |
| R-012 | BUS | Shopping cart functionality issues, preventing purchases (FR004). | 2 | 3 | 6 | Thorough testing of add-to-cart, quantity updates, and cart persistence. | QA | Epic 2 |
| R-015 | BUS | Validation issues on checkout page, preventing order placement (FR006). | 2 | 3 | 6 | Implement comprehensive client-side and server-side validation for all checkout fields. | DEV/QA | Epic 2 |
| R-017 | OPS | Email delivery failures, store not receiving orders (FR008). | 2 | 3 | 6 | Use a reliable transactional email service with delivery monitoring and retry mechanisms. | OPS/DEV | Epic 2 |
| R-018 | DATA | Orders not recorded or lost in the system (FR009). | 2 | 3 | 6 | Implement robust transaction management and error logging for order creation. | DEV/QA | Epic 2 |
| R-022 | DATA | Accidental or erroneous deletion of orders (FR012). | 2 | 3 | 6 | Implement confirmation dialogs and audit logs for order deletion in admin. | DEV/UX | Epic 3 |
| R-026 | DATA | Incorrect stock level updates, leading to discrepancies (FR016). | 2 | 3 | 6 | Implement strict validation and atomic updates for stock level changes. | DEV/QA | Epic 3 |
| R-030 | SEC | Weak authentication, unauthorized access to admin (FR020). | 2 | 3 | 6 | Implement strong password policies, MFA (if feasible), and session management. | DEV/SEC | Epic 1 |
| R-038 | TECH | CI/CD pipeline misconfiguration, leading to deployment failures (Story 1.1). | 2 | 3 | 6 | Thorough testing of CI/CD pipeline, use of infrastructure as code, and monitoring. | OPS/DEV | Epic 1 |
| R-041 | DATA | Database schema design flaws, leading to data integrity issues (Story 1.2). | 2 | 3 | 6 | Conduct thorough schema review, use migrations, and implement database constraints. | DEV | Epic 1 |
| R-042 | TECH | Database connectivity or access issues (Story 1.2). | 2 | 3 | 6 | Implement connection pooling, retry logic, and robust error handling for database access. | DEV/OPS | Epic 1 |
| R-044 | SEC | Vulnerabilities in admin login (e.g., weak password policy, injection) (Story 1.3). | 2 | 3 | 6 | Implement secure authentication mechanisms, input sanitization, and regular security audits. | DEV/SEC | Epic 1 |
| R-049 | DATA | Inaccurate product information displayed to customers (Story 1.5). | 2 | 3 | 6 | Implement robust data synchronization and caching strategies for product data. | DEV/QA | Epic 1 |
| R-057 | BUS | Shopping cart not updating correctly (Story 2.1). | 2 | 3 | 6 | Implement real-time updates and thorough testing of shopping cart logic. | DEV/QA | Epic 2 |
| R-060 | BUS | Shopping cart calculation errors (Story 2.2). | 2 | 3 | 6 | Implement comprehensive unit and integration tests for all cart calculation logic. | DEV/QA | Epic 2 |
| R-062 | SEC | Inadequate input validation, leading to injection or data issues (Story 2.3). | 2 | 3 | 6 | Implement strict input validation and sanitization on both client and server sides. | DEV/SEC | Epic 2 |
| R-064 | OPS | Email delivery failures to store (Story 2.4). | 2 | 3 | 6 | Use a reliable transactional email service with delivery monitoring and retry mechanisms. | OPS/DEV | Epic 2 |
| R-065 | DATA | Order not recorded in admin dashboard (Story 2.4). | 2 | 3 | 6 | Implement robust transaction management and error logging for order creation. | DEV/QA | Epic 2 |
| R-075 | DATA | Incorrect stock level updates, leading to discrepancies (Story 3.3). | 2 | 3 | 6 | Implement strict validation and atomic updates for stock level changes. | DEV/QA | Epic 3 |
| R-076 | BUS | Negative stock levels allowed, leading to order fulfillment issues (Story 3.3). | 2 | 3 | 6 | Implement server-side validation to prevent negative stock levels. | DEV/QA | Epic 3 |
| R-077 | DATA | Accidental deletion of orders without confirmation (Story 3.4). | 2 | 3 | 6 | Implement confirmation dialogs and audit logs for order deletion in admin. | DEV/UX | Epic 3 |

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-004 | BUS | Poor user experience for newcomers, deterring engagement. | 2 | 2 | 4 | Improve taste/flavor descriptions and curated selection. | UX/DEV |
| R-005 | OPS | Failure to achieve operational efficiency target (50% reduction in order processing time). | 2 | 2 | 4 | Monitor and optimize admin workflows. | OPS/DEV |
| R-006 | BUS | Failure to meet sales/adoption target (10 click-and-collect orders/week). | 2 | 2 | 4 | Monitor sales, optimize UX. | BUS/UX |
| R-009 | PERF | Slow updates to stock quantity impacting real-time accuracy (FR001). | 2 | 2 | 4 | Optimize database queries and update mechanisms. | DEV |
| R-010 | DATA | Missing or incorrect product details (FR002). | 2 | 2 | 4 | Implement data validation and thorough testing of product data entry. | QA |
| R-011 | BUS | Descriptions are not helpful for newcomers, leading to poor UX (FR003). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-013 | BUS | Shopping cart not updating correctly, leading to incorrect orders (FR005). | 2 | 2 | 4 | Implement real-time updates and thorough testing of shopping cart logic. | DEV/QA |
| R-014 | SEC | Insecure handling of customer contact details (FR006). | 1 | 3 | 3 | Follow security best practices for data handling. | SEC/DEV |
| R-016 | BUS | Order confirmation issues, leading to customer confusion (FR007). | 2 | 2 | 4 | Thorough testing of order confirmation flow. | QA |
| R-019 | BUS | Admin interface issues, owner unable to view orders (FR010). | 2 | 2 | 4 | Thorough testing of admin UI. | QA |
| R-020 | BUS | Order status update issues, leading to operational inefficiencies (FR011). | 2 | 2 | 4 | Thorough testing of order status update flow. | QA |
| R-021 | SEC | Unauthorized deletion of orders (FR012). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |
| R-023 | BUS | Product creation issues in admin, impacting catalog management (FR013). | 2 | 2 | 4 | Thorough testing of product creation flow. | QA |
| R-024 | BUS | Product editing issues in admin, impacting catalog accuracy (FR014). | 2 | 2 | 4 | Thorough testing of product editing flow. | QA |
| R-025 | BUS | Product archiving issues, leading to incorrect product visibility (FR015). | 2 | 2 | 4 | Thorough testing of product archiving flow. | QA |
| R-028 | BUS | Miscommunication about payment method, customer confusion (FR018). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-029 | OPS | Customer email notification failures (FR019). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-031 | BUS | Poor user experience on different devices (NFR001). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-033 | OPS | System downtime, impacting sales and customer satisfaction (NFR003). | 1 | 3 | 3 | Implement robust hosting, monitoring, and alerting. | OPS |
| R-034 | SEC | Lack of HTTPS, compromising data security (NFR004). | 1 | 3 | 3 | Ensure HTTPS is enforced. | OPS/DEV |
| R-035 | DATA | System fails to notify customer of out-of-stock, leading to frustration (User Journey 1 Edge Case). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-036 | DATA | Stock discrepancy not resolved, leading to order fulfillment issues (User Journey 2 Edge Case). | 2 | 2 | 4 | Implement clear admin workflow for resolving discrepancies. | UX/DEV |
| R-037 | BUS | Unclear implementation of "Curated Selection", leading to poor UX for newcomers (User Journey 3 Note). | 2 | 2 | 4 | Clarify design and conduct user testing. | UX |
| R-039 | OPS | Deployment failures to staging environment (Story 1.1). | 2 | 2 | 4 | Implement robust deployment process and monitoring. | OPS/DEV |
| R-040 | TECH | Dependency conflicts or misconfiguration (Story 1.1). | 2 | 2 | 4 | Use dependency management tools, regular updates. | DEV |
| R-043 | SEC | Insecure direct database access for testing (Story 1.2). | 1 | 3 | 3 | Use secure test data management and access controls. | SEC/DEV |
| R-045 | BUS | Admin interface usability issues, impacting owner's efficiency (Story 1.3). | 2 | 2 | 4 | Conduct usability testing with owner. | UX |
| R-046 | DATA | Data validation issues when adding/editing products (Story 1.3). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-047 | BUS | Navigation issues, preventing customers from reaching product catalog (Story 1.4). | 2 | 2 | 4 | Thorough testing of navigation links. | QA |
| R-048 | BUS | Responsiveness issues on different devices (Story 1.4). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-050 | PERF | Slow loading of product catalog (Story 1.5). | 2 | 2 | 4 | Optimize database queries, image loading, and caching. | DEV |
| R-051 | BUS | Responsiveness issues on different devices (Story 1.5). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-052 | DATA | Inaccurate or incomplete product details (Story 1.6). | 2 | 2 | 4 | Implement data validation and thorough testing of product data display. | QA |
| R-053 | BUS | Poorly written taste/flavor descriptions, confusing newcomers (Story 1.6). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-054 | BUS | Responsiveness issues on different devices (Story 1.6). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-056 | BUS | Map not displaying correctly, customer unable to find store (Story 1.7). | 2 | 2 | 4 | Thorough testing of map display and functionality. | QA |
| R-058 | DATA | Incorrect quantity added to cart (Story 2.1). | 2 | 2 | 4 | Implement input validation and thorough testing of add-to-cart logic. | DEV/QA |
| R-059 | BUS | Failure to handle out-of-stock scenarios, leading to customer frustration (Story 2.1). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-061 | DATA | Shopping cart not reflecting real-time stock changes (Story 2.2). | 2 | 2 | 4 | Implement real-time stock synchronization. | DEV/QA |
| R-063 | BUS | Unclear communication about payment or age limitation, leading to customer confusion (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-066 | BUS | Confirmation page not displaying correctly (Story 2.4). | 2 | 2 | 4 | Thorough testing of confirmation page. | QA |
| R-067 | BUS | Admin dashboard not displaying new orders correctly (Story 2.5). | 2 | 2 | 4 | Thorough testing of admin dashboard. | QA |
| R-068 | PERF | Slow loading of order list in admin (Story 2.5). | 2 | 2 | 4 | Optimize database queries and UI rendering. | DEV |
| R-069 | OPS | Email notification failures to customer (Story 2.6). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-070 | DATA | Order status not updating correctly (Story 2.6). | 2 | 2 | 4 | Thorough testing of order status update. | QA |
| R-071 | DATA | Data validation issues when editing product details (Story 3.1). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-072 | BUS | Changes not reflected in customer-facing catalog (Story 3.1). | 2 | 2 | 4 | Implement robust data synchronization and caching strategies. | DEV/QA |
| R-073 | DATA | Product not correctly archived/unarchived, leading to incorrect visibility (Story 3.2). | 2 | 2 | 4 | Thorough testing of archive/unarchive functionality. | QA |
| R-074 | BUS | Archived products still visible to customers (Story 3.2). | 2 | 2 | 4 | Thorough testing of product visibility after archiving. | QA |
| R-078 | SEC | Unauthorized deletion of orders (Story 3.4). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
|---|---|---|---|---|---|---|
| R-027 | TECH | Google Maps integration issues, map not displaying correctly (FR017). | 1 | 1 | 1 | Monitor |
| R-032 | BUS | Incompatibility with certain browsers, limiting user access (NFR002). | 1 | 2 | 2 | Monitor |
| R-055 | TECH | Google Maps API integration issues (Story 1.7). | 1 | 1 | 1 | Monitor |

---

## Test Coverage Plan

### P0 (Critical) - Run on every commit

**Criteria**: Blocks core journey + High risk (≥6) + No workaround

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.1: Basic Project Infrastructure Setup** | | | | | |
| Verify CI/CD pipeline triggers on push. | E2E/Manual | R-038 | 1 | QA | |
| Verify CI/CD pipeline successfully builds the application. | E2E/Manual | R-038 | 1 | QA | |
| Verify CI/CD pipeline successfully deploys to staging. | E2E/Manual | R-038, R-039 | 1 | QA | |
| Verify deployed application is accessible via URL. | E2E | - | 1 | QA | |
| Verify "Hello World" page content. | E2E | - | 1 | QA | |
| **Story 1.2: Product Data Model and Database Initialization** | | | | | |
| Verify product table exists in database. | Unit/API | R-041 | 1 | DEV | |
| Verify all required product fields exist in schema. | Unit/API | R-041 | 1 | DEV | |
| Verify data types and constraints for product fields. | Unit/API | R-041 | 1 | DEV | |
| Verify application can connect to the database. | Unit/API | R-042 | 1 | DEV | |
| Verify product can be created via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be read via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be updated via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be deleted via API/DB. | API | R-041 | 1 | DEV | |
| **Story 1.3: Admin Interface for Basic Product Management** | | | | | |
| Verify admin login page loads. | E2E | R-044 | 1 | QA | |
| Verify successful admin login with valid credentials. | E2E | R-044 | 1 | QA | |
| Verify unsuccessful admin login with invalid credentials. | E2E | R-044 | 1 | QA | |
| Verify admin session security (e.g., logout, session timeout). | E2E | R-044 | 1 | QA | |
| **Story 1.4: Landing Page Navigation to Products Page** | | | | | |
| Verify "View Products" button/link is present on landing page. | Component/E2E | R-047 | 1 | QA | |
| Verify clicking "View Products" navigates to `/products` page. | E2E | R-047 | 1 | QA | |
| **Story 1.5: Customer-Facing Product Catalog Display** | | | | | |
| Verify `/products` page loads successfully. | E2E | R-049 | 1 | QA | |
| Verify each product card displays name. | Component/E2E | R-049 | 1 | QA | |
| Verify each product card displays price. | Component/E2E | R-049 | 1 | QA | |
| Verify each product card displays current stock quantity. | Component/E2E | R-049 | 1 | QA | |
| Verify product data on page matches database. | E2E/API | R-049 | 1 | QA | |
| **Story 1.6: Customer-Facing Product Detail Page** | | | | | |
| Verify clicking a product card navigates to its detail page. | E2E | - | 1 | QA | |
| Verify product detail page displays name. | Component/E2E | R-052 | 1 | QA | |
| Verify product detail page displays price. | Component/E2E | R-052 | 1 | QA | |
| Verify product detail page displays real-time stock quantity. | Component/E2E | R-052 | 1 | QA | |
| **Story 2.1: Add Products to Shopping Cart** | | | | | |
| Verify "Add to Cart" button is present on product card. | Component/E2E | R-057 | 1 | QA | |
| Verify "Add to Cart" button is present on product detail page. | Component/E2E | R-057 | 1 | QA | |
| Verify clicking "Add to Cart" adds product to cart. | E2E/API | R-057 | 1 | QA | |
| Verify cart content persists across page navigations. | E2E | - | 1 | QA | |
| Verify cart icon updates with item count after adding product. | E2E | - | 1 | QA | |
| Verify "Add to Cart" is disabled for out-of-stock products. | E2E/API | R-059 | 1 | QA | |
| Verify appropriate message displayed for out-of-stock products. | E2E | R-059 | 1 | QA | |
| **Story 2.2: Manage Shopping Cart Contents** | | | | | |
| Verify shopping cart page displays all added items. | E2E | R-060 | 1 | QA | |
| Verify each item displays name, quantity, price. | E2E | R-060 | 1 | QA | |
| Verify customer can increase item quantity. | E2E/API | R-060 | 1 | QA | |
| Verify customer can decrease item quantity. | E2E/API | R-060 | 1 | QA | |
| Verify customer can remove an item from cart. | E2E/API | - | 1 | QA | |
| Verify cart total updates after quantity change. | E2E | R-060 | 1 | QA | |
| Verify cart total updates after item removal. | E2E | R-060 | 1 | QA | |
| **Story 2.3: Customer Checkout Process** | | | | | |
| Verify "Proceed to Checkout" button is present in cart. | E2E | - | 1 | QA | |
| Verify checkout page loads. | E2E | - | 1 | QA | |
| Verify email input field is present and required. | E2E | R-062 | 1 | QA | |
| Verify email input validates for correct format. | E2E/Unit | R-062 | 1 | QA | |
| Verify error message for invalid email format. | E2E | R-062 | 1 | QA | |
| Verify clear statement about payment at pickup on checkout page. | E2E | R-063 | 1 | QA | |
| Verify clear statement about 18+ age limitation on checkout page. | E2E | R-063 | 1 | QA | |
| **Story 2.4: Order Confirmation and Store Notification** | | | | | |
| Verify order confirmation page loads after successful order. | E2E | - | 1 | QA | |
| Verify unique reference number is displayed. | E2E | - | 1 | QA | |
| Verify store receives order details email. | API/Manual | R-064 | 1 | QA | |
| Verify email content includes correct order details. | API/Manual | R-064 | 1 | QA | |
| Verify new order appears in admin dashboard. | E2E/API | R-065 | 1 | QA | |
| **Story 2.5: Admin View New Orders** | | | | | |
| Verify admin dashboard displays "New Orders" section. | E2E | - | 1 | QA | |
| Verify new orders are listed in the section. | E2E/API | - | 1 | QA | |
| Verify order list displays reference number. | E2E | - | 1 | QA | |
| Verify order list displays customer email. | E2E | - | 1 | QA | |
| Verify order list displays order date. | E2E | - | 1 | QA | |
| Verify order list displays order status. | E2E | - | 1 | QA | |
| Verify admin can click an order to view details. | E2E | - | 1 | QA | |
| Verify order detail page displays ordered items and quantities. | E2E/API | - | 1 | QA | |
| **Story 2.6: Admin Mark Order as Processed** | | | | | |
| Verify "Mark as Processed" button is present on order detail page. | E2E | - | 1 | QA | |
| Verify clicking "Mark as Processed" changes status to "Processed". | E2E/API | R-070 | 1 | QA | |
| Verify customer receives "Ready for Pickup" email. | API/Manual | R-069 | 1 | QA | |
| Verify email content is correct. | API/Manual | R-069 | 1 | QA | |
| **Story 3.3: Admin Update Product Stock Levels** | | | | | |
| Verify admin can update stock from product list. | E2E/API | R-075, R-076 | 1 | QA | |
| Verify admin can update stock from product edit page. | E2E/API | R-075, R-076 | 1 | QA | |
| Verify updated stock is immediately reflected in customer catalog. | E2E/API | R-075 | 1 | QA | |
| Verify system prevents setting negative stock. | E2E/API/Unit | R-076 | 1 | QA | |
| Verify error message for negative stock input. | E2E | R-076 | 1 | QA | |
| **Story 3.4: Admin Delete Order** | | | | | |
| Verify confirmation prompt appears before deleting order. | E2E | R-077 | 1 | QA | |
| Verify order is removed from admin dashboard after deletion. | E2E/API | R-077 | 1 | QA | |
**Total P0**: 60 tests, 120 hours

### P1 (High) - Run on PR to main

**Criteria**: Important features + Medium risk (3-4) + Common workflows

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.1: Basic Project Infrastructure Setup** | | | | | |
| Verify Git repository initialization. | Unit/Manual | - | 1 | QA | |
| Verify Git remote configuration. | Unit/Manual | - | 1 | QA | |
| Verify `npm install` completes without errors. | Unit/Manual | R-040 | 1 | DEV | |
| Verify essential dependencies are present in `node_modules`. | Unit/Manual | R-040 | 1 | DEV | |
| **Story 1.2: Product Data Model and Database Initialization** | | | | | |
| Verify database is seeded with initial data (if applicable). | Unit/API | - | 1 | DEV | |
| **Story 1.3: Admin Interface for Basic Product Management** | | | | | |
| Verify admin can navigate to add product page. | E2E | R-045 | 1 | QA | |
| Verify admin can add a new product with valid data. | E2E/API | R-046 | 1 | QA | |
| Verify new product appears in product list. | E2E | - | 1 | QA | |
| Verify error handling for invalid product data (e.g., negative stock). | E2E/API | R-046 | 1 | QA | |
| Verify admin can navigate to edit product page. | E2E | R-045 | 1 | QA | |
| Verify admin can edit product name. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product description. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product price. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product stock. | E2E/API | R-046 | 1 | QA | |
| Verify updated product details are saved and displayed. | E2E | - | 1 | QA | |
| Verify admin can view product list. | E2E | - | 1 | QA | |
| Verify product list displays name, description, price, stock. | E2E | - | 1 | QA | |
| **Story 1.4: Landing Page Navigation to Products Page** | | | | | |
| Verify "View Products" button/link is visible and clickable on mobile. | E2E | R-048 | 1 | QA | |
| Verify "View Products" button/link is visible and clickable on tablet. | E2E | R-048 | 1 | QA | |
| Verify "View Products" button/link is visible and clickable on desktop. | E2E | R-048 | 1 | QA | |
| **Story 1.5: Customer-Facing Product Catalog Display** | | | | | |
| Verify product list displays only "Cigars and Accessories". | E2E/API | - | 1 | QA | |
| Verify each product card displays brief description. | Component/E2E | - | 1 | QA | |
| Verify product catalog layout is responsive on mobile. | E2E | R-051 | 1 | QA | |
| Verify product catalog layout is responsive on tablet. | E2E | R-051 | 1 | QA | |
| Verify product catalog layout is responsive on desktop. | E2E | R-051 | 1 | QA | |
| **Story 1.6: Customer-Facing Product Detail Page** | | | | | |
| Verify product detail page displays full description. | Component/E2E | - | 1 | QA | |
| Verify product detail page displays land of origin. | Component/E2E | - | 1 | QA | |
| Verify product detail page displays vitola. | Component/E2E | - | 1 | QA | |
| Verify taste/flavor descriptions are present and simplified. | Component/E2E | R-053 | 1 | QA | |
| Verify product detail page layout is responsive on mobile. | E2E | R-054 | 1 | QA | |
| Verify product detail page layout is responsive on tablet. | E2E | R-054 | 1 | QA | |
| Verify product detail page layout is responsive on desktop. | E2E | R-054 | 1 | QA | |
| **Story 1.7: Landing Page with Store Location Map** | | | | | |
| Verify Google Maps iframe is present on landing page. | E2E | R-055 | 1 | QA | |
| Verify map displays correct store location. | E2E | R-056 | 1 | QA | |
| Verify store location is marked with a pin. | E2E | - | 1 | QA | |
| **Story 2.2: Manage Shopping Cart Contents** | | | | | |
| Verify cart updates if product price changes in backend. | E2E/API | R-061 | 1 | QA | |
| Verify cart updates if product becomes out-of-stock in backend. | E2E/API | R-061 | 1 | QA | |
| **Story 2.3: Customer Checkout Process** | | | | | |
| Verify phone number input field is present and optional. | E2E | - | 1 | QA | |
| **Story 3.1: Admin Edit Full Product Details** | | | | | |
| Verify admin can select a product for editing. | E2E | - | 1 | QA | |
| Verify edit form loads with current product data. | E2E/API | - | 1 | QA | |
| Verify admin can modify product name. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product description. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product price. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product stock quantity. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product land of origin. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product vitola. | E2E/API | R-071 | 1 | QA | |
| Verify saved changes are reflected in admin product list. | E2E | R-072 | 1 | QA | |
| Verify saved changes are reflected in customer-facing product detail page. | E2E | R-072 | 1 | QA | |
| **Story 3.2: Admin Archive Product** | | | | | |
| Verify "Archive" option is available for products. | E2E | - | 1 | QA | |
| Verify archived product is no longer visible in customer catalog. | E2E/API | R-073, R-074 | 1 | QA | |
| Verify archived product is visible in admin (e.g., via filter). | E2E/API | R-073 | 1 | QA | |
| Verify admin can unarchive a product. | E2E/API | - | 1 | QA | |
| Verify unarchived product is visible in customer catalog. | E2E/API | - | 1 | QA | |
| **Story 3.4: Admin Delete Order** | | | | | |
| Verify "Delete" option is available for orders. | E2E | - | 1 | QA | |
**Total P1**: 55 tests, 55 hours

### P2 (Medium) - Run nightly/weekly

**Criteria**: Secondary features + Low risk (1-2) + Edge cases

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.7: Landing Page with Store Location Map** | | | | | |
| Verify map can be zoomed. | E2E | - | 1 | QA | |
| Verify map can be panned. | E2E | - | 1 | QA | |
**Total P2**: 2 tests, 1 hours

### P3 (Low) - Run on-demand

**Criteria**: Nice-to-have + Exploratory + Performance benchmarks

| Requirement | Test Level | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| (No P3 scenarios identified for this epic) | | | | | |
**Total P3**: 0 tests, 0 hours

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] **Story 1.1:** Verify deployed application is accessible via URL.
- [ ] **Story 1.1:** Verify "Hello World" page content.
- [ ] **Story 1.3:** Verify admin login page loads.
- [ ] **Story 1.3:** Verify successful admin login with valid credentials.
- [ ] **Story 1.4:** Verify "View Products" button/link is present on landing page.
- [ ] **Story 1.4:** Verify clicking "View Products" navigates to `/products` page.
- [ ] **Story 1.5:** Verify `/products` page loads successfully.
- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product card.
- [ ] **Story 2.1:** Verify clicking "Add to Cart" adds product to cart.
- [ ] **Story 2.3:** Verify checkout page loads.
- [ ] **Story 2.3:** Verify email input field is present and required.

**Total**: 11 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] **Story 1.1:** Verify CI/CD pipeline triggers on push.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully builds the application.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully deploys to staging.
- [ ] **Story 1.2:** Verify product table exists in database.
- [ ] **Story 1.2:** Verify all required product fields exist in schema.
- [ ] **Story 1.2:** Verify data types and constraints for product fields.
- [ ] **Story 1.2:** Verify application can connect to the database.
- [ ] **Story 1.2:** Verify product can be created via API/DB.
- [ ] **Story 1.2:** Verify product can be read via API/DB.
- [ ] **Story 1.2:** Verify product can be updated via API/DB.
- [ ] **Story 1.2:** Verify product can be deleted via API/DB.
- [ ] **Story 1.3:** Verify unsuccessful admin login with invalid credentials.
- [ ] **Story 1.3:** Verify admin session security (e.g., logout, session timeout).
- [ ] **Story 1.5:** Verify each product card displays name.
- [ ] **Story 1.5:** Verify each product card displays price.
- [ ] **Story 1.5:** Verify each product card displays current stock quantity.
- [ ] **Story 1.5:** Verify product data on page matches database.
- [ ] **Story 1.6:** Verify clicking a product card navigates to its detail page.
- [ ] **Story 1.6:** Verify product detail page displays name.
- [ ] **Story 1.6:** Verify product detail page displays price.
- [ ] **Story 1.6:** Verify product detail page displays real-time stock quantity.
- [ ] **Story 2.1:** Verify cart content persists across page navigations.
- [ ] **Story 2.1:** Verify cart icon updates with item count after adding product.
- [ ] **Story 2.1:** Verify "Add to Cart" is disabled for out-of-stock products.
- [ ] **Story 2.1:** Verify appropriate message displayed for out-of-stock products.
- [ ] **Story 2.2:** Verify shopping cart page displays all added items.
- [ ] **Story 2.2:** Verify each item displays name, quantity, price.
- [ ] **Story 2.2:** Verify customer can increase item quantity.
- [ ] **Story 2.2:** Verify customer can decrease item quantity.
- [ ] **Story 2.2:** Verify customer can remove an item from cart.
- [ ] **Story 2.2:** Verify cart total updates after quantity change.
- [ ] **Story 2.2:** Verify cart total updates after item removal.
- [ ] **Story 2.3:** Verify email input validates for correct format.
- [ ] **Story 2.3:** Verify error message for invalid email format.
- [ ] **Story 2.3:** Verify clear statement about payment at pickup on checkout page.
- [ ] **Story 2.3:** Verify clear statement about 18+ age limitation on checkout page.
- [ ] **Story 2.4:** Verify order confirmation page loads after successful order.
- [ ] **Story 2.4:** Verify unique reference number is displayed.
- [ ] **Story 2.4:** Verify store receives order details email.
- [ ] **Story 2.4:** Verify email content includes correct order details.
- [ ] **Story 2.4:** Verify new order appears in admin dashboard.
- [ ] **Story 2.5:** Verify admin dashboard displays "New Orders" section.
- [ ] **Story 2.5:** Verify new orders are listed in the section.
- [ ] **Story 2.5:** Verify order list displays reference number.
- [ ] **Story 2.5:** Verify order list displays customer email.
- [ ] **Story 2.5:** Verify order list displays order date.
- [ ] **Story 2.5:** Verify order list displays order status.
- [ ] **Story 2.5:** Verify admin can click an order to view details.
- [ ] **Story 2.5:** Verify order detail page displays ordered items and quantities.
- [ ] **Story 2.6:** Verify "Mark as Processed" button is present on order detail page.
- [ ] **Story 2.6:** Verify clicking "Mark as Processed" changes status to "Processed".
- [ ] **Story 2.6:** Verify customer receives "Ready for Pickup" email.
- [ ] **Story 2.6:** Verify email content is correct.
- [ ] **Story 3.3:** Verify admin can update stock from product list.
- [ ] **Story 3.3:** Verify admin can update stock from product edit page.
- [ ] **Story 3.3:** Verify updated stock is immediately reflected in customer catalog.
- [ ] **Story 3.3:** Verify system prevents setting negative stock.
- [ ] **Story 3.3:** Verify error message for negative stock input.
- [ ] **Story 3.4:** Verify confirmation prompt appears before deleting order.
- [ ] **Story 3.4:** Verify order is removed from admin dashboard after deletion.

**Total**: 60 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] **Story 1.1:** Verify Git repository initialization.
- [ ] **Story 1.1:** Verify Git remote configuration.
- [ ] **Story 1.1:** Verify `npm install` completes without errors.
- [ ] **Story 1.1:** Verify essential dependencies are present in `node_modules`.
- [ ] **Story 1.2:** Verify database is seeded with initial data (if applicable).
- [ ] **Story 1.3:** Verify admin can navigate to add product page.
- [ ] **Story 1.3:** Verify admin can add a new product with valid data.
- [ ] **Story 1.3:** Verify new product appears in product list.
- [ ] **Story 1.3:** Verify error handling for invalid product data (e.g., negative stock).
- [ ] **Story 1.3:** Verify admin can navigate to edit product page.
- [ ] **Story 1.3:** Verify admin can edit product name.
- [ ] **Story 1.3:** Verify admin can edit product description.
- [ ] **Story 1.3:** Verify admin can edit product price.
- [ ] **Story 1.3:** Verify admin can edit product stock.
- [ ] **Story 1.3:** Verify updated product details are saved and displayed.
- [ ] **Story 1.3:** Verify admin can view product list.
- [ ] **Story 1.3:** Verify product list displays name, description, price, stock.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on mobile.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on tablet.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on desktop.
- [ ] **Story 1.5:** Verify product list displays only "Cigars and Accessories".
- [ ] **Story 1.5:** Verify each product card displays brief description.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on mobile.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on tablet.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on desktop.
- [ ] **Story 1.6:** Verify product detail page displays full description.
- [ ] **Story 1.6:** Verify product detail page displays land of origin.
- [ ] **Story 1.6:** Verify product detail page displays vitola.
- [ ] **Story 1.6:** Verify taste/flavor descriptions are present and simplified.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on mobile.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on tablet.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on desktop.
- [ ] **Story 1.7:** Verify Google Maps iframe is present on landing page.
- [ ] **Story 1.7:** Verify map displays correct store location.
- [ ] **Story 1.7:** Verify store location is marked with a pin.
- [ ] **Story 2.2:** Verify cart updates if product price changes in backend.
- [ ] **Story 2.2:** Verify cart updates if product becomes out-of-stock in backend.
- [ ] **Story 2.3:** Verify phone number input field is present and optional.
- [ ] **Story 3.1:** Verify admin can select a product for editing.
- [ ] **Story 3.1:** Verify edit form loads with current product data.
- [ ] **Story 3.1:** Verify admin can modify product name.
- [ ] **Story 3.1:** Verify admin can modify product description.
- [ ] **Story 3.1:** Verify admin can modify product price.
- [ ] **Story 3.1:** Verify admin can modify product stock quantity.
- [ ] **Story 3.1:** Verify admin can modify product land of origin.
- [ ] **Story 3.1:** Verify admin can modify product vitola.
- [ ] **Story 3.1:** Verify saved changes are reflected in admin product list.
- [ ] **Story 3.1:** Verify saved changes are reflected in customer-facing product detail page.
- [ ] **Story 3.2:** Verify "Archive" option is available for products.
- [ ] **Story 3.2:** Verify archived product is no longer visible in customer catalog.
- [ ] **Story 3.2:** Verify archived product is visible in admin (e.g., via filter).
- [ ] **Story 3.2:** Verify admin can unarchive a product.
- [ ] **Story 3.2:** Verify unarchived product is visible in customer catalog.
- [ ] **Story 3.4:** Verify "Delete" option is available for orders.

**Total**: 55 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- [ ] **Story 1.7:** Verify map can be zoomed.
- [ ] **Story 1.7:** Verify map can be panned.

**Total**: 2 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
|---|---|---|---|---|
| P0 | 60 | 2.0 | 120 | Complex setup, security |
| P1 | 55 | 1.0 | 55 | Standard coverage |
| P2 | 2 | 0.5 | 1 | Simple scenarios |
| P3 | 0 | 0.25 | 0 | Exploratory |
| **Total** | **117** | **-** | **176** | **~22 days** |

### Prerequisites

**Test Data:**

- Admin user (for admin interface testing)
- Customer user (for customer-facing flows)
- Products with various stock levels (in-stock, out-of-stock)
- Products with different details (name, description, price, origin, vitola)
- Archived products
- Pending, Processed, Completed orders
- Dynamically generated using factories (`@faker-js/faker`)
- Seeded via API or direct database access

**Tooling:**

- Playwright (Test Framework, Test Runner, Assertion Library)
- `@faker-js/faker` (Data Generation)
- Playwright `request` fixture or dedicated API client (API Testing)
- Database client/ORM (Database Access)
- GitHub Actions (CI/CD)
- ESLint, Prettier (Code Quality)

**Environment:**

- Node.js (LTS), npm, Git (Local Development)
- Dedicated test database instance
- Staging environment for E2E testing
- Environment variables for secrets (`.env`, GitHub Secrets)

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: ≥95% (waivers required for failures)
- **P2/P3 pass rate**: ≥90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths**: ≥80%
- **Security scenarios**: 100%
- **Business logic**: ≥70%
- **Edge cases**: ≥50%

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (≥6) items unmitigated
- [ ] Security tests (SEC category) pass 100%
- [ ] Performance targets met (PERF category)

---

## Mitigation Plans

### R-001: Potential for stock inaccuracies due to manual processes. (Score: 9)

**Mitigation Strategy:** Implement robust inventory management system with automated updates and reconciliation.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Thorough testing of inventory system, regular audits.

### R-002: Inefficient operations, owner's time diverted. (Score: 6)

**Mitigation Strategy:** Streamline admin workflows for order and product management.
**Owner:** UX/DEV
**Timeline:** Epic 2, 3
**Status:** Planned / In Progress / Complete
**Verification:** Owner feedback, time tracking.

### R-003: Barrier to purchase, impacting customer satisfaction and sales. (Score: 9)

**Mitigation Strategy:** Implement user-friendly product catalog, shopping cart, and checkout.
**Owner:** UX/DEV
**Timeline:** Epic 1, 2
**Status:** Planned / In Progress / Complete
**Verification:** User testing, sales metrics.

### R-007: Failure to maintain stock accuracy (99% match). (Score: 6)

**Mitigation Strategy:** Implement automated stock level updates and regular reconciliation processes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Monthly stock audits.

### R-008: Inaccurate stock levels displayed to customers (FR001). (Score: 6)

**Mitigation Strategy:** Ensure real-time stock synchronization between database and UI.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock display.

### R-012: Shopping cart functionality issues, preventing purchases (FR004). (Score: 6)

**Mitigation Strategy:** Thorough testing of add-to-cart, quantity updates, and cart persistence.
**Owner:** QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart.

### R-015: Validation issues on checkout page, preventing order placement (FR006). (Score: 6)

**Mitigation Strategy:** Implement comprehensive client-side and server-side validation for all checkout fields.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for checkout validation.

### R-017: Email delivery failures, store not receiving orders (FR008). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-018: Orders not recorded or lost in the system (FR009). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-022: Accidental or erroneous deletion of orders (FR012). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### R-026: Incorrect stock level updates, leading to discrepancies (FR016). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-030: Weak authentication, unauthorized access to admin (FR020). (Score: 6)

**Mitigation Strategy:** Implement strong password policies, MFA (if feasible), and session management.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-038: CI/CD pipeline misconfiguration, leading to deployment failures (Story 1.1). (Score: 6)

**Mitigation Strategy:** Thorough testing of CI/CD pipeline, use of infrastructure as code, and monitoring.
**Owner:** OPS/DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** CI/CD pipeline runs, deployment success rate.

### R-041: Database schema design flaws, leading to data integrity issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Conduct thorough schema review, use migrations, and implement database constraints.
**Owner:** DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Database integrity checks, unit tests for data models.

### R-042: Database connectivity or access issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Implement connection pooling, retry logic, and robust error handling for database access.
**Owner:** DEV/OPS
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Integration tests for database connectivity.

### R-044: Vulnerabilities in admin login (e.g., weak password policy, injection) (Story 1.3). (Score: 6)

**Mitigation Strategy:** Implement secure authentication mechanisms, input sanitization, and regular security audits.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-049: Inaccurate product information displayed to customers (Story 1.5). (Score: 6)

**Mitigation Strategy:** Implement robust data synchronization and caching strategies for product data.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for product display accuracy.

### R-057: Shopping cart not updating correctly (Story 2.1). (Score: 6)

**Mitigation Strategy:** Implement real-time updates and thorough testing of shopping cart logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart updates.

### R-060: Shopping cart calculation errors (Story 2.2). (Score: 6)

**Mitigation Strategy:** Implement comprehensive unit and integration tests for all cart calculation logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Unit and integration tests for cart calculations.

### R-062: Inadequate input validation, leading to injection or data issues (Story 2.3). (Score: 6)

**Mitigation Strategy:** Implement strict input validation and sanitization on both client and server sides.
**Owner:** DEV/SEC
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing, unit tests for validation.

### R-064: Email delivery failures to store (Story 2.4). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-065: Order not recorded in admin dashboard (Story 2.4). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-075: Incorrect stock level updates, leading to discrepancies (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-076: Negative stock levels allowed, leading to order fulfillment issues (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement server-side validation to prevent negative stock levels.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for negative stock prevention.

### R-077: Accidental deletion of orders without confirmation (Story 3.4). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-004 | BUS | Poor user experience for newcomers, deterring engagement. | 2 | 2 | 4 | Improve taste/flavor descriptions and curated selection. | UX/DEV |
| R-005 | OPS | Failure to achieve operational efficiency target (50% reduction in order processing time). | 2 | 2 | 4 | Monitor and optimize admin workflows. | OPS/DEV |
| R-006 | BUS | Failure to meet sales/adoption target (10 click-and-collect orders/week). | 2 | 2 | 4 | Monitor sales, optimize UX. | BUS/UX |
| R-009 | PERF | Slow updates to stock quantity impacting real-time accuracy (FR001). | 2 | 2 | 4 | Optimize database queries and update mechanisms. | DEV |
| R-010 | DATA | Missing or incorrect product details (FR002). | 2 | 2 | 4 | Implement data validation and thorough testing of product data entry. | QA |
| R-011 | BUS | Descriptions are not helpful for newcomers, leading to poor UX (FR003). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-013 | BUS | Shopping cart not updating correctly, leading to incorrect orders (FR005). | 2 | 2 | 4 | Implement real-time updates and thorough testing of shopping cart logic. | DEV/QA |
| R-014 | SEC | Insecure handling of customer contact details (FR006). | 1 | 3 | 3 | Follow security best practices for data handling. | SEC/DEV |
| R-016 | BUS | Order confirmation issues, leading to customer confusion (FR007). | 2 | 2 | 4 | Thorough testing of order confirmation flow. | QA |
| R-019 | BUS | Admin interface issues, owner unable to view orders (FR010). | 2 | 2 | 4 | Thorough testing of admin UI. | QA |
| R-020 | BUS | Order status update issues, leading to operational inefficiencies (FR011). | 2 | 2 | 4 | Thorough testing of order status update flow. | QA |
| R-021 | SEC | Unauthorized deletion of orders (FR012). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |
| R-023 | BUS | Product creation issues in admin, impacting catalog management (FR013). | 2 | 2 | 4 | Thorough testing of product creation flow. | QA |
| R-024 | BUS | Product editing issues in admin, impacting catalog accuracy (FR014). | 2 | 2 | 4 | Thorough testing of product editing flow. | QA |
| R-025 | BUS | Product archiving issues, leading to incorrect product visibility (FR015). | 2 | 2 | 4 | Thorough testing of product archiving flow. | QA |
| R-028 | BUS | Miscommunication about payment method, customer confusion (FR018). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-029 | OPS | Customer email notification failures (FR019). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-031 | BUS | Poor user experience on different devices (NFR001). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-033 | OPS | System downtime, impacting sales and customer satisfaction (NFR003). | 1 | 3 | 3 | Implement robust hosting, monitoring, and alerting. | OPS |
| R-034 | SEC | Lack of HTTPS, compromising data security (NFR004). | 1 | 3 | 3 | Ensure HTTPS is enforced. | OPS/DEV |
| R-035 | DATA | System fails to notify customer of out-of-stock, leading to frustration (User Journey 1 Edge Case). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-036 | DATA | Stock discrepancy not resolved, leading to order fulfillment issues (User Journey 2 Edge Case). | 2 | 2 | 4 | Implement clear admin workflow for resolving discrepancies. | UX/DEV |
| R-037 | BUS | Unclear implementation of "Curated Selection", leading to poor UX for newcomers (User Journey 3 Note). | 2 | 2 | 4 | Clarify design and conduct user testing. | UX |
| R-039 | OPS | Deployment failures to staging environment (Story 1.1). | 2 | 2 | 4 | Implement robust deployment process and monitoring. | OPS/DEV |
| R-040 | TECH | Dependency conflicts or misconfiguration (Story 1.1). | 2 | 2 | 4 | Use dependency management tools, regular updates. | DEV |
| R-043 | SEC | Insecure direct database access for testing (Story 1.2). | 1 | 3 | 3 | Use secure test data management and access controls. | SEC/DEV |
| R-045 | BUS | Admin interface usability issues, impacting owner's efficiency (Story 1.3). | 2 | 2 | 4 | Conduct usability testing with owner. | UX |
| R-046 | DATA | Data validation issues when adding/editing products (Story 1.3). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-047 | BUS | Navigation issues, preventing customers from reaching product catalog (Story 1.4). | 2 | 2 | 4 | Thorough testing of navigation links. | QA |
| R-048 | BUS | Responsiveness issues on different devices (Story 1.4). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-050 | PERF | Slow loading of product catalog (Story 1.5). | 2 | 2 | 4 | Optimize database queries, image loading, and caching. | DEV |
| R-051 | BUS | Responsiveness issues on different devices (Story 1.5). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-052 | DATA | Inaccurate or incomplete product details (Story 1.6). | 2 | 2 | 4 | Implement data validation and thorough testing of product data display. | QA |
| R-053 | BUS | Poorly written taste/flavor descriptions, confusing newcomers (Story 1.6). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-054 | BUS | Responsiveness issues on different devices (Story 1.6). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-056 | BUS | Map not displaying correctly, customer unable to find store (Story 1.7). | 2 | 2 | 4 | Thorough testing of map display and functionality. | QA |
| R-058 | DATA | Incorrect quantity added to cart (Story 2.1). | 2 | 2 | 4 | Implement input validation and thorough testing of add-to-cart logic. | DEV/QA |
| R-059 | BUS | Failure to handle out-of-stock scenarios, leading to customer frustration (Story 2.1). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-061 | DATA | Shopping cart not reflecting real-time stock changes (Story 2.2). | 2 | 2 | 4 | Implement real-time stock synchronization. | DEV/QA |
| R-063 | BUS | Unclear communication about payment or age limitation, leading to customer confusion (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-066 | BUS | Confirmation page not displaying correctly (Story 2.4). | 2 | 2 | 4 | Thorough testing of confirmation page. | QA |
| R-067 | BUS | Admin dashboard not displaying new orders correctly (Story 2.5). | 2 | 2 | 4 | Thorough testing of admin dashboard. | QA |
| R-068 | PERF | Slow loading of order list in admin (Story 2.5). | 2 | 2 | 4 | Optimize database queries and UI rendering. | DEV |
| R-069 | OPS | Email notification failures to customer (Story 2.6). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-070 | DATA | Order status not updating correctly (Story 2.6). | 2 | 2 | 4 | Thorough testing of order status update. | QA |
| R-071 | DATA | Data validation issues when editing product details (Story 3.1). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-072 | BUS | Changes not reflected in customer-facing catalog (Story 3.1). | 2 | 2 | 4 | Implement robust data synchronization and caching strategies. | DEV/QA |
| R-073 | DATA | Product not correctly archived/unarchived, leading to incorrect visibility (Story 3.2). | 2 | 2 | 4 | Thorough testing of archive/unarchive functionality. | QA |
| R-074 | BUS | Archived products still visible to customers (Story 3.2). | 2 | 2 | 4 | Thorough testing of product visibility after archiving. | QA |
| R-078 | SEC | Unauthorized deletion of orders (Story 3.4). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
|---|---|---|---|---|---|---|
| R-027 | TECH | Google Maps integration issues, map not displaying correctly (FR017). | 1 | 1 | 1 | Monitor |
| R-032 | BUS | Incompatibility with certain browsers, limiting user access (NFR002). | 1 | 2 | 2 | Monitor |
| R-055 | TECH | Google Maps API integration issues (Story 1.7). | 1 | 1 | 1 | Monitor |

---

## Test Coverage Plan

### P0 (Critical) - Run on every commit

**Criteria**: Blocks core journey + High risk (≥6) + No workaround

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.1: Basic Project Infrastructure Setup** | | | | | |
| Verify CI/CD pipeline triggers on push. | E2E/Manual | R-038 | 1 | QA | |
| Verify CI/CD pipeline successfully builds the application. | E2E/Manual | R-038 | 1 | QA | |
| Verify CI/CD pipeline successfully deploys to staging. | E2E/Manual | R-038, R-039 | 1 | QA | |
| Verify deployed application is accessible via URL. | E2E | - | 1 | QA | |
| Verify "Hello World" page content. | E2E | - | 1 | QA | |
| **Story 1.2: Product Data Model and Database Initialization** | | | | | |
| Verify product table exists in database. | Unit/API | R-041 | 1 | DEV | |
| Verify all required product fields exist in schema. | Unit/API | R-041 | 1 | DEV | |
| Verify data types and constraints for product fields. | Unit/API | R-041 | 1 | DEV | |
| Verify application can connect to the database. | Unit/API | R-042 | 1 | DEV | |
| Verify product can be created via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be read via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be updated via API/DB. | API | R-041 | 1 | DEV | |
| Verify product can be deleted via API/DB. | API | R-041 | 1 | DEV | |
| **Story 1.3: Admin Interface for Basic Product Management** | | | | | |
| Verify admin login page loads. | E2E | R-044 | 1 | QA | |
| Verify successful admin login with valid credentials. | E2E | R-044 | 1 | QA | |
| Verify unsuccessful admin login with invalid credentials. | E2E | R-044 | 1 | QA | |
| Verify admin session security (e.g., logout, session timeout). | E2E | R-044 | 1 | QA | |
| **Story 1.4: Landing Page Navigation to Products Page** | | | | | |
| Verify "View Products" button/link is present on landing page. | Component/E2E | R-047 | 1 | QA | |
| Verify clicking "View Products" navigates to `/products` page. | E2E | R-047 | 1 | QA | |
| **Story 1.5: Customer-Facing Product Catalog Display** | | | | | |
| Verify `/products` page loads successfully. | E2E | R-049 | 1 | QA | |
| Verify each product card displays name. | Component/E2E | R-049 | 1 | QA | |
| Verify each product card displays price. | Component/E2E | R-049 | 1 | QA | |
| Verify each product card displays current stock quantity. | Component/E2E | R-049 | 1 | QA | |
| Verify product data on page matches database. | E2E/API | R-049 | 1 | QA | |
| **Story 1.6: Customer-Facing Product Detail Page** | | | | | |
| Verify clicking a product card navigates to its detail page. | E2E | - | 1 | QA | |
| Verify product detail page displays name. | Component/E2E | R-052 | 1 | QA | |
| Verify product detail page displays price. | Component/E2E | R-052 | 1 | QA | |
| Verify product detail page displays real-time stock quantity. | Component/E2E | R-052 | 1 | QA | |
| **Story 2.1: Add Products to Shopping Cart** | | | | | |
| Verify "Add to Cart" button is present on product card. | Component/E2E | R-057 | 1 | QA | |
| Verify "Add to Cart" button is present on product detail page. | Component/E2E | R-057 | 1 | QA | |
| Verify clicking "Add to Cart" adds product to cart. | E2E/API | R-057 | 1 | QA | |
| Verify cart content persists across page navigations. | E2E | - | 1 | QA | |
| Verify cart icon updates with item count after adding product. | E2E | - | 1 | QA | |
| Verify "Add to Cart" is disabled for out-of-stock products. | E2E/API | R-059 | 1 | QA | |
| Verify appropriate message displayed for out-of-stock products. | E2E | R-059 | 1 | QA | |
| **Story 2.2: Manage Shopping Cart Contents** | | | | | |
| Verify shopping cart page displays all added items. | E2E | R-060 | 1 | QA | |
| Verify each item displays name, quantity, price. | E2E | R-060 | 1 | QA | |
| Verify customer can increase item quantity. | E2E/API | R-060 | 1 | QA | |
| Verify customer can decrease item quantity. | E2E/API | R-060 | 1 | QA | |
| Verify customer can remove an item from cart. | E2E/API | - | 1 | QA | |
| Verify cart total updates after quantity change. | E2E | R-060 | 1 | QA | |
| Verify cart total updates after item removal. | E2E | R-060 | 1 | QA | |
| **Story 2.3: Customer Checkout Process** | | | | | |
| Verify "Proceed to Checkout" button is present in cart. | E2E | - | 1 | QA | |
| Verify checkout page loads. | E2E | - | 1 | QA | |
| Verify email input field is present and required. | E2E | R-062 | 1 | QA | |
| Verify email input validates for correct format. | E2E/Unit | R-062 | 1 | QA | |
| Verify error message for invalid email format. | E2E | R-062 | 1 | QA | |
| Verify clear statement about payment at pickup on checkout page. | E2E | R-063 | 1 | QA | |
| Verify clear statement about 18+ age limitation on checkout page. | E2E | R-063 | 1 | QA | |
| **Story 2.4: Order Confirmation and Store Notification** | | | | | |
| Verify order confirmation page loads after successful order. | E2E | - | 1 | QA | |
| Verify unique reference number is displayed. | E2E | - | 1 | QA | |
| Verify store receives order details email. | API/Manual | R-064 | 1 | QA | |
| Verify email content includes correct order details. | API/Manual | R-064 | 1 | QA | |
| Verify new order appears in admin dashboard. | E2E/API | R-065 | 1 | QA | |
| **Story 2.5: Admin View New Orders** | | | | | |
| Verify admin dashboard displays "New Orders" section. | E2E | - | 1 | QA | |
| Verify new orders are listed in the section. | E2E/API | - | 1 | QA | |
| Verify order list displays reference number. | E2E | - | 1 | QA | |
| Verify order list displays customer email. | E2E | - | 1 | QA | |
| Verify order list displays order date. | E2E | - | 1 | QA | |
| Verify order list displays order status. | E2E | - | 1 | QA | |
| Verify admin can click an order to view details. | E2E | - | 1 | QA | |
| Verify order detail page displays ordered items and quantities. | E2E/API | - | 1 | QA | |
| **Story 2.6: Admin Mark Order as Processed** | | | | | |
| Verify "Mark as Processed" button is present on order detail page. | E2E | - | 1 | QA | |
| Verify clicking "Mark as Processed" changes status to "Processed". | E2E/API | R-070 | 1 | QA | |
| Verify customer receives "Ready for Pickup" email. | API/Manual | R-069 | 1 | QA | |
| Verify email content is correct. | API/Manual | R-069 | 1 | QA | |
| **Story 3.3: Admin Update Product Stock Levels** | | | | | |
| Verify admin can update stock from product list. | E2E/API | R-075, R-076 | 1 | QA | |
| Verify admin can update stock from product edit page. | E2E/API | R-075, R-076 | 1 | QA | |
| Verify updated stock is immediately reflected in customer catalog. | E2E/API | R-075 | 1 | QA | |
| Verify system prevents setting negative stock. | E2E/API/Unit | R-076 | 1 | QA | |
| Verify error message for negative stock input. | E2E | R-076 | 1 | QA | |
| **Story 3.4: Admin Delete Order** | | | | | |
| Verify confirmation prompt appears before deleting order. | E2E | R-077 | 1 | QA | |
| Verify order is removed from admin dashboard after deletion. | E2E/API | R-077 | 1 | QA | |
**Total P0**: 60 tests, 120 hours

### P1 (High) - Run on PR to main

**Criteria**: Important features + Medium risk (3-4) + Common workflows

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.1: Basic Project Infrastructure Setup** | | | | | |
| Verify Git repository initialization. | Unit/Manual | - | 1 | QA | |
| Verify Git remote configuration. | Unit/Manual | - | 1 | QA | |
| Verify `npm install` completes without errors. | Unit/Manual | R-040 | 1 | DEV | |
| Verify essential dependencies are present in `node_modules`. | Unit/Manual | R-040 | 1 | DEV | |
| **Story 1.2: Product Data Model and Database Initialization** | | | | | |
| Verify database is seeded with initial data (if applicable). | Unit/API | - | 1 | DEV | |
| **Story 1.3: Admin Interface for Basic Product Management** | | | | | |
| Verify admin can navigate to add product page. | E2E | R-045 | 1 | QA | |
| Verify admin can add a new product with valid data. | E2E/API | R-046 | 1 | QA | |
| Verify new product appears in product list. | E2E | - | 1 | QA | |
| Verify error handling for invalid product data (e.g., negative stock). | E2E/API | R-046 | 1 | QA | |
| Verify admin can navigate to edit product page. | E2E | R-045 | 1 | QA | |
| Verify admin can edit product name. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product description. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product price. | E2E/API | R-046 | 1 | QA | |
| Verify admin can edit product stock. | E2E/API | R-046 | 1 | QA | |
| Verify updated product details are saved and displayed. | E2E | - | 1 | QA | |
| Verify admin can view product list. | E2E | - | 1 | QA | |
| Verify product list displays name, description, price, stock. | E2E | - | 1 | QA | |
| **Story 1.4: Landing Page Navigation to Products Page** | | | | | |
| Verify "View Products" button/link is visible and clickable on mobile. | E2E | R-048 | 1 | QA | |
| Verify "View Products" button/link is visible and clickable on tablet. | E2E | R-048 | 1 | QA | |
| Verify "View Products" button/link is visible and clickable on desktop. | E2E | R-048 | 1 | QA | |
| **Story 1.5: Customer-Facing Product Catalog Display** | | | | | |
| Verify product list displays only "Cigars and Accessories". | E2E/API | - | 1 | QA | |
| Verify each product card displays brief description. | Component/E2E | - | 1 | QA | |
| Verify product catalog layout is responsive on mobile. | E2E | R-051 | 1 | QA | |
| Verify product catalog layout is responsive on tablet. | E2E | R-051 | 1 | QA | |
| Verify product catalog layout is responsive on desktop. | E2E | R-051 | 1 | QA | |
| **Story 1.6: Customer-Facing Product Detail Page** | | | | | |
| Verify product detail page displays full description. | Component/E2E | - | 1 | QA | |
| Verify product detail page displays land of origin. | Component/E2E | - | 1 | QA | |
| Verify product detail page displays vitola. | Component/E2E | - | 1 | QA | |
| Verify taste/flavor descriptions are present and simplified. | Component/E2E | R-053 | 1 | QA | |
| Verify product detail page layout is responsive on mobile. | E2E | R-054 | 1 | QA | |
| Verify product detail page layout is responsive on tablet. | E2E | R-054 | 1 | QA | |
| Verify product detail page layout is responsive on desktop. | E2E | R-054 | 1 | QA | |
| **Story 1.7: Landing Page with Store Location Map** | | | | | |
| Verify Google Maps iframe is present on landing page. | E2E | R-055 | 1 | QA | |
| Verify map displays correct store location. | E2E | R-056 | 1 | QA | |
| Verify store location is marked with a pin. | E2E | - | 1 | QA | |
| **Story 2.2: Manage Shopping Cart Contents** | | | | | |
| Verify cart updates if product price changes in backend. | E2E/API | R-061 | 1 | QA | |
| Verify cart updates if product becomes out-of-stock in backend. | E2E/API | R-061 | 1 | QA | |
| **Story 2.3: Customer Checkout Process** | | | | | |
| Verify phone number input field is present and optional. | E2E | - | 1 | QA | |
| **Story 3.1: Admin Edit Full Product Details** | | | | | |
| Verify admin can select a product for editing. | E2E | - | 1 | QA | |
| Verify edit form loads with current product data. | E2E/API | - | 1 | QA | |
| Verify admin can modify product name. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product description. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product price. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product stock quantity. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product land of origin. | E2E/API | R-071 | 1 | QA | |
| Verify admin can modify product vitola. | E2E/API | R-071 | 1 | QA | |
| Verify saved changes are reflected in admin product list. | E2E | R-072 | 1 | QA | |
| Verify saved changes are reflected in customer-facing product detail page. | E2E | R-072 | 1 | QA | |
| **Story 3.2: Admin Archive Product** | | | | | |
| Verify "Archive" option is available for products. | E2E | - | 1 | QA | |
| Verify archived product is no longer visible in customer catalog. | E2E/API | R-073, R-074 | 1 | QA | |
| Verify archived product is visible in admin (e.g., via filter). | E2E/API | R-073 | 1 | QA | |
| Verify admin can unarchive a product. | E2E/API | - | 1 | QA | |
| Verify unarchived product is visible in customer catalog. | E2E/API | - | 1 | QA | |
| **Story 3.4: Admin Delete Order** | | | | | |
| Verify "Delete" option is available for orders. | E2E | - | 1 | QA | |
**Total P1**: 55 tests, 55 hours

### P2 (Medium) - Run nightly/weekly

**Criteria**: Secondary features + Low risk (1-2) + Edge cases

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| **Story 1.7: Landing Page with Store Location Map** | | | | | |
| Verify map can be zoomed. | E2E | - | 1 | QA | |
| Verify map can be panned. | E2E | - | 1 | QA | |
**Total P2**: 2 tests, 1 hours

### P3 (Low) - Run on-demand

**Criteria**: Nice-to-have + Exploratory + Performance benchmarks

| Requirement | Test Level | Test Count | Owner | Notes |
|---|---|---|---|---|---|
| (No P3 scenarios identified for this epic) | | | | | |
**Total P3**: 0 tests, 0 hours

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] **Story 1.1:** Verify deployed application is accessible via URL.
- [ ] **Story 1.1:** Verify "Hello World" page content.
- [ ] **Story 1.3:** Verify admin login page loads.
- [ ] **Story 1.3:** Verify successful admin login with valid credentials.
- [ ] **Story 1.4:** Verify "View Products" button/link is present on landing page.
- [ ] **Story 1.4:** Verify clicking "View Products" navigates to `/products` page.
- [ ] **Story 1.5:** Verify `/products` page loads successfully.
- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product card.
- [ ] **Story 2.1:** Verify clicking "Add to Cart" adds product to cart.
- [ ] **Story 2.3:** Verify checkout page loads.
- [ ] **Story 2.3:** Verify email input field is present and required.

**Total**: 11 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] **Story 1.1:** Verify CI/CD pipeline triggers on push.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully builds the application.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully deploys to staging.
- [ ] **Story 1.2:** Verify product table exists in database.
- [ ] **Story 1.2:** Verify all required product fields exist in schema.
- [ ] **Story 1.2:** Verify data types and constraints for product fields.
- [ ] **Story 1.2:** Verify application can connect to the database.
- [ ] **Story 1.2:** Verify product can be created via API/DB.
- [ ] **Story 1.2:** Verify product can be read via API/DB.
- [ ] **Story 1.2:** Verify product can be updated via API/DB.
- [ ] **Story 1.2:** Verify product can be deleted via API/DB.
- [ ] **Story 1.3:** Verify unsuccessful admin login with invalid credentials.
- [ ] **Story 1.3:** Verify admin session security (e.g., logout, session timeout).
- [ ] **Story 1.5:** Verify each product card displays name.
- [ ] **Story 1.5:** Verify each product card displays price.
- [ ] **Story 1.5:** Verify each product card displays current stock quantity.
- [ ] **Story 1.5:** Verify product data on page matches database.
- [ ] **Story 1.6:** Verify clicking a product card navigates to its detail page.
- [ ] **Story 1.6:** Verify product detail page displays name.
- [ ] **Story 1.6:** Verify product detail page displays price.
- [ ] **Story 1.6:** Verify product detail page displays real-time stock quantity.
- [ ] **Story 2.1:** Verify cart content persists across page navigations.
- [ ] **Story 2.1:** Verify cart icon updates with item count after adding product.
- [ ] **Story 2.1:** Verify "Add to Cart" is disabled for out-of-stock products.
- [ ] **Story 2.1:** Verify appropriate message displayed for out-of-stock products.
- [ ] **Story 2.2:** Verify shopping cart page displays all added items.
- [ ] **Story 2.2:** Verify each item displays name, quantity, price.
- [ ] **Story 2.2:** Verify customer can increase item quantity.
- [ ] **Story 2.2:** Verify customer can decrease item quantity.
- [ ] **Story 2.2:** Verify customer can remove an item from cart.
- [ ] **Story 2.2:** Verify cart total updates after quantity change.
- [ ] **Story 2.2:** Verify cart total updates after item removal.
- [ ] **Story 2.3:** Verify email input validates for correct format.
- [ ] **Story 2.3:** Verify error message for invalid email format.
- [ ] **Story 2.3:** Verify clear statement about payment at pickup on checkout page.
- [ ] **Story 2.3:** Verify clear statement about 18+ age limitation on checkout page.
- [ ] **Story 2.4:** Verify order confirmation page loads after successful order.
- [ ] **Story 2.4:** Verify unique reference number is displayed.
- [ ] **Story 2.4:** Verify store receives order details email.
- [ ] **Story 2.4:** Verify email content includes correct order details.
- [ ] **Story 2.4:** Verify new order appears in admin dashboard.
- [ ] **Story 2.5:** Verify admin dashboard displays "New Orders" section.
- [ ] **Story 2.5:** Verify new orders are listed in the section.
- [ ] **Story 2.5:** Verify order list displays reference number.
- [ ] **Story 2.5:** Verify order list displays customer email.
- [ ] **Story 2.5:** Verify order list displays order date.
- [ ] **Story 2.5:** Verify order list displays order status.
- [ ] **Story 2.5:** Verify admin can click an order to view details.
- [ ] **Story 2.5:** Verify order detail page displays ordered items and quantities.
- [ ] **Story 2.6:** Verify "Mark as Processed" button is present on order detail page.
- [ ] **Story 2.6:** Verify clicking "Mark as Processed" changes status to "Processed".
- [ ] **Story 2.6:** Verify customer receives "Ready for Pickup" email.
- [ ] **Story 2.6:** Verify email content is correct.
- [ ] **Story 3.3:** Verify admin can update stock from product list.
- [ ] **Story 3.3:** Verify admin can update stock from product edit page.
- [ ] **Story 3.3:** Verify updated stock is immediately reflected in customer catalog.
- [ ] **Story 3.3:** Verify system prevents setting negative stock.
- [ ] **Story 3.3:** Verify error message for negative stock input.
- [ ] **Story 3.4:** Verify confirmation prompt appears before deleting order.
- [ ] **Story 3.4:** Verify order is removed from admin dashboard after deletion.

**Total**: 60 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] **Story 1.1:** Verify Git repository initialization.
- [ ] **Story 1.1:** Verify Git remote configuration.
- [ ] **Story 1.1:** Verify `npm install` completes without errors.
- [ ] **Story 1.1:** Verify essential dependencies are present in `node_modules`.
- [ ] **Story 1.2:** Verify database is seeded with initial data (if applicable).
- [ ] **Story 1.3:** Verify admin can navigate to add product page.
- [ ] **Story 1.3:** Verify admin can add a new product with valid data.
- [ ] **Story 1.3:** Verify new product appears in product list.
- [ ] **Story 1.3:** Verify error handling for invalid product data (e.g., negative stock).
- [ ] **Story 1.3:** Verify admin can navigate to edit product page.
- [ ] **Story 1.3:** Verify admin can edit product name.
- [ ] **Story 1.3:** Verify admin can edit product description.
- [ ] **Story 1.3:** Verify admin can edit product price.
- [ ] **Story 1.3:** Verify admin can edit product stock.
- [ ] **Story 1.3:** Verify updated product details are saved and displayed.
- [ ] **Story 1.3:** Verify admin can view product list.
- [ ] **Story 1.3:** Verify product list displays name, description, price, stock.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on mobile.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on tablet.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on desktop.
- [ ] **Story 1.5:** Verify product list displays only "Cigars and Accessories".
- [ ] **Story 1.5:** Verify each product card displays brief description.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on mobile.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on tablet.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on desktop.
- [ ] **Story 1.6:** Verify product detail page displays full description.
- [ ] **Story 1.6:** Verify product detail page displays land of origin.
- [ ] **Story 1.6:** Verify product detail page displays vitola.
- [ ] **Story 1.6:** Verify taste/flavor descriptions are present and simplified.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on mobile.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on tablet.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on desktop.
- [ ] **Story 1.7:** Verify Google Maps iframe is present on landing page.
- [ ] **Story 1.7:** Verify map displays correct store location.
- [ ] **Story 1.7:** Verify store location is marked with a pin.
- [ ] **Story 2.2:** Verify cart updates if product price changes in backend.
- [ ] **Story 2.2:** Verify cart updates if product becomes out-of-stock in backend.
- [ ] **Story 2.3:** Verify phone number input field is present and optional.
- [ ] **Story 3.1:** Verify admin can select a product for editing.
- [ ] **Story 3.1:** Verify edit form loads with current product data.
- [ ] **Story 3.1:** Verify admin can modify product name.
- [ ] **Story 3.1:** Verify admin can modify product description.
- [ ] **Story 3.1:** Verify admin can modify product price.
- [ ] **Story 3.1:** Verify admin can modify product stock quantity.
- [ ] **Story 3.1:** Verify admin can modify product land of origin.
- [ ] **Story 3.1:** Verify admin can modify product vitola.
- [ ] **Story 3.1:** Verify saved changes are reflected in admin product list.
- [ ] **Story 3.1:** Verify saved changes are reflected in customer-facing product detail page.
- [ ] **Story 3.2:** Verify "Archive" option is available for products.
- [ ] **Story 3.2:** Verify archived product is no longer visible in customer catalog.
- [ ] **Story 3.2:** Verify archived product is visible in admin (e.g., via filter).
- [ ] **Story 3.2:** Verify admin can unarchive a product.
- [ ] **Story 3.2:** Verify unarchived product is visible in customer catalog.
- [ ] **Story 3.4:** Verify "Delete" option is available for orders.

**Total**: 55 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- [ ] **Story 1.7:** Verify map can be zoomed.
- [ ] **Story 1.7:** Verify map can be panned.

**Total**: 2 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
|---|---|---|---|---|
| P0 | 60 | 2.0 | 120 | Complex setup, security |
| P1 | 55 | 1.0 | 55 | Standard coverage |
| P2 | 2 | 0.5 | 1 | Simple scenarios |
| P3 | 0 | 0.25 | 0 | Exploratory |
| **Total** | **117** | **-** | **176** | **~22 days** |

### Prerequisites

**Test Data:**

- Admin user (for admin interface testing)
- Customer user (for customer-facing flows)
- Products with various stock levels (in-stock, out-of-stock)
- Products with different details (name, description, price, origin, vitola)
- Archived products
- Pending, Processed, Completed orders
- Dynamically generated using factories (`@faker-js/faker`)
- Seeded via API or direct database access

**Tooling:**

- Playwright (Test Framework, Test Runner, Assertion Library)
- `@faker-js/faker` (Data Generation)
- Playwright `request` fixture or dedicated API client (API Testing)
- Database client/ORM (Database Access)
- GitHub Actions (CI/CD)
- ESLint, Prettier (Code Quality)

**Environment:**

- Node.js (LTS), npm, Git (Local Development)
- Dedicated test database instance
- Staging environment for E2E testing
- Environment variables for secrets (`.env`, GitHub Secrets)

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: ≥95% (waivers required for failures)
- **P2/P3 pass rate**: ≥90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths**: ≥80%
- **Security scenarios**: 100%
- **Business logic**: ≥70%
- **Edge cases**: ≥50%

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (≥6) items unmitigated
- [ ] Security tests (SEC category) pass 100%
- [ ] Performance targets met (PERF category)

---

## Mitigation Plans

### R-001: Potential for stock inaccuracies due to manual processes. (Score: 9)

**Mitigation Strategy:** Implement robust inventory management system with automated updates and reconciliation.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Thorough testing of inventory system, regular audits.

### R-002: Inefficient operations, owner's time diverted. (Score: 6)

**Mitigation Strategy:** Streamline admin workflows for order and product management.
**Owner:** UX/DEV
**Timeline:** Epic 2, 3
**Status:** Planned / In Progress / Complete
**Verification:** Owner feedback, time tracking.

### R-003: Barrier to purchase, impacting customer satisfaction and sales. (Score: 9)

**Mitigation Strategy:** Implement user-friendly product catalog, shopping cart, and checkout.
**Owner:** UX/DEV
**Timeline:** Epic 1, 2
**Status:** Planned / In Progress / Complete
**Verification:** User testing, sales metrics.

### R-007: Failure to maintain stock accuracy (99% match). (Score: 6)

**Mitigation Strategy:** Implement automated stock level updates and regular reconciliation processes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Monthly stock audits.

### R-008: Inaccurate stock levels displayed to customers (FR001). (Score: 6)

**Mitigation Strategy:** Ensure real-time stock synchronization between database and UI.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock display.

### R-012: Shopping cart functionality issues, preventing purchases (FR004). (Score: 6)

**Mitigation Strategy:** Thorough testing of add-to-cart, quantity updates, and cart persistence.
**Owner:** QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart.

### R-015: Validation issues on checkout page, preventing order placement (FR006). (Score: 6)

**Mitigation Strategy:** Implement comprehensive client-side and server-side validation for all checkout fields.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for checkout validation.

### R-017: Email delivery failures, store not receiving orders (FR008). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-018: Orders not recorded or lost in the system (FR009). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-022: Accidental or erroneous deletion of orders (FR012). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### R-026: Incorrect stock level updates, leading to discrepancies (FR016). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-030: Weak authentication, unauthorized access to admin (FR020). (Score: 6)

**Mitigation Strategy:** Implement strong password policies, MFA (if feasible), and session management.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-038: CI/CD pipeline misconfiguration, leading to deployment failures (Story 1.1). (Score: 6)

**Mitigation Strategy:** Thorough testing of CI/CD pipeline, use of infrastructure as code, and monitoring.
**Owner:** OPS/DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** CI/CD pipeline runs, deployment success rate.

### R-041: Database schema design flaws, leading to data integrity issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Conduct thorough schema review, use migrations, and implement database constraints.
**Owner:** DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Database integrity checks, unit tests for data models.

### R-042: Database connectivity or access issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Implement connection pooling, retry logic, and robust error handling for database access.
**Owner:** DEV/OPS
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Integration tests for database connectivity.

### R-044: Vulnerabilities in admin login (e.g., weak password policy, injection) (Story 1.3). (Score: 6)

**Mitigation Strategy:** Implement secure authentication mechanisms, input sanitization, and regular security audits.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-049: Inaccurate product information displayed to customers (Story 1.5). (Score: 6)

**Mitigation Strategy:** Implement robust data synchronization and caching strategies for product data.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for product display accuracy.

### R-057: Shopping cart not updating correctly (Story 2.1). (Score: 6)

**Mitigation Strategy:** Implement real-time updates and thorough testing of shopping cart logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart updates.

### R-060: Shopping cart calculation errors (Story 2.2). (Score: 6)

**Mitigation Strategy:** Implement comprehensive unit and integration tests for all cart calculation logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Unit and integration tests for cart calculations.

### R-062: Inadequate input validation, leading to injection or data issues (Story 2.3). (Score: 6)

**Mitigation Strategy:** Implement strict input validation and sanitization on both client and server sides.
**Owner:** DEV/SEC
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing, unit tests for validation.

### R-064: Email delivery failures to store (Story 2.4). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-065: Order not recorded in admin dashboard (Story 2.4). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-075: Incorrect stock level updates, leading to discrepancies (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-076: Negative stock levels allowed, leading to order fulfillment issues (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement server-side validation to prevent negative stock levels.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for negative stock prevention.

### R-077: Accidental deletion of orders without confirmation (Story 3.4). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-004 | BUS | Poor user experience for newcomers, deterring engagement. | 2 | 2 | 4 | Improve taste/flavor descriptions and curated selection. | UX/DEV |
| R-005 | OPS | Failure to achieve operational efficiency target (50% reduction in order processing time). | 2 | 2 | 4 | Monitor and optimize admin workflows. | OPS/DEV |
| R-006 | BUS | Failure to meet sales/adoption target (10 click-and-collect orders/week). | 2 | 2 | 4 | Monitor sales, optimize UX. | BUS/UX |
| R-009 | PERF | Slow updates to stock quantity impacting real-time accuracy (FR001). | 2 | 2 | 4 | Optimize database queries and update mechanisms. | DEV |
| R-010 | DATA | Missing or incorrect product details (FR002). | 2 | 2 | 4 | Implement data validation and thorough testing of product data entry. | QA |
| R-011 | BUS | Descriptions are not helpful for newcomers, leading to poor UX (FR003). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-013 | BUS | Shopping cart not updating correctly, leading to incorrect orders (FR005). | 2 | 2 | 4 | Implement real-time updates and thorough testing of shopping cart logic. | DEV/QA |
| R-014 | SEC | Insecure handling of customer contact details (FR006). | 1 | 3 | 3 | Follow security best practices for data handling. | SEC/DEV |
| R-016 | BUS | Order confirmation issues, leading to customer confusion (FR007). | 2 | 2 | 4 | Thorough testing of order confirmation flow. | QA |
| R-019 | BUS | Admin interface issues, owner unable to view orders (FR010). | 2 | 2 | 4 | Thorough testing of admin UI. | QA |
| R-020 | BUS | Order status update issues, leading to operational inefficiencies (FR011). | 2 | 2 | 4 | Thorough testing of order status update flow. | QA |
| R-021 | SEC | Unauthorized deletion of orders (FR012). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |
| R-023 | BUS | Product creation issues in admin, impacting catalog management (FR013). | 2 | 2 | 4 | Thorough testing of product creation flow. | QA |
| R-024 | BUS | Product editing issues in admin, impacting catalog accuracy (FR014). | 2 | 2 | 4 | Thorough testing of product editing flow. | QA |
| R-025 | BUS | Product archiving issues, leading to incorrect product visibility (FR015). | 2 | 2 | 4 | Thorough testing of product archiving flow. | QA |
| R-028 | BUS | Miscommunication about payment method, customer confusion (FR018). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-029 | OPS | Customer email notification failures (FR019). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-031 | BUS | Poor user experience on different devices (NFR001). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-033 | OPS | System downtime, impacting sales and customer satisfaction (NFR003). | 1 | 3 | 3 | Implement robust hosting, monitoring, and alerting. | OPS |
| R-034 | SEC | Lack of HTTPS, compromising data security (NFR004). | 1 | 3 | 3 | Ensure HTTPS is enforced. | OPS/DEV |
| R-035 | DATA | System fails to notify customer of out-of-stock, leading to frustration (User Journey 1 Edge Case). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-036 | DATA | Stock discrepancy not resolved, leading to order fulfillment issues (User Journey 2 Edge Case). | 2 | 2 | 4 | Implement clear admin workflow for resolving discrepancies. | UX/DEV |
| R-037 | BUS | Unclear implementation of "Curated Selection", leading to poor UX for newcomers (User Journey 3 Note). | 2 | 2 | 4 | Clarify design and conduct user testing. | UX |
| R-039 | OPS | Deployment failures to staging environment (Story 1.1). | 2 | 2 | 4 | Implement robust deployment process and monitoring. | OPS/DEV |
| R-040 | TECH | Dependency conflicts or misconfiguration (Story 1.1). | 2 | 2 | 4 | Use dependency management tools, regular updates. | DEV |
| R-043 | SEC | Insecure direct database access for testing (Story 1.2). | 1 | 3 | 3 | Use secure test data management and access controls. | SEC/DEV |
| R-045 | BUS | Admin interface usability issues, impacting owner's efficiency (Story 1.3). | 2 | 2 | 4 | Conduct usability testing with owner. | UX |
| R-046 | DATA | Data validation issues when adding/editing products (Story 1.3). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-047 | BUS | Navigation issues, preventing customers from reaching product catalog (Story 1.4). | 2 | 2 | 4 | Thorough testing of navigation links. | QA |
| R-048 | BUS | Responsiveness issues on different devices (Story 1.4). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-050 | PERF | Slow loading of product catalog (Story 1.5). | 2 | 2 | 4 | Optimize database queries, image loading, and caching. | DEV |
| R-051 | BUS | Responsiveness issues on different devices (Story 1.5). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-052 | DATA | Inaccurate or incomplete product details (Story 1.6). | 2 | 2 | 4 | Implement data validation and thorough testing of product data display. | QA |
| R-053 | BUS | Poorly written taste/flavor descriptions, confusing newcomers (Story 1.6). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-054 | BUS | Responsiveness issues on different devices (Story 1.6). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-056 | BUS | Map not displaying correctly, customer unable to find store (Story 1.7). | 2 | 2 | 4 | Thorough testing of map display and functionality. | QA |
| R-058 | DATA | Incorrect quantity added to cart (Story 2.1). | 2 | 2 | 4 | Implement input validation and thorough testing of add-to-cart logic. | DEV/QA |
| R-059 | BUS | Failure to handle out-of-stock scenarios, leading to customer frustration (Story 2.1). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-061 | DATA | Shopping cart not reflecting real-time stock changes (Story 2.2). | 2 | 2 | 4 | Implement real-time stock synchronization. | DEV/QA |
| R-063 | BUS | Unclear communication about payment or age limitation, leading to customer confusion (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-066 | BUS | Confirmation page not displaying correctly (Story 2.4). | 2 | 2 | 4 | Thorough testing of confirmation page. | QA |
| R-067 | BUS | Admin dashboard not displaying new orders correctly (Story 2.5). | 2 | 2 | 4 | Thorough testing of admin dashboard. | QA |
| R-068 | PERF | Slow loading of order list in admin (Story 2.5). | 2 | 2 | 4 | Optimize database queries and UI rendering. | DEV |
| R-069 | OPS | Email notification failures to customer (Story 2.6). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-070 | DATA | Order status not updating correctly (Story 2.6). | 2 | 2 | 4 | Thorough testing of order status update. | QA |
| R-071 | DATA | Data validation issues when editing product details (Story 3.1). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-072 | BUS | Changes not reflected in customer-facing catalog (Story 3.1). | 2 | 2 | 4 | Implement robust data synchronization and caching strategies. | DEV/QA |
| R-073 | DATA | Product not correctly archived/unarchived, leading to incorrect visibility (Story 3.2). | 2 | 2 | 4 | Thorough testing of archive/unarchive functionality. | QA |
| R-074 | BUS | Archived products still visible to customers (Story 3.2). | 2 | 2 | 4 | Thorough testing of product visibility after archiving. | QA |
| R-078 | SEC | Unauthorized deletion of orders (Story 3.4). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
|---|---|---|---|---|---|---|
| R-027 | TECH | Google Maps integration issues, map not displaying correctly (FR017). | 1 | 1 | 1 | Monitor |
| R-032 | BUS | Incompatibility with certain browsers, limiting user access (NFR002). | 1 | 2 | 2 | Monitor |
| R-055 | TECH | Google Maps API integration issues (Story 1.7). | 1 | 1 | 1 | Monitor |

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] **Story 1.1:** Verify deployed application is accessible via URL.
- [ ] **Story 1.1:** Verify "Hello World" page content.
- [ ] **Story 1.3:** Verify admin login page loads.
- [ ] **Story 1.3:** Verify successful admin login with valid credentials.
- [ ] **Story 1.4:** Verify "View Products" button/link is present on landing page.
- [ ] **Story 1.4:** Verify clicking "View Products" navigates to `/products` page.
- [ ] **Story 1.5:** Verify `/products` page loads successfully.
- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product card.
- [ ] **Story 2.1:** Verify clicking "Add to Cart" adds product to cart.
- [ ] **Story 2.3:** Verify checkout page loads.
- [ ] **Story 2.3:** Verify email input field is present and required.

**Total**: 11 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] **Story 1.1:** Verify CI/CD pipeline triggers on push.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully builds the application.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully deploys to staging.
- [ ] **Story 1.2:** Verify product table exists in database.
- [ ] **Story 1.2:** Verify all required product fields exist in schema.
- [ ] **Story 1.2:** Verify data types and constraints for product fields.
- [ ] **Story 1.2:** Verify application can connect to the database.
- [ ] **Story 1.2:** Verify product can be created via API/DB.
- [ ] **Story 1.2:** Verify product can be read via API/DB.
- [ ] **Story 1.2:** Verify product can be updated via API/DB.
- [ ] **Story 1.2:** Verify product can be deleted via API/DB.
- [ ] **Story 1.3:** Verify unsuccessful admin login with invalid credentials.
- [ ] **Story 1.3:** Verify admin session security (e.g., logout, session timeout).
- [ ] **Story 1.5:** Verify each product card displays name.
- [ ] **Story 1.5:** Verify each product card displays price.
- [ ] **Story 1.5:** Verify each product card displays current stock quantity.
- [ ] **Story 1.5:** Verify product data on page matches database.
- [ ] **Story 1.6:** Verify clicking a product card navigates to its detail page.
- [ ] **Story 1.6:** Verify product detail page displays name.
- [ ] **Story 1.6:** Verify product detail page displays price.
- [ ] **Story 1.6:** Verify product detail page displays real-time stock quantity.
- [ ] **Story 2.1:** Verify cart content persists across page navigations.
- [ ] **Story 2.1:** Verify cart icon updates with item count after adding product.
- [ ] **Story 2.1:** Verify "Add to Cart" is disabled for out-of-stock products.
- [ ] **Story 2.1:** Verify appropriate message displayed for out-of-stock products.
- [ ] **Story 2.2:** Verify shopping cart page displays all added items.
- [ ] **Story 2.2:** Verify each item displays name, quantity, price.
- [ ] **Story 2.2:** Verify customer can increase item quantity.
- [ ] **Story 2.2:** Verify customer can decrease item quantity.
- [ ] **Story 2.2:** Verify customer can remove an item from cart.
- [ ] **Story 2.2:** Verify cart total updates after quantity change.
- [ ] **Story 2.2:** Verify cart total updates after item removal.
- [ ] **Story 2.3:** Verify email input validates for correct format.
- [ ] **Story 2.3:** Verify error message for invalid email format.
- [ ] **Story 2.3:** Verify clear statement about payment at pickup on checkout page.
- [ ] **Story 2.3:** Verify clear statement about 18+ age limitation on checkout page.
- [ ] **Story 2.4:** Verify order confirmation page loads after successful order.
- [ ] **Story 2.4:** Verify unique reference number is displayed.
- [ ] **Story 2.4:** Verify store receives order details email.
- [ ] **Story 2.4:** Verify email content includes correct order details.
- [ ] **Story 2.4:** Verify new order appears in admin dashboard.
- [ ] **Story 2.5:** Verify admin dashboard displays "New Orders" section.
- [ ] **Story 2.5:** Verify new orders are listed in the section.
- [ ] **Story 2.5:** Verify order list displays reference number.
- [ ] **Story 2.5:** Verify order list displays customer email.
- [ ] **Story 2.5:** Verify order list displays order date.
- [ ] **Story 2.5:** Verify order list displays order status.
- [ ] **Story 2.5:** Verify admin can click an order to view details.
- [ ] **Story 2.5:** Verify order detail page displays ordered items and quantities.
- [ ] **Story 2.6:** Verify "Mark as Processed" button is present on order detail page.
- [ ] **Story 2.6:** Verify clicking "Mark as Processed" changes status to "Processed".
- [ ] **Story 2.6:** Verify customer receives "Ready for Pickup" email.
- [ ] **Story 2.6:** Verify email content is correct.
- [ ] **Story 3.3:** Verify admin can update stock from product list.
- [ ] **Story 3.3:** Verify admin can update stock from product edit page.
- [ ] **Story 3.3:** Verify updated stock is immediately reflected in customer catalog.
- [ ] **Story 3.3:** Verify system prevents setting negative stock.
- [ ] **Story 3.3:** Verify error message for negative stock input.
- [ ] **Story 3.4:** Verify confirmation prompt appears before deleting order.
- [ ] **Story 3.4:** Verify order is removed from admin dashboard after deletion.

**Total**: 60 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] **Story 1.1:** Verify Git repository initialization.
- [ ] **Story 1.1:** Verify Git remote configuration.
- [ ] **Story 1.1:** Verify `npm install` completes without errors.
- [ ] **Story 1.1:** Verify essential dependencies are present in `node_modules`.
- [ ] **Story 1.2:** Verify database is seeded with initial data (if applicable).
- [ ] **Story 1.3:** Verify admin can navigate to add product page.
- [ ] **Story 1.3:** Verify admin can add a new product with valid data.
- [ ] **Story 1.3:** Verify new product appears in product list.
- [ ] **Story 1.3:** Verify error handling for invalid product data (e.g., negative stock).
- [ ] **Story 1.3:** Verify admin can navigate to edit product page.
- [ ] **Story 1.3:** Verify admin can edit product name.
- [ ] **Story 1.3:** Verify admin can edit product description.
- [ ] **Story 1.3:** Verify admin can edit product price.
- [ ] **Story 1.3:** Verify admin can edit product stock.
- [ ] **Story 1.3:** Verify updated product details are saved and displayed.
- [ ] **Story 1.3:** Verify admin can view product list.
- [ ] **Story 1.3:** Verify product list displays name, description, price, stock.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on mobile.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on tablet.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on desktop.
- [ ] **Story 1.5:** Verify product list displays only "Cigars and Accessories".
- [ ] **Story 1.5:** Verify each product card displays brief description.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on mobile.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on tablet.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on desktop.
- [ ] **Story 1.6:** Verify product detail page displays full description.
- [ ] **Story 1.6:** Verify product detail page displays land of origin.
- [ ] **Story 1.6:** Verify product detail page displays vitola.
- [ ] **Story 1.6:** Verify taste/flavor descriptions are present and simplified.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on mobile.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on tablet.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on desktop.
- [ ] **Story 1.7:** Verify Google Maps iframe is present on landing page.
- [ ] **Story 1.7:** Verify map displays correct store location.
- [ ] **Story 1.7:** Verify store location is marked with a pin.
- [ ] **Story 2.2:** Verify cart updates if product price changes in backend.
- [ ] **Story 2.2:** Verify cart updates if product becomes out-of-stock in backend.
- [ ] **Story 2.3:** Verify phone number input field is present and optional.
- [ ] **Story 3.1:** Verify admin can select a product for editing.
- [ ] **Story 3.1:** Verify edit form loads with current product data.
- [ ] **Story 3.1:** Verify admin can modify product name.
- [ ] **Story 3.1:** Verify admin can modify product description.
- [ ] **Story 3.1:** Verify admin can modify product price.
- [ ] **Story 3.1:** Verify admin can modify product stock quantity.
- [ ] **Story 3.1:** Verify admin can modify product land of origin.
- [ ] **Story 3.1:** Verify admin can modify product vitola.
- [ ] **Story 3.1:** Verify saved changes are reflected in admin product list.
- [ ] **Story 3.1:** Verify saved changes are reflected in customer-facing product detail page.
- [ ] **Story 3.2:** Verify "Archive" option is available for products.
- [ ] **Story 3.2:** Verify archived product is no longer visible in customer catalog.
- [ ] **Story 3.2:** Verify archived product is visible in admin (e.g., via filter).
- [ ] **Story 3.2:** Verify admin can unarchive a product.
- [ ] **Story 3.2:** Verify unarchived product is visible in customer catalog.
- [ ] **Story 3.4:** Verify "Delete" option is available for orders.

**Total**: 55 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- [ ] **Story 1.7:** Verify map can be zoomed.
- [ ] **Story 1.7:** Verify map can be panned.

**Total**: 2 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
|---|---|---|---|---|
| P0 | 60 | 2.0 | 120 | Complex setup, security |
| P1 | 55 | 1.0 | 55 | Standard coverage |
| P2 | 2 | 0.5 | 1 | Simple scenarios |
| P3 | 0 | 0.25 | 0 | Exploratory |
| **Total** | **117** | **-** | **176** | **~22 days** |

### Prerequisites

**Test Data:**

- Admin user (for admin interface testing)
- Customer user (for customer-facing flows)
- Products with various stock levels (in-stock, out-of-stock)
- Products with different details (name, description, price, origin, vitola)
- Archived products
- Pending, Processed, Completed orders
- Dynamically generated using factories (`@faker-js/faker`)
- Seeded via API or direct database access

**Tooling:**

- Playwright (Test Framework, Test Runner, Assertion Library)
- `@faker-js/faker` (Data Generation)
- Playwright `request` fixture or dedicated API client (API Testing)
- Database client/ORM (Database Access)
- GitHub Actions (CI/CD)
- ESLint, Prettier (Code Quality)

**Environment:**

- Node.js (LTS), npm, Git (Local Development)
- Dedicated test database instance
- Staging environment for E2E testing
- Environment variables for secrets (`.env`, GitHub Secrets)

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: ≥95% (waivers required for failures)
- **P2/P3 pass rate**: ≥90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths**: ≥80%
- **Security scenarios**: 100%
- **Business logic**: ≥70%
- **Edge cases**: ≥50%

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (≥6) items unmitigated
- [ ] Security tests (SEC category) pass 100%
- [ ] Performance targets met (PERF category)

---

## Mitigation Plans

### R-001: Potential for stock inaccuracies due to manual processes. (Score: 9)

**Mitigation Strategy:** Implement robust inventory management system with automated updates and reconciliation.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Thorough testing of inventory system, regular audits.

### R-002: Inefficient operations, owner's time diverted. (Score: 6)

**Mitigation Strategy:** Streamline admin workflows for order and product management.
**Owner:** UX/DEV
**Timeline:** Epic 2, 3
**Status:** Planned / In Progress / Complete
**Verification:** Owner feedback, time tracking.

### R-003: Barrier to purchase, impacting customer satisfaction and sales. (Score: 9)

**Mitigation Strategy:** Implement user-friendly product catalog, shopping cart, and checkout.
**Owner:** UX/DEV
**Timeline:** Epic 1, 2
**Status:** Planned / In Progress / Complete
**Verification:** User testing, sales metrics.

### R-007: Failure to maintain stock accuracy (99% match). (Score: 6)

**Mitigation Strategy:** Implement automated stock level updates and regular reconciliation processes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** Monthly stock audits.

### R-008: Inaccurate stock levels displayed to customers (FR001). (Score: 6)

**Mitigation Strategy:** Ensure real-time stock synchronization between database and UI.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock display.

### R-012: Shopping cart functionality issues, preventing purchases (FR004). (Score: 6)

**Mitigation Strategy:** Thorough testing of add-to-cart, quantity updates, and cart persistence.
**Owner:** QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart.

### R-015: Validation issues on checkout page, preventing order placement (FR006). (Score: 6)

**Mitigation Strategy:** Implement comprehensive client-side and server-side validation for all checkout fields.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for checkout validation.

### R-017: Email delivery failures, store not receiving orders (FR008). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-018: Orders not recorded or lost in the system (FR009). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-022: Accidental or erroneous deletion of orders (FR012). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### R-026: Incorrect stock level updates, leading to discrepancies (FR016). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-030: Weak authentication, unauthorized access to admin (FR020). (Score: 6)

**Mitigation Strategy:** Implement strong password policies, MFA (if feasible), and session management.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-038: CI/CD pipeline misconfiguration, leading to deployment failures (Story 1.1). (Score: 6)

**Mitigation Strategy:** Thorough testing of CI/CD pipeline, use of infrastructure as code, and monitoring.
**Owner:** OPS/DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** CI/CD pipeline runs, deployment success rate.

### R-041: Database schema design flaws, leading to data integrity issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Conduct thorough schema review, use migrations, and implement database constraints.
**Owner:** DEV
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Database integrity checks, unit tests for data models.

### R-042: Database connectivity or access issues (Story 1.2). (Score: 6)

**Mitigation Strategy:** Implement connection pooling, retry logic, and robust error handling for database access.
**Owner:** DEV/OPS
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Integration tests for database connectivity.

### R-044: Vulnerabilities in admin login (e.g., weak password policy, injection) (Story 1.3). (Score: 6)

**Mitigation Strategy:** Implement secure authentication mechanisms, input sanitization, and regular security audits.
**Owner:** DEV/SEC
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing.

### R-049: Inaccurate product information displayed to customers (Story 1.5). (Score: 6)

**Mitigation Strategy:** Implement robust data synchronization and caching strategies for product data.
**Owner:** DEV/QA
**Timeline:** Epic 1
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for product display accuracy.

### R-057: Shopping cart not updating correctly (Story 2.1). (Score: 6)

**Mitigation Strategy:** Implement real-time updates and thorough testing of shopping cart logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for shopping cart updates.

### R-060: Shopping cart calculation errors (Story 2.2). (Score: 6)

**Mitigation Strategy:** Implement comprehensive unit and integration tests for all cart calculation logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Unit and integration tests for cart calculations.

### R-062: Inadequate input validation, leading to injection or data issues (Story 2.3). (Score: 6)

**Mitigation Strategy:** Implement strict input validation and sanitization on both client and server sides.
**Owner:** DEV/SEC
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Security audits, penetration testing, unit tests for validation.

### R-064: Email delivery failures to store (Story 2.4). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** Monitoring email delivery logs.

### R-065: Order not recorded in admin dashboard (Story 2.4). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order creation, audit logs.

### R-075: Incorrect stock level updates, leading to discrepancies (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement strict validation and atomic updates for stock level changes.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for stock updates.

### R-076: Negative stock levels allowed, leading to order fulfillment issues (Story 3.3). (Score: 6)

**Mitigation Strategy:** Implement server-side validation to prevent negative stock levels.
**Owner:** DEV/QA
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for negative stock prevention.

### R-077: Accidental deletion of orders without confirmation (Story 3.4). (Score: 6)

**Mitigation Strategy:** Implement confirmation dialogs and audit logs for order deletion in admin.
**Owner:** DEV/UX
**Timeline:** Epic 3
**Status:** Planned / In Progress / Complete
**Verification:** E2E tests for order deletion, audit logs.

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-004 | BUS | Poor user experience for newcomers, deterring engagement. | 2 | 2 | 4 | Improve taste/flavor descriptions and curated selection. | UX/DEV |
| R-005 | OPS | Failure to achieve operational efficiency target (50% reduction in order processing time). | 2 | 2 | 4 | Monitor and optimize admin workflows. | OPS/DEV |
| R-006 | BUS | Failure to meet sales/adoption target (10 click-and-collect orders/week). | 2 | 2 | 4 | Monitor sales, optimize UX. | BUS/UX |
| R-009 | PERF | Slow updates to stock quantity impacting real-time accuracy (FR001). | 2 | 2 | 4 | Optimize database queries and update mechanisms. | DEV |
| R-010 | DATA | Missing or incorrect product details (FR002). | 2 | 2 | 4 | Implement data validation and thorough testing of product data entry. | QA |
| R-011 | BUS | Descriptions are not helpful for newcomers, leading to poor UX (FR003). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-013 | BUS | Shopping cart not updating correctly, leading to incorrect orders (FR005). | 2 | 2 | 4 | Implement real-time updates and thorough testing of shopping cart logic. | DEV/QA |
| R-014 | SEC | Insecure handling of customer contact details (FR006). | 1 | 3 | 3 | Follow security best practices for data handling. | SEC/DEV |
| R-016 | BUS | Order confirmation issues, leading to customer confusion (FR007). | 2 | 2 | 4 | Thorough testing of order confirmation flow. | QA |
| R-019 | BUS | Admin interface issues, owner unable to view orders (FR010). | 2 | 2 | 4 | Thorough testing of admin UI. | QA |
| R-020 | BUS | Order status update issues, leading to operational inefficiencies (FR011). | 2 | 2 | 4 | Thorough testing of order status update flow. | QA |
| R-021 | SEC | Unauthorized deletion of orders (FR012). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |
| R-023 | BUS | Product creation issues in admin, impacting catalog management (FR013). | 2 | 2 | 4 | Thorough testing of product creation flow. | QA |
| R-024 | BUS | Product editing issues in admin, impacting catalog accuracy (FR014). | 2 | 2 | 4 | Thorough testing of product editing flow. | QA |
| R-025 | BUS | Product archiving issues, leading to incorrect product visibility (FR015). | 2 | 2 | 4 | Thorough testing of product archiving flow. | QA |
| R-028 | BUS | Miscommunication about payment method, customer confusion (FR018). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-029 | OPS | Customer email notification failures (FR019). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-031 | BUS | Poor user experience on different devices (NFR001). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-033 | OPS | System downtime, impacting sales and customer satisfaction (NFR003). | 1 | 3 | 3 | Implement robust hosting, monitoring, and alerting. | OPS |
| R-034 | SEC | Lack of HTTPS, compromising data security (NFR004). | 1 | 3 | 3 | Ensure HTTPS is enforced. | OPS/DEV |
| R-035 | DATA | System fails to notify customer of out-of-stock, leading to frustration (User Journey 1 Edge Case). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-036 | DATA | Stock discrepancy not resolved, leading to order fulfillment issues (User Journey 2 Edge Case). | 2 | 2 | 4 | Implement clear admin workflow for resolving discrepancies. | UX/DEV |
| R-037 | BUS | Unclear implementation of "Curated Selection", leading to poor UX for newcomers (User Journey 3 Note). | 2 | 2 | 4 | Clarify design and conduct user testing. | UX |
| R-039 | OPS | Deployment failures to staging environment (Story 1.1). | 2 | 2 | 4 | Implement robust deployment process and monitoring. | OPS/DEV |
| R-040 | TECH | Dependency conflicts or misconfiguration (Story 1.1). | 2 | 2 | 4 | Use dependency management tools, regular updates. | DEV |
| R-043 | SEC | Insecure direct database access for testing (Story 1.2). | 1 | 3 | 3 | Use secure test data management and access controls. | SEC/DEV |
| R-045 | BUS | Admin interface usability issues, impacting owner's efficiency (Story 1.3). | 2 | 2 | 4 | Conduct usability testing with owner. | UX |
| R-046 | DATA | Data validation issues when adding/editing products (Story 1.3). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-047 | BUS | Navigation issues, preventing customers from reaching product catalog (Story 1.4). | 2 | 2 | 4 | Thorough testing of navigation links. | QA |
| R-048 | BUS | Responsiveness issues on different devices (Story 1.4). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-050 | PERF | Slow loading of product catalog (Story 1.5). | 2 | 2 | 4 | Optimize database queries, image loading, and caching. | DEV |
| R-051 | BUS | Responsiveness issues on different devices (Story 1.5). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-052 | DATA | Inaccurate or incomplete product details (Story 1.6). | 2 | 2 | 4 | Implement data validation and thorough testing of product data display. | QA |
| R-053 | BUS | Poorly written taste/flavor descriptions, confusing newcomers (Story 1.6). | 2 | 2 | 4 | Conduct user testing on descriptions. | UX |
| R-054 | BUS | Responsiveness issues on different devices (Story 1.6). | 2 | 2 | 4 | Thorough responsive design testing. | QA/UX |
| R-056 | BUS | Map not displaying correctly, customer unable to find store (Story 1.7). | 2 | 2 | 4 | Thorough testing of map display and functionality. | QA |
| R-058 | DATA | Incorrect quantity added to cart (Story 2.1). | 2 | 2 | 4 | Implement input validation and thorough testing of add-to-cart logic. | DEV/QA |
| R-059 | BUS | Failure to handle out-of-stock scenarios, leading to customer frustration (Story 2.1). | 2 | 2 | 4 | Implement real-time stock checks and notifications. | DEV/QA |
| R-061 | DATA | Shopping cart not reflecting real-time stock changes (Story 2.2). | 2 | 2 | 4 | Implement real-time stock synchronization. | DEV/QA |
| R-063 | BUS | Unclear communication about payment or age limitation, leading to customer confusion (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-066 | BUS | Confirmation page not displaying correctly (Story 2.4). | 2 | 2 | 4 | Thorough testing of confirmation page. | QA |
| R-067 | BUS | Admin dashboard not displaying new orders correctly (Story 2.5). | 2 | 2 | 4 | Thorough testing of admin dashboard. | QA |
| R-068 | PERF | Slow loading of order list in admin (Story 2.5). | 2 | 2 | 4 | Optimize database queries and UI rendering. | DEV |
| R-069 | OPS | Email notification failures to customer (Story 2.6). | 2 | 2 | 4 | Use reliable email service, monitor delivery. | OPS/DEV |
| R-070 | DATA | Order status not updating correctly (Story 2.6). | 2 | 2 | 4 | Thorough testing of order status update. | QA |
| R-071 | DATA | Data validation issues when editing product details (Story 3.1). | 2 | 2 | 4 | Implement comprehensive input validation. | DEV/QA |
| R-072 | BUS | Changes not reflected in customer-facing catalog (Story 3.1). | 2 | 2 | 4 | Implement robust data synchronization and caching strategies. | DEV/QA |
| R-073 | DATA | Product not correctly archived/unarchived, leading to incorrect visibility (Story 3.2). | 2 | 2 | 4 | Thorough testing of archive/unarchive functionality. | QA |
| R-074 | BUS | Archived products still visible to customers (Story 3.2). | 2 | 2 | 4 | Thorough testing of product visibility after archiving. | QA |
| R-078 | SEC | Unauthorized deletion of orders (Story 3.4). | 1 | 3 | 3 | Implement proper authorization checks for order deletion. | SEC/DEV |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
|---|---|---|---|---|---|---|
| R-027 | TECH | Google Maps integration issues, map not displaying correctly (FR017). | 1 | 1 | 1 | Monitor |
| R-032 | BUS | Incompatibility with certain browsers, limiting user access (NFR002). | 1 | 2 | 2 | Monitor |
| R-055 | TECH | Google Maps API integration issues (Story 1.7). | 1 | 1 | 1 | Monitor |

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] **Story 1.1:** Verify deployed application is accessible via URL.
- [ ] **Story 1.1:** Verify "Hello World" page content.
- [ ] **Story 1.3:** Verify admin login page loads.
- [ ] **Story 1.3:** Verify successful admin login with valid credentials.
- [ ] **Story 1.4:** Verify "View Products" button/link is present on landing page.
- [ ] **Story 1.4:** Verify clicking "View Products" navigates to `/products` page.
- [ ] **Story 1.5:** Verify `/products` page loads successfully.
- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product card.
- [ ] **Story 2.1:** Verify clicking "Add to Cart" adds product to cart.
- [ ] **Story 2.3:** Verify checkout page loads.
- [ ] **Story 2.3:** Verify email input field is present and required.

**Total**: 11 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] **Story 1.1:** Verify CI/CD pipeline triggers on push.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully builds the application.
- [ ] **Story 1.1:** Verify CI/CD pipeline successfully deploys to staging.
- [ ] **Story 1.2:** Verify product table exists in database.
- [ ] **Story 1.2:** Verify all required product fields exist in schema.
- [ ] **Story 1.2:** Verify data types and constraints for product fields.
- [ ] **Story 1.2:** Verify application can connect to the database.
- [ ] **Story 1.2:** Verify product can be created via API/DB.
- [ ] **Story 1.2:** Verify product can be read via API/DB.
- [ ] **Story 1.2:** Verify product can be updated via API/DB.
- [ ] **Story 1.2:** Verify product can be deleted via API/DB.
- [ ] **Story 1.3:** Verify unsuccessful admin login with invalid credentials.
- [ ] **Story 1.3:** Verify admin session security (e.g., logout, session timeout).
- [ ] **Story 1.5:** Verify each product card displays name.
- [ ] **Story 1.5:** Verify each product card displays price.
- [ ] **Story 1.5:** Verify each product card displays current stock quantity.
- [ ] **Story 1.5:** Verify product data on page matches database.
- [ ] **Story 1.6:** Verify clicking a product card navigates to its detail page.
- [ ] **Story 1.6:** Verify product detail page displays name.
- [ ] **Story 1.6:** Verify product detail page displays price.
- [ ] **Story 1.6:** Verify product detail page displays real-time stock quantity.
- [ ] **Story 2.1:** Verify cart content persists across page navigations.
- [ ] **Story 2.1:** Verify cart icon updates with item count after adding product.
- [ ] **Story 2.1:** Verify "Add to Cart" is disabled for out-of-stock products.
- [ ] **Story 2.1:** Verify appropriate message displayed for out-of-stock products.
- [ ] **Story 2.2:** Verify shopping cart page displays all added items.
- [ ] **Story 2.2:** Verify each item displays name, quantity, price.
- [ ] **Story 2.2:** Verify customer can increase item quantity.
- [ ] **Story 2.2:** Verify customer can decrease item quantity.
- [ ] **Story 2.2:** Verify customer can remove an item from cart.
- [ ] **Story 2.2:** Verify cart total updates after quantity change.
- [ ] **Story 2.2:** Verify cart total updates after item removal.
- [ ] **Story 2.3:** Verify email input validates for correct format.
- [ ] **Story 2.3:** Verify error message for invalid email format.
- [ ] **Story 2.3:** Verify clear statement about payment at pickup on checkout page.
- [ ] **Story 2.3:** Verify clear statement about 18+ age limitation on checkout page.
- [ ] **Story 2.4:** Verify order confirmation page loads after successful order.
- [ ] **Story 2.4:** Verify unique reference number is displayed.
- [ ] **Story 2.4:** Verify store receives order details email.
- [ ] **Story 2.4:** Verify email content includes correct order details.
- [ ] **Story 2.4:** Verify new order appears in admin dashboard.
- [ ] **Story 2.5:** Verify admin dashboard displays "New Orders" section.
- [ ] **Story 2.5:** Verify new orders are listed in the section.
- [ ] **Story 2.5:** Verify order list displays reference number.
- [ ] **Story 2.5:** Verify order list displays customer email.
- [ ] **Story 2.5:** Verify order list displays order date.
- [ ] **Story 2.5:** Verify order list displays order status.
- [ ] **Story 2.5:** Verify admin can click an order to view details.
- [ ] **Story 2.5:** Verify order detail page displays ordered items and quantities.
- [ ] **Story 2.6:** Verify "Mark as Processed" button is present on order detail page.
- [ ] **Story 2.6:** Verify clicking "Mark as Processed" changes status to "Processed".
- [ ] **Story 2.6:** Verify customer receives "Ready for Pickup" email.
- [ ] **Story 2.6:** Verify email content is correct.
- [ ] **Story 3.3:** Verify admin can update stock from product list.
- [ ] **Story 3.3:** Verify admin can update stock from product edit page.
- [ ] **Story 3.3:** Verify updated stock is immediately reflected in customer catalog.
- [ ] **Story 3.3:** Verify system prevents setting negative stock.
- [ ] **Story 3.3:** Verify error message for negative stock input.
- [ ] **Story 3.4:** Verify confirmation prompt appears before deleting order.
- [ ] **Story 3.4:** Verify order is removed from admin dashboard after deletion.

**Total**: 60 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] **Story 1.1:** Verify Git repository initialization.
- [ ] **Story 1.1:** Verify Git remote configuration.
- [ ] **Story 1.1:** Verify `npm install` completes without errors.
- [ ] **Story 1.1:** Verify essential dependencies are present in `node_modules`.
- [ ] **Story 1.2:** Verify database is seeded with initial data (if applicable).
- [ ] **Story 1.3:** Verify admin can navigate to add product page.
- [ ] **Story 1.3:** Verify admin can add a new product with valid data.
- [ ] **Story 1.3:** Verify new product appears in product list.
- [ ] **Story 1.3:** Verify error handling for invalid product data (e.g., negative stock).
- [ ] **Story 1.3:** Verify admin can navigate to edit product page.
- [ ] **Story 1.3:** Verify admin can edit product name.
- [ ] **Story 1.3:** Verify admin can edit product description.
- [ ] **Story 1.3:** Verify admin can edit product price.
- [ ] **Story 1.3:** Verify admin can edit product stock.
- [ ] **Story 1.3:** Verify updated product details are saved and displayed.
- [ ] **Story 1.3:** Verify admin can view product list.
- [ ] **Story 1.3:** Verify product list displays name, description, price, stock.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on mobile.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on tablet.
- [ ] **Story 1.4:** Verify "View Products" button/link is visible and clickable on desktop.
- [ ] **Story 1.5:** Verify product list displays only "Cigars and Accessories".
- [ ] **Story 1.5:** Verify each product card displays brief description.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on mobile.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on tablet.
- [ ] **Story 1.5:** Verify product catalog layout is responsive on desktop.
- [ ] **Story 1.6:** Verify product detail page displays full description.
- [ ] **Story 1.6:** Verify product detail page displays land of origin.
- [ ] **Story 1.6:** Verify product detail page displays vitola.
- [ ] **Story 1.6:** Verify taste/flavor descriptions are present and simplified.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on mobile.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on tablet.
- [ ] **Story 1.6:** Verify product detail page layout is responsive on desktop.
- [ ] **Story 1.7:** Verify Google Maps iframe is present on landing page.
- [ ] **Story 1.7:** Verify map displays correct store location.
- [ ] **Story 1.7:** Verify store location is marked with a pin.
- [ ] **Story 2.2:** Verify cart updates if product price changes in backend.
- [ ] **Story 2.2:** Verify cart updates if product becomes out-of-stock in backend.
- [ ] **Story 2.3:** Verify phone number input field is present and optional.
- [ ] **Story 3.1:** Verify admin can select a product for editing.
- [ ] **Story 3.1:** Verify edit form loads with current product data.
- [ ] **Story 3.1:** Verify admin can modify product name.
- [ ] **Story 3.1:** Verify admin can modify product description.
- [ ] **Story 3.1:** Verify admin can modify product price.
- [ ] **Story 3.1:** Verify admin can modify product stock quantity.
- [ ] **Story 3.1:** Verify admin can modify product land of origin.
- [ ] **Story 3.1:** Verify admin can modify product vitola.
- [ ] **Story 3.1:** Verify saved changes are reflected in admin product list.
- [ ] **Story 3.1:** Verify saved changes are reflected in customer-facing product detail page.
- [ ] **Story 3.2:** Verify "Archive" option is available for products.
- [ ] **Story 3.2:** Verify archived product is no longer visible in customer catalog.
- [ ] **Story 3.2:** Verify archived product is visible in admin (e.g., via filter).
- [ ] **Story 3.2:** Verify admin can unarchive a product.
- [ ] **Story 3.2:** Verify unarchived product is visible in customer catalog.
- [ ] **Story 3.4:** Verify "Delete" option is available for orders.

**Total**: 55 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- [ ] **Story 1.7:** Verify map can be zoomed.
- [ ] **Story 1.7:** Verify map can be panned.

**Total**: 2 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
|---|---|---|---|---|
| P0 | 60 | 2.0 | 120 | Complex setup, security |
| P1 | 55 | 1.0 | 55 | Standard coverage |
| P2 | 2 | 0.5 | 1 | Simple scenarios |
| P3 | 0 | 0.25 | 0 | Exploratory |
| **Total** | **117** | **-** | **176** | **~22 days** |

### Prerequisites

**Test Data:**

- Admin user (for admin interface testing)
- Customer user (for customer-facing flows)
- Products with various stock levels (in-stock, out-of-stock)
- Products with different details (name, description, price, origin, vitola)
- Archived products
- Pending, Processed, Completed orders
- Dynamically generated using factories (`@faker-js/faker`)
- Seeded via API or direct database access

**Tooling:**

- Playwright (Test Framework, Test Runner, Assertion Library)
- `@faker-js/faker` (Data Generation)
- Playwright `request` fixture or dedicated API client (API Testing)
- Database client/ORM (Database Access)
- GitHub Actions (CI/CD)
- ESLint, Prettier (Code Quality)

**Environment:**

- Node.js (LTS), npm, Git (Local Development)
- Dedicated test database instance
- Staging environment for E2E testing
- Environment variables for secrets (`.env`, GitHub Secrets)

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: ≥95% (waivers required for failures)
- **P2/P3 pass rate**: ≥90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths**: ≥80%
- **Security scenarios**: 100%
- **Business logic**: ≥70%
- **Edge cases**: ≥50%

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (≥6) items unmitigated
- [ ] Security tests (SEC category) pass 100%
- [ ] Performance targets met (PERF category)

---

## Assumptions and Dependencies

### Assumptions

1.  The application will be deployed to a staging environment for E2E testing.
2.  A dedicated test database will be available for testing.
3.  Email service for notifications (store and customer) will be configured and reliable.
4.  Google Maps API key will be available for integration.
5.  The "Curated Selection" mechanism for newcomers will be clarified in design.

### Dependencies

1.  Backend API for product, order, and admin management.
2.  Frontend UI for customer and admin interfaces.
3.  CI/CD infrastructure for automated testing and deployment.
4.  Database for data persistence.
5.  Email service for notifications.

### Risks to Plan

- **Risk**: Scope creep leading to increased test effort.
  - **Impact**: Delayed delivery, reduced quality.
  - **Contingency**: Strict adherence to defined scope, clear communication with stakeholders.
- **Risk**: Unstable test environment causing flaky tests.
  - **Impact**: False negatives, wasted QA time.
  - **Contingency**: Dedicated, isolated test environments, robust test data management.
- **Risk**: Insufficient test data for complex scenarios.
  - **Impact**: Limited test coverage, missed bugs.
  - **Contingency**: Comprehensive test data strategy, dynamic data generation.

---

## Approval

**Test Design Approved By:**

- [ ] Product Manager: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***
- [ ] Tech Lead: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***
- [ ] QA Lead: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***

**Comments:**

---

---

---

## Appendix

### Knowledge Base References

- `risk-governance.md` - Risk classification framework
- `probability-impact.md` - Risk scoring methodology
- `test-levels-framework.md` - Test level selection
- `test-priorities-matrix.md` - P0-P3 prioritization

### Related Documents

- PRD: [PRD.md](./PRD.md)
- Epic: [epics.md](./epics.md)
- Architecture: (Not found)
- Tech Spec: (Not found)

---

**Generated by**: BMad TEA Agent - Test Architect Module
**Workflow**: `.bmad/bmm/testarch/test-design`
**Version**: 4.0 (BMad v6)