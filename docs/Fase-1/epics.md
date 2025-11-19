# ibe160 - Epic Breakdown

**Author:** BIP
**Date:** 2025-11-05
**Project Level:** 3
**Target Scale:** Level 3

---

## Overview

This document provides the detailed epic breakdown for ibe160, expanding on the high-level epic list in the [PRD](./PRD.md).

Each epic includes:

- Expanded goal and value proposition
- Complete story breakdown with user stories
- Acceptance criteria for each story
- Story sequencing and dependencies

**Epic Sequencing Principles:**

- Epic 1 establishes foundational infrastructure and initial functionality
- Subsequent epics build progressively, each delivering significant end-to-end value
- Stories within epics are vertically sliced and sequentially ordered
- No forward dependencies - each story builds only on previous work

---

## Epic 1: Project Foundation & Product Catalog

**Expanded Goal:** This epic aims to establish the fundamental technical infrastructure for the project, including repository setup, continuous integration/continuous deployment, and initial database configuration. Concurrently, it will enable the business owner to manage basic product data and allow customers to view the product catalog and detailed product information on a responsive, customer-facing interface.

### Story Breakdown

**Story 1.1: Basic Project Infrastructure Setup**

As a developer,
I want to set up the basic project infrastructure (repository, CI/CD, deployment pipeline),
So that we have a deployable application and a foundation for future development.

**Acceptance Criteria:**
1. A Git repository is initialized and configured.
2. A basic CI/CD pipeline is set up for automated builds and deployments to a staging environment.
3. The application can be successfully deployed and accessed (e.g., a simple "Hello World" page).
4. Basic project dependencies are installed and configured.

**Prerequisites:** None

---

**Story 1.2: Product Data Model and Database Initialization**

As a developer,
I want to define the product data model and initialize the database,
So that product information can be stored and retrieved.

**Acceptance Criteria:**
1. A database schema is defined for products, including fields for name, description, price, stock quantity, land of origin, and vitola.
2. The database is initialized and accessible by the application.
3. Basic CRUD operations for products can be performed (e.g., via a temporary API endpoint or direct database access for testing).

**Prerequisites:** Story 1.1

---

**Story 1.3: Admin Interface for Basic Product Management**

As a Business Owner,
I want to add, edit, and view basic product information (name, description, price, stock)
So that I can manage the product catalog.

**Acceptance Criteria:**
1. A secure admin login page is implemented (FR020).
2. After logging in, I can access a page to add new products with name, description, price, and initial stock (FR013).
3. I can edit existing product's name, description, price, and stock.
4. I can view a list of all products with their basic details.

**Prerequisites:** Story 1.2

---

**Story 1.4: Landing Page Navigation to Products Page**

As a Customer,
I want to easily navigate from the landing page to the products page
So that I can quickly start browsing products.

**Acceptance Criteria:**
1. The landing page contains a clear button or link labeled "View Products" or similar.
2. Clicking this button/link navigates the user to the dedicated "Products" page.
3. The button/link is responsive and functional across mobile, tablet, and PC devices.

**Prerequisites:** Story 1.3

---

**Story 1.5: Customer-Facing Product Catalog Display**

As a Customer,
I want to view a list of available products within the "Cigars and Accessories" category on a dedicated products page
So that I can browse the product offerings.

**Acceptance Criteria:**
1. A dedicated "Products" page displays a list of products within the "Cigars and Accessories" category (FR001).
2. Each product in the catalog displays its name, a brief description, price, and current stock quantity.
3. The catalog is up-to-date with product information from the database.
4. The "Products" page is responsive across mobile, tablet, and PC devices (NFR001).

**Prerequisites:** Story 1.4

---

**Story 1.6: Customer-Facing Product Detail Page**

As a Customer,
I want to view detailed information for a specific product
So that I can make an informed decision about a purchase.

