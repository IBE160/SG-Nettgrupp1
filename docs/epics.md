# ibe160 - Epic Breakdown

**Author:** BIP
**Date:** 2025-10-27
**Project Level:** 3
**Target Scale:** 2-5 epics, 15-40 stories total

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

### Epic 1: Customer-Facing Shop

**Expanded Goal:** To provide a complete and intuitive shopping experience for customers, allowing them to browse products, see details and availability, manage a shopping cart, and place a "click-and-collect" order. This epic covers all public-facing functionality of the website.

---

**Story 1.1: View Product Catalog**
*   **As a** customer,
*   **I want** to see all available products on a single page,
*   **So that** I can browse the store's offerings.

**Acceptance Criteria:**
1.  A "Shop" page displays all products in a grid or list format.
2.  Each product card shows its image, name, price, and current stock quantity.
3.  The layout is responsive and works on both desktop and mobile screens.

---

**Story 1.2: View Product Details**
*   **As a** customer,
*   **I want** to click on a product to view a detailed description,
*   **So that** I can make an informed purchasing decision.

**Acceptance Criteria:**
1.  Clicking a product card navigates to a unique page for that product.
2.  The page displays a larger image, full description, price, and stock.
3.  An "Add to Cart" button is clearly visible.

---

**Story 1.3: Add and Adjust Items in Cart**
*   **As a** customer,
*   **I want** to add products to a shopping cart and adjust quantities,
*   **So that** I can prepare my order for checkout.

**Acceptance Criteria:**
1.  Clicking "Add to Cart" on a product page adds one unit of that item to the cart.
2.  A shopping cart icon in the header updates to reflect the total number of items.
3.  From the main shop page, I can use "+" and "–" buttons on a product card to change the quantity in the cart without visiting the detail page.

---

**Story 1.4: View and Manage Shopping Cart**
*   **As a** customer,
*   **I want** to view my shopping cart on a dedicated page,
*   **So that** I can review my selections before checking out.

**Acceptance Criteria:**
1.  Clicking the cart icon opens a page listing all selected items.
2.  Each item shows its name, quantity, and price.
3.  I can adjust the quantity of any item or remove it completely.
4.  The total order price is displayed and updates automatically with any changes.

---

**Story 1.5: Place Click-and-Collect Order**
*   **As a** customer,
*   **I want** to submit my order for in-store pickup,
*   **So that** the store can prepare my items.

**Acceptance Criteria:**
1.  The checkout page contains a simple form for my Full Name, Email (required), and Phone Number (optional).
2.  A clear notice regarding the 18+ age limit and ID requirement for cigar purchases is visible.
3.  Submitting the form places the order without requiring any payment information.

---

**Story 1.6: Receive Order Confirmation**
*   **As a** customer,
*   **I want** to receive immediate confirmation that my order was received,
*   **So that** I know it is being processed.

**Acceptance Criteria:**
1.  After checkout, I am taken to a confirmation page displaying a unique Order ID.
2.  The page informs me that a second confirmation will be sent when the order is ready for pickup.
3.  An email notification with the order details is sent to the store owner.

---

**Story 1.7: View Store Location**
*   **As a** customer,
*   **I want** to see the store's location on a map,
*   **So that** I can easily find it for pickup.

**Acceptance Criteria:**
1.  The website's landing page includes a "Visit Us" section.
2.  This section contains an embedded and interactive Google Map showing the store's address.

---

### Epic 2: Admin Dashboard

**Expanded Goal:** To provide the business owner with a secure, centralized interface to manage all aspects of the online store, including processing incoming orders and maintaining the product catalog. This epic covers all backend and administrative functionality.

---

**Story 2.1: Secure Admin Access**
*   **As an** admin,
*   **I want** to log in to a private dashboard,
*   **So that** only I can manage the store's operations.

**Acceptance Criteria:**
1.  A private login page (e.g., `/admin`) exists.
2.  Access is protected by a username and password.
3.  A successful login directs me to the main admin dashboard.

---

**Story 2.2: View Incoming Orders**
*   **As an** admin,
*   **I want** to see a list of all customer orders,
*   **So that** I can track and prepare them for pickup.

**Acceptance Criteria:**
1.  The dashboard displays a list of all submitted orders, with the newest ones first.
2.  Each order in the list shows the Order ID, customer name, order date, and status.
3.  I can click on an order to see the specific items and quantities requested.

---

**Story 2.3: Manage Order Status and Inventory**
*   **As an** admin,
*   **I want** to update an order's status,
*   **So that** I can manage my workflow and automatically update stock levels.

**Acceptance Criteria:**
1.  I can change an order's status (e.g., from "Received" to "Completed").
2.  When an order is marked as "Completed," the stock quantities for the products in that order are automatically deducted from the inventory.
3.  The new status is saved and reflected in the order list.

---

**Story 2.4: Manage Product Catalog**
*   **As an** admin,
*   **I want** to add, edit, and remove products from my catalog,
*   **So that** the website always shows accurate product information.

**Acceptance Criteria:**
1.  A "Products" section in the dashboard shows a list of all my products.
2.  I can open a form to add a new product, including its name, description, price, stock quantity, and an image.
3.  I can edit the details of any existing product.
4.  I can remove a product from the catalog.
