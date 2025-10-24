# Product Brief: Alta Sigar & Grill Website

**Version:** 1.0
**Date:** 2025-10-24

## 1. Product Overview

### 1.1. Product Name
Alta Sigar & Grill Website

### 1.2. Project Goal
To build a responsive web application that showcases the "Alta Sigar & Grill" product catalog, provides real-time inventory levels, and allows customers to place "click-and-collect" orders. The system will empower the business owner to manage products and orders efficiently through a secure admin dashboard.

## 2. Target Audience

*   **Business Owner:** A solo entrepreneur who needs a simple, effective online presence to manage inventory and handle customer orders without requiring a complex e-commerce solution.
*   **Customer:** Enthusiasts of premium cigars and barbeque who want to browse the store's selection, check product availability, and conveniently reserve items for in-store pickup.

## 3. User Problems & Needs

### 3.1. Business Owner
*   **Problem:** Lacks an online presence to showcase products and reach a wider audience. Managing inventory and orders manually is inefficient.
*   **Need:** A simple dashboard to add/update products, manage stock levels, and view/process incoming customer orders.

### 3.2. Customer
*   **Problem:** No way to know what's in stock without visiting or calling the store.
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

### 4.2. Backend & Admin
*   **Secure Admin Login:** Authenticated access for the business owner.
*   **Order Management:**
    *   Dashboard to view all incoming orders, sorted by date.
    *   Ability to update order status (e.g., "Received," "Processed," "Completed").
    *   Stock levels are automatically adjusted when an order is marked "Completed."
*   **Product & Inventory Management:**
    *   Interface to add, edit, and archive products.
    *   Fields include: Name, Description, Price, Stock Quantity, Image Upload.
*   **Stock Reservation:** When a customer adds an item to the cart, the stock is reserved for 30 minutes to prevent overselling.

## 5. Success Criteria

1.  The website accurately displays real-time product inventory.
2.  The business owner can successfully manage products and process orders via the admin dashboard.
3.  Customers can seamlessly browse products and place click-and-collect orders.
4.  The store's location is correctly displayed and interactive on the map.

## 6. Technical Stack

*   **Frontend:** Next.js, Tailwind CSS
*   **Backend:** Python, FastAPI
*   **Database:** Supabase
*   **Hosting:** Vercel
*   **Maps API:** Google Maps JavaScript API