**Acceptance Criteria:**
1. Clicking on a product in the catalog navigates to a dedicated product detail page.
2. The product detail page displays the product's name, full description, price, real-time stock quantity, land of origin, and vitola (FR001, FR002).
3. The product detail page includes simplified, relatable language for taste/flavor descriptions (FR003).
4. The product detail page is responsive across mobile, tablet, and PC devices (NFR001).

**Prerequisites:** Story 1.5

---

**Story 1.7: Landing Page with Store Location Map**

As a Customer,
I want to see the store's location on a map on the landing page,
So that I can easily find the physical store.

**Acceptance Criteria:**
1. The landing page includes an embedded Google Maps view (FR017).
2. The map is centered on the Alta Sigar & Grill store location.
3. A pin or marker clearly indicates the store's address.
4. The map is interactive (zoom, pan).

**Prerequisites:** Story 1.4

---

## Epic 2: Click-and-Collect Ordering

**Expanded Goal:** This epic focuses on enabling customers to seamlessly place click-and-collect orders through a functional shopping cart and checkout process. Concurrently, it will provide the business owner with the essential tools to view and manage these incoming orders, facilitating efficient preparation and customer communication.

### Story Breakdown

**Story 2.1: Add Products to Shopping Cart**

As a Customer,
I want to add products from the catalog or product detail page to a shopping cart
So that I can collect items I wish to purchase.

**Acceptance Criteria:**
1. A button/action exists on product listings and detail pages to "Add to Cart" (FR004).
2. Clicking "Add to Cart" adds the selected product and quantity to a persistent shopping cart.
3. The shopping cart icon/indicator updates to reflect the number of items.
4. The system handles out-of-stock scenarios gracefully (e.g., prevents adding, displays message).

**Prerequisites:** Story 1.6

---

**Story 2.2: Manage Shopping Cart Contents**

As a Customer,
I want to view and modify the contents of my shopping cart
So that I can finalize my order before checkout.

**Acceptance Criteria:**
1. I can view all items currently in my shopping cart, including product name, quantity, and price.
2. I can adjust the quantity of each item in the cart.
3. I can remove items from the cart.
4. The cart total updates dynamically with changes.
5. The system automatically updates the shopping cart with product changes (e.g., if stock changes) (FR005).

**Prerequisites:** Story 2.1

---

**Story 2.3: Customer Checkout Process**

As a Customer,
I want to provide my contact details to place a click-and-collect order
So that the store can prepare and contact me about my order.

**Acceptance Criteria:**
1. A "Proceed to Checkout" button is available in the shopping cart.
2. The checkout page prompts for essential details: email (required) and phone number (optional) (FR006).
3. Input fields have appropriate validation (e.g., email format).
4. The checkout process clearly states that payment occurs at pickup (FR018).
5. The Checkout process clearly states the age limitation of 18 years for picking up orders.

**Prerequisites:** Story 2.2

---

**Story 2.4: Order Confirmation and Store Notification**

As a Customer,
I want to receive confirmation that my order has been placed
So that I know the store has received my request.

As a Business Owner,
I want to be notified of new orders
So that I can begin processing them.

**Acceptance Criteria:**
1. Upon successful order placement, a confirmation page is displayed with a unique reference number (FR007).
2. An email containing order details is automatically sent to the store's designated email address (FR008).
3. The system records the new order in the admin dashboard (FR009).

**Prerequisites:** Story 2.3

---

**Story 2.5: Admin View New Orders**

As a Business Owner,
I want to view a list of all incoming and pending orders
So that I can manage my workload and prepare orders for pickup.

**Acceptance Criteria:**
1. The admin dashboard includes a section or list displaying new orders.
2. Each order entry shows key details (e.g., reference number, customer email, order date, status).
3. I can click on an order to view its full details, including ordered items and quantities (FR010).

**Prerequisites:** Story 2.4

---

**Story 2.6: Admin Mark Order as Prepared**

As a Business Owner,
I want to update the status of an order to "Prepared"
So that I can track its preparation and notify the customer.

