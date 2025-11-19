# ibe160 Product Requirements Document (PRD)

**Author:** BIP
**Date:** 2025-11-03
**Project Level:** 3
**Target Scale:** Level 3

---

## Goals and Background Context

### Goals

*   Reduce manual effort and time spent on inventory and order management.
*   Increase sales and store traffic through online engagement and click-and-collect orders.
*   Improve accuracy of online stock levels reflecting physical inventory.
*   Establish a reliable and functional web presence for the business.
*   Enhance customer engagement with product information online.
*   Provide a smooth and intuitive click-and-collect order placement experience.

### Background Context

The Alta Sigar & Grill business currently faces significant operational inefficiencies due to a lack of formal inventory and order management systems, leading to manual, time-consuming processes and potential stock inaccuracies. This diverts the owner's time from core business growth. Concurrently, customers are unable to view real-time product availability or place remote orders, creating a barrier to purchase and impacting satisfaction.

This project aims to address these critical issues by modernizing operations and enhancing customer experience. By implementing a web application with an intuitive admin interface for the owner and a user-friendly frontend for customers, Alta Sigar & Grill can streamline inventory and order management and offer convenient click-and-collect services. This strategic move is expected to boost operational efficiency, increase customer satisfaction, expand market reach, and ultimately drive sales.

---

## Success Metrics

*   **Goal: Reduce manual effort**
    *   *Metric:* Reduce owner's time spent on order processing by 50% within 3 months of launch.
*   **Goal: Increase sales**
    *   *Metric:* Achieve an average of 10 click-and-collect orders per week within 2 months of launch.
*   **Goal: Improve accuracy**
    *   *Metric:* Maintain a 99% match between digital and physical stock counts, verified monthly.

---

## Requirements

### Functional Requirements

*   FR001: The system shall display an up-to-date product catalog for "Cigars and Accessories" including name, description, price, and real-time stock quantity.
*   FR002: The system shall display "Land of origin" and "Vitola" for each product on its detail page.
*   FR003: The system shall provide simplified, relatable language for taste/flavor descriptions.
*   FR004: The system shall allow customers to add products to a shopping cart.
*   FR005: The system shall automatically update the shopping cart with product changes.
*   FR006: The system shall provide a checkout page for customers to enter essential details (email, optional phone).
*   FR007: The system shall generate an order confirmation page with a unique reference number upon successful order placement.
*   FR008: The system shall automatically send order details via email to the store upon order placement.
*   FR009: The system shall record all placed orders in the admin dashboard.
*   FR010: The system shall provide an admin interface for the business owner to view incoming orders.
*   FR011: The system shall allow the business owner to mark orders as "Prepared", "Completed", or "Cancelled" in the admin interface.
*   FR012: The system shall allow the business owner to delete orders in the admin interface.
*   FR013: The system shall provide an admin interface for the business owner to add new products.
*   FR014: The system shall provide an admin interface for the business owner to edit existing product details.
*   FR015: The system shall provide an admin interface for the business owner to archive products.
*   FR016: The system shall allow the business owner to update stock levels for products in the admin interface.
*   FR017: The system shall integrate a Google Maps view on the landing page displaying the store's location.
*   FR018: The system shall support a "click-and-collect" ordering model where payment occurs physically at pickup.
*   FR019: The system shall automatically send an email notification to the customer when the business owner marks an order as "Prepared" and ready for pickup.
*   FR020: The admin interface shall support authenticated login.

### Non-Functional Requirements

*   NFR001: The system shall be fully responsive across mobile, tablet, and PC devices.
*   NFR002: The system shall support standard modern web browsers (Chrome, Firefox, Edge, Safari) on their latest stable versions.
*   NFR003: The system shall maintain a consistent website uptime of 99.9%. *(Note: Stakeholder to confirm feasibility vs. cost)*
*   NFR004: The system shall ensure secure hosting over HTTPS.

---

## User Journeys

### User Journey 1: Customer (General) - Placing a Click-and-Collect Order

*   **Persona:** Customer (General)
*   **Goal:** To place a click-and-collect order for cigars.
*   **Entry Point:** Arrives at the website (e.g., via search, direct link).
*   **Flow:**
    1.  **Browse Products:** Customer navigates to the "Cigars and Accessories" catalog. (FR001)
    2.  **View Product Details:** Customer clicks on a product to see its description, price, stock, origin, and vitola. (FR002)
    3.  **Add to Cart:** Customer adds desired quantity of product to cart. (FR004)
    4.  **Review Cart:** Customer reviews items in the shopping cart. (FR005)
    5.  **Proceed to Checkout:** Customer clicks checkout.
    6.  **Enter Details:** Customer provides email and optional phone number. (FR006)
    7.  **Confirm Order:** Customer reviews order summary and confirms. (FR018)
    8.  **Receive Confirmation:** Customer sees order confirmation page with reference number. (FR007)
    9.  **In-Store Pickup:** Customer visits store, pays, and collects order.
*   **Decision Points/Alternatives:**
    *   Customer can continue browsing or go directly to checkout.
    *   Customer can adjust quantities or remove items from cart.
*   **Edge Cases:**
    *   Product goes out of stock before checkout (system notifies customer).
    *   Customer abandons cart.

### User Journey 2: Business Owner - Processing a New Order

*   **Persona:** Business Owner
*   **Goal:** To process a new click-and-collect order.
*   **Entry Point:** Logs into the admin interface.
*   **Flow:**
    1.  **Login:** Owner logs into the admin dashboard. (FR020)
    2.  **View New Orders:** Owner sees a notification or list of new incoming orders. (FR010)
    3.  **Select Order:** Owner clicks on a new order to view details.
    4.  **Prepare Order:** Owner gathers products for the order.
    5.  **Update Order Status:** Owner marks the order as "Prepared". (FR011)
    6.  **Send Ready for Pickup Confirmation:** System automatically sends a confirmation email to the customer that the order is ready for pickup. (FR019)
    7.  **Customer Pickup:** Customer arrives, pays, and collects.
    8.  **Complete Order:** Owner marks the order as "Completed". (FR011)
*   **Decision Points/Alternatives:**
    *   Owner can delete an order if there's an issue (e.g., customer cancellation). (FR012)
*   **Edge Cases:**
    *   Customer doesn't pick up order (owner can mark the order as "Cancelled" or delete it).
    *   Stock discrepancy (owner updates stock levels via product management). (FR016)

---

## UX Design Principles

### UX Principles

1.  **Simplicity and Intuition:** Design interfaces that are easy to understand and navigate, particularly for the business owner (limited technical expertise).
2.  **Transparency:** Provide clear and real-time information, especially regarding product availability and order status, to build customer trust and reduce owner inquiries.
3.  **Efficiency:** Optimize workflows for both customers (quick and seamless click-and-collect ordering) and the business owner (streamlined order and inventory management).
4.  **Accessibility:** Adhere to WCAG 2.1 AA compliance as a recommended best practice to ensure the website is usable by the widest possible audience.

---

## User Interface Design Goals

### UI Design Goals

#### Platform & Screens

*   **Target Platforms:** The application must be fully responsive, providing an optimal viewing and interaction experience across mobile, tablet, and desktop devices.
*   **Core Screens/Views:**
    *   **Customer-Facing:**
        *   Landing Page (including an integrated map)
        *   Product Catalog
        *   Product Detail Page
        *   Shopping Cart
        *   Checkout Page
        *   Order Confirmation Page
    *   **Admin-Facing:**
        *   Login Page
        *   Admin Dashboard (for managing orders, products, and inventory)
*   **Key Interaction Patterns:**
    *   Seamless "click-and-collect" ordering process.
    *   Intuitive product browsing and discovery.
    *   Efficient data entry and status updates within the admin interface.

#### Design Constraints

*   **Branding:** The design should align with the existing brand identity of Alta Sigar & Grill.
*   **Technology Stack:** *(To be defined in the Technical Specification document)*
*   **Browser Support:** The application must be compatible with the latest stable versions of modern web browsers (Chrome, Firefox, Edge, Safari).
*   **Security:** The entire website must be served over HTTPS.

---

## Epic List

### Epic List

**Epic 1: Project Foundation & Product Catalog**
*   **Goal:** Establish the project's technical foundation and display the initial product catalog to customers.
*   **Estimated Story Count:** 5-8 stories

**Epic 2: Click-and-Collect Ordering**
*   **Goal:** Enable customers to place click-and-collect orders and provide the business owner with a basic order viewing capability.
*   **Estimated Story Count:** 6-10 stories

**Epic 3: Admin Product & Inventory Management**
*   **Goal:** Empower the business owner to manage products and update inventory levels through a secure admin interface.
*   **Estimated Story Count:** 4-7 stories

> **Note:** Detailed epic breakdown with full story specifications is available in [epics.md](./epics.md)

---

## Out of Scope

### Out of Scope

The following features and capabilities are explicitly excluded from the scope of this project's initial release:

*   **Full Online Payment and Shipping:** All payments will be handled physically at the point of pickup. The website will not process any online financial transactions.
*   **Advanced Search and Filtering for Products:** The initial release will feature a browsable product catalog. Complex search queries and multi-faceted filtering are not included.
*   **Customer Accounts or Loyalty Features:** Users will not be able to create accounts, and there will be no features for tracking purchase history or managing loyalty points.
*   **Multiple Product Categories:** The scope is strictly limited to the "Cigars and Accessories" product category. Additional categories, such as "Barbeques and Accessories," are not included in the MVP.
