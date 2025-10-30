# Product Brief: Alta Sigar & Grill Website

**Version:** 1.0
**Date:** 2025-10-24

## 1. Product Overview

### 1.1. Product Name
Alta Sigar & Grill Website

### 1.2. Project Goal
To build a responsive web application that showcases the "Alta Sigar & Grill" product catalog, provides real-time inventory levels, and allows customers to place "click-and-collect" orders. The primary focus is on intuitive functionality and ease of use, ensuring the site is self-explanatory for all users. While a traditional and classic aesthetic is desired to match the brand, design considerations are secondary to core functionality at this stage. The system will empower the business owner to manage products and orders efficiently through a secure admin dashboard.

### 1.3. Future Considerations
The solution should be designed with the flexibility to easily add more product categories in the future, supporting potential business expansion. Features like stock reservation (reserving items in the cart for a limited time) are considered for a later phase.

## 2. Target Audience

*   **Business Owner:** A solo entrepreneur with an intermediate technical comfort level. Their typical day involves checking and processing incoming orders, preparing items for pickup, and sending customer confirmations. They regularly monitor inventory levels for restocking and update the product catalog with new items received from suppliers. This individual needs a simple, effective online presence to manage inventory and handle customer orders efficiently, without requiring a complex e-commerce solution.
*   **Customer:** Enthusiasts of premium cigars and barbeque, typically aged 18 and above, who are accustomed to mobile online shopping. They tend to purchase in relatively small quantities (1-5 items per purchase). These customers seek to browse the store's selection, check product availability, and conveniently reserve items for in-store pickup. It is crucial that the website provides clear information regarding the 18+ age limit for cigar purchases and the requirement to show ID upon pickup.

## 3. User Problems & Needs

### 3.1. Business Owner
*   **Problem:** The current lack of an online presence results in inefficient manual processes for inventory and order management, consuming an estimated 1-2 hours of valuable time each week. This manual effort is a direct operational cost and a barrier to scaling.
*   **Need:** A simple dashboard to add/update products, manage stock levels, and view/process incoming customer orders.

### 3.2. Customer
*   **Problem:** Customers have no way to verify product availability without visiting or calling the store. Direct feedback indicates that customers have requested an online inventory, and it is assumed that sales are being lost when potential buyers cannot confirm desired items are in stock.
*   **Need:** A way to view the current product catalog, see detailed information, and place an order for easy pickup.

## 4. Key Features & Scope (MVP)

### 4.1. Frontend
*   **Landing Page:** Introduces the brand and includes a "Visit Us" section with an embedded Google Map.
*   **Product Catalog Page:**
    *   Displays all products in the "Cigars and Accessories" category.
    *   Each product card shows: Image, Name, Price, Stock Quantity, **Land of Origin**, and **Vitola** (cigar shape).
    *   Includes "+" and "-" buttons for direct quantity adjustment.
*   **Product Details Page:**
    *   Provides a larger image and a detailed description including: **Taste and flavor, Tobacco leaf type, and Recommended use.**
*   **Shopping Cart:**
    *   Icon in the header that updates automatically.
    *   A dedicated page to review items, adjust quantities, and see the total price.
*   **Checkout Process (Click & Collect):**
    *   Collects Customer's **Full Name** (First and Last), **Email**, and optional Phone Number.
    *   No payment processing.
    *   Submits the order to the backend and sends an email notification to the store owner.
*   **Order Confirmation Page:**
    *   Confirms order submission with an Order ID.
    *   Informs the customer that a second confirmation will be sent when the order is ready for pickup.
*   **Age Verification Notice:** Clearly communicates the 18+ age limit for cigar purchases and the requirement for ID verification at pickup.

### 4.2. Backend & Admin
*   **Secure Admin Login:** Authenticated access for the business owner.
*   **Order Management:**
    *   Dashboard to view all incoming orders, sorted by date.
    *   Ability to update order status (e.g., "Received," "Processed," "Completed").
    *   Stock levels are automatically adjusted when an order is marked "Completed."
*   **Product & Inventory Management:**
    *   Interface to add, edit, and archive products.
    *   Fields include: Name, Description, Price, Stock Quantity, Image Upload.

## 5. Success Criteria

1.  **Business Efficiency:** The business owner spends less than 1 hour per week on manual inventory updates and new product additions, demonstrating significant operational efficiency gains.
2.  **Sales Growth:** Achieve a 20% increase in sales attributed to the enhanced online product display and improved customer accessibility.
3.  **Customer Experience:** Customers can seamlessly browse products, view real-time inventory, and place click-and-collect orders with a high degree of satisfaction and ease of use.
4.  **Operational Reliability:** The website accurately displays real-time product inventory, and the business owner can effectively manage products and process orders via the admin dashboard.
5.  **Local Presence:** The store's location is correctly displayed and interactive on the map, facilitating customer visits.

### Key Performance Indicators (KPIs)

*   **Manual Inventory Update Time:** Average hours per week spent by the business owner on manual inventory tasks (target: < 1 hour).
*   **Online Sales Growth:** Percentage increase in sales attributed to the online platform (target: 20% increase).
*   **Click-and-Collect Conversion Rate:** The percentage of website visitors who complete a click-and-collect order.
*   **Inventory Accuracy Rate:** Percentage of orders fulfilled without stock discrepancies.


## 5.1. Strategic Alignment and Financial Impact

### Financial Impact

*   **Development Investment:** Project development will primarily utilize free tier programs to minimize costs.
*   **Revenue Potential:** A 20% increase in sales is anticipated, directly attributable to the improved online product display and a more efficient ordering system. The existing revenue from product sales is expected to be significantly boosted by this online presence.

*   **Cost Savings:** The primary cost saving is the estimated 1-2 hours per week saved by the business owner on manual inventory updates and new product additions. No other significant direct cost savings are currently identified.

### Strategic Alignment

*   **Core Objective:** This project directly supports the strategic objective of making quality products easily available for customers, enhancing customer reach and service.


## 5.2. Constraints and Assumptions

### Constraints

*   **Timeline:** Project deadline is December 1, 2025.
*   **Budget:** Development will primarily utilize free tier programs to minimize costs.

### Key Assumptions

*   **Technical Proficiency:** The business owner possesses an intermediate level of technical proficiency, enabling them to effectively utilize the admin dashboard for product and order management.
*   **Market Conditions:** Assumed stable market conditions for premium cigars and barbeque products.
*   **User Behavior:** Assumed customer willingness to use a click-and-collect model for purchases.


## 5.3. Risks and Open Questions

### Key Risks

*   **Integration Challenges:** Potential problems integrating with online systems, particularly with third-party services like Google Supabase. This could lead to delays or require alternative solutions.
*   **Timeline Pressure:** The project deadline of December 1, 2025, presents a significant risk due to the remaining workload. This may necessitate careful prioritization and efficient execution.

### Open Questions

*   None identified at this stage.

### Areas Needing Further Research

*   None identified at this stage.

## 6. Technical Stack

*   **Frontend:** Next.js, Tailwind CSS
*   **Backend:** Python, FastAPI
*   **Database:** Supabase
*   **Hosting:** Vercel
*   **Maps API:** Google Maps JavaScript API