**Acceptance Criteria:**
1. From the order detail view in the admin interface, a button/action exists to "Mark as Prepared".
2. Clicking this action changes the order status to "Prepared" (FR011).
3. The system automatically sends a "Ready for Pickup" email notification to the customer (FR019).

**Prerequisites:** Story 2.5

---

**Story 2.7: Admin Cancel Order**

As a Business Owner,
I want to update the status of an order to "Cancelled"
So that I can handle orders that are not picked up or are cancelled by the customer.

**Acceptance Criteria:**
1. From the order detail view in the admin interface, a button/action exists to "Mark as Cancelled".
2. Clicking this action changes the order status to "Cancelled" (FR011).
3. The stock for the items in the cancelled order is returned to the main inventory.
4. The order remains in the system for historical records but is clearly marked as "Cancelled".

**Prerequisites:** Story 2.5

---

## Epic 3: Admin Product & Inventory Management

**Expanded Goal:** This epic focuses on empowering the business owner with comprehensive tools to manage the product catalog and inventory levels efficiently through a secure administrative interface. This includes advanced product editing capabilities, the ability to archive products, and streamlined stock level updates, ensuring the online store accurately reflects physical inventory and business operations.

### Story Breakdown

**Story 3.1: Admin Edit Full Product Details**

As a Business Owner,
I want to edit all details of an existing product, including name, description, price, stock, land of origin, and vitola
So that I can maintain accurate and and complete product information.

**Acceptance Criteria:**
1. From the product list in the admin interface, I can select a product to edit.
2. The edit form pre-populates with existing product data.
3. I can modify the product's name, description, price, stock quantity, land of origin, and vitola (FR014).
4. Changes are saved and reflected in the customer-facing catalog.

**Prerequisites:** Story 1.3 (Admin Interface for Basic Product Management)

---

**Story 3.2: Admin Archive Product**

As a Business Owner,
I want to archive a product
So that it is no longer visible to customers but its data is retained for historical purposes.

**Acceptance Criteria:**
1. From the product list in the admin interface, I can select a product and choose to "Archive".
2. Archived products are removed from the customer-facing catalog (FR015).
3. Archived products are still accessible in the admin interface (e.g., via a filter or separate view).
4. I can unarchive a product, making it visible again to customers.

**Prerequisites:** Story 3.1

---

**Story 3.3: Admin Update Product Stock Levels**

As a Business Owner,
I want to quickly update the stock levels for products
So that the online catalog accurately reflects physical inventory.

**Acceptance Criteria:**
1. From the product list or product edit page in the admin interface, I can easily modify the stock quantity for any product (FR016).
2. Changes to stock levels are immediately reflected in the customer-facing catalog.
3. The system prevents setting stock to a negative value.

**Prerequisites:** Story 3.1

---

**Story 3.4: Admin Delete Order**

As a Business Owner,
I want to delete an order
So that I can remove cancelled or erroneous orders from my active list.

**Acceptance Criteria:**
1. From the order list or order detail page in the admin interface, I can select an order and choose to "Delete".
2. A confirmation prompt appears before deletion.
3. The order is permanently removed from the admin dashboard (FR012).

**Prerequisites:** Story 2.5 (Admin View New Orders)


---

## Story Guidelines Reference

**Story Format:**

```
**Story [EPIC.N]: [Story Title]**

As a [user type],
I want [goal/desire],
So that [benefit/value].

**Acceptance Criteria:**
1. [Specific testable criterion]
2. [Another specific criterion]
3. [etc.]

**Prerequisites:** [Dependencies on previous stories, if any]
```

**Story Requirements:**

- **Vertical slices** - Complete, testable functionality delivery
- **Sequential ordering** - Logical progression within epic
- **No forward dependencies** - Only depend on previous work
- **AI-agent sized** - Completable in 2-4 hour focused session
- **Value-focused** - Integrate technical enablers into value-delivering stories

---

**For implementation:** Use the `create-story` workflow to generate individual story implementation plans from this epic breakdown.