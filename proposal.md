## Case Title
**Alta Sigar & Grill** Website

## Background
Alta Sigar & Grill is a specialty retailer combining two lifestyle passions: premium cigars and barbeque culture.  
The company wants to build a website to display its inventory of cigars, cigar accessories. The frontend website shall display one category: **Cigars and Accessories** with an option to later add another category: **Barbeques and Accessories**. 

## Purpose
The goal is to build a web application that displays the product catalog and the quantity of each item in stock, providing a streamlined solution for the business to manage its online presence and drive traffic to its physical store.
The system will:
- Show the current inventory of products.  
- Display the number of items in stock for each product.  
- Allow the Business Owner to update stock levels and product information directly through the admin dashboard.  
- Receive and manage customer orders.

## Target Users
- **Business Owner:** A solo entrepreneur selling physical goods who wants a simple way to show the store's inventory online and manage it efficiently, in addition to handling incoming orders from customers.  
- **Customer:** Enthusiasts of cigars and barbeque culture who want to see the available products and place a simple click-and-collect order.

## Core Functionality
- **Frontend:** Landing page, Product showcase pages, shopping cart and a “Visit Us” feature with a map on the landing page. 
- **Backend:** Secure login, product and inventory management, and an order management possibility.
- **Ordering:** A click-and-collect checkout that sends orders both to the store’s email and to the admin dashboard database.

### Must Have (MVP)
- **Product Catalog:** Up-to-date listings for one main product category (Cigars and Accesories), showing product name, description, price, and stock.
- **Ordering System:** “Click and Collect” functionality where customers can send their order digitally to the store. (Payment is made physically at pickup and is not included in the scope of the website)
- **Admin Interface:** A simple dashboard for the business owner to manage orders and update inventory.
- **Map Functionality:** Integrated Google Maps view for the store location.

### Nice to Have (Optional Extensions)
- Full online payment and shipping (future e-commerce integration).  
- Search and filtering for products (future enhancement).  
- Customer accounts or loyalty features (future enhancement).
- Several catogories of products (future enhancement).

## Data Requirements
- **Customers:** customer ID, name, email, phone number (optional). 
- **Products:** product ID, title, description, price, inventory, product image. 
- **Orders:** order ID, order date/time, order status, customer ID, products, quantities.

## User Stories

### Customer User Flows

#### Customer User Flow 1: Browsing and Selecting Products

**Objective:**  
Allow a Customer to visit the website front-end, explore available products with live stock and price information, and add/manage items in the shopping cart.

**Pages:** `/`, `/products`, `/products/:id`, `/cart`

**Flow Steps:**
1. **Home Page**
   - The customer lands on the home page where he/she can read about the company and navigates via a link button to the products page.
   - The cart icon in the header shows the number of items added.
   - A button labelled “Sigars and accessories" directs the user to the product page.

2. **Product Page**
   - Displays all products from the database with:
     - Product image
     - Name
     - Price
     - Stock quantity (“In stock: X”)
   - The customer can use “+” and “−” buttons to manage cart quantities.
   - Buttons for “Add to Cart” and “Go to Cart”

3. **Product Details Page**
   - Clicking a product opens a dedicated page with:
     - Larger image
     - Manual description entered by admin
 
4. **Cart Icon**
   - The cart icon links to the **Shopping Cart Page** where products are reviewed.

#### Customer User Flow 2: Reviewing Cart and Submitting Order (Click & Collect)

**Objective:**  
Allow a Customer to review selected products, adjust quantities, and send a click-and-collect order that is stored in the database and emailed to the shop.

**Pages:** `/cart`, `/checkout`, `/confirmation`

**Flow Steps:**
1. **Shopping Cart Page**
   - Shows product name, price, quantity selector, line subtotal, and total amount.
   - “Proceed to Checkout” opens the checkout page.

2. **Checkout Page**
   - Displays the order summary and collects:
       - Email (required)
       - Phone (optional)
   -  Clarifies that no online payment is required.
   - On “Send Order”, the system:
     1. Sends order details by email to the store.
     2. Saves the order in the database for admin access.
     3. Opens the Confirmation page where customer is issued a referencenumber (Order ID).
     4. Send Order Confirmation to the customer by e-mail.

3. **Confirmation Page**
   - Displays confirmation text, order details, and shows a link to return to homepage.

#### Customer User Flow 3: Navigation

**Objective:**
Display a small Google maps cutout to allow customer to click on it and open a new page on google maps showing the exact store location.

### Admin User Flows

#### Admin User Flow 1: Viewing Incoming Orders

**Objective:**  
Allow the Admin to log in and view all incoming customer orders.

**Pages:** `/login`, `/dashboard`, `/orders/:id`

**Flow Steps:**
1. **Login Page**
   - Admin enters username and password.
   - Successful login redirects to the dashboard.

2. **Dashboard Overview**
   - Displays two main sections:
     - *Order Management* (default), new incoming orders must be highlighted.
     - *Product Management*

3. **Order management**
   - Shows order ID, customer name, order date/time, products ordered, and order status (Received, Processed, Completed).
   - Orders sorted by most recent.
   - A function for deleting orders which have not been picked up.

4. **View Order Details**
   - Clicking an order opens a full detail page.
   - Admin will mark orders as "Processed" when order is ready for pick up.
   - Admin will mark orders as “Completed” when order has been picked up at the store, the system shall automatically update the stock quantity.

#### Admin User Flow 2: Adding and Managing Products

**Objective:**  
Allow the Admin to manually add or update product information and inventory levels.

**Pages:** `/dashboard`, `/manageproducts`, `/manageproducts/addnewproduct`

**Flow Steps:**
1. **Dashboard – Product Management**
   - Admin selects “ManageProducts” from the dashboard navigation.

2. **Product Management Page**
   - Lists existing products with:
     - Product ID 
     - Product Name
     - Product Description
     - Price
     - Stock quantity
     - Edit function
     - Archive function for obsolete products (removing products from inventory without deleting the products from the database)
   - Clicking “Add Product” opens a dedicated form page.

3. **Add New Product**
   - Fields:
     - Product ID
     - Product Name
     - Description (entered manually by admin)
     - Price
     - Stock Quantity
     - Image Upload
   -  Clicking "Save Product" saves the product in the database, and redirects back to the product list.

## Technical Constraints
- Fully responsive design for mobile/tablet/PC.
- Hosted securely over HTTPS.
- Backend must support authenticated admin login.

## Success Criteria
1. The website accurately displays inventory and stock levels.  
2. The business owner can manage products and orders.  
3. Customers can place click-and-collect orders wich are then stored in the database and sent by email to the store.  
4. The store location is displayed correctly on the map.  

## Technical Architecture

### Frontend
- Next.js  
- Tailwind CSS

### Backend
- Python  
- FastAPI  
- Supabase (database)

### Hosting
- Vercel

### Maps API
- Google Maps JavaScript API

## Development Timeline
- **Week 1:** Project setup, database schema, authentication  
- **Week 2:** Frontend layout and product listing pages  
- **Week 3:** Inventory and admin dashboard functionality  
- **Week 4:** Click-and-collect order system  
- **Week 5:** Map integration and responsive adjustments  
- **Week 6:** Testing, bug fixes, documentation, and deployment