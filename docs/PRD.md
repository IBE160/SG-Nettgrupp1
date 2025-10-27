# Product Requirements Document (PRD)
## Project: Alta Sigar & Grill – Click & Collect MVP
**Course:** IBE160 – Programming with AI  
**Methodology:** BMAD (Brainstorm → Model → Architect → Deliver)

---

## 1. Product Overview
Alta Sigar & Grill is a specialty retailer offering premium cigars, cigar accessories, and BBQ equipment.  
The goal of this MVP is to create a simple, reliable website that allows customers to view available products with live stock levels and send click-and-collect orders to the store.

---

## 2. Objectives
- Enable customers to view updated product listings with price and stock.
- Allow customers to send click-and-collect orders directly to the store.
- Provide an admin dashboard where the store owner can view orders and update inventory.
- Establish a clean, scalable architecture (Next.js + FastAPI + Supabase).

---

## 3. Personas
**Customer:**  
A cigar and BBQ enthusiast who wants to browse products, see prices, and order items for in-store pickup.

**Admin (Business Owner):**  
Manages the store, wants to update product information manually and view incoming orders in one place.

---

## 4. Key Features (MVP)
### Customer side
- View all products with images, descriptions, price, and stock count.
- Add/remove items in a shopping cart using + and – buttons.
- Proceed to checkout, submit order with email (required) and phone number (optional).
- Order confirmation shown on screen; order sent to store email and saved in database.

### Admin side
- Login page for owner.
- Dashboard with two sections:
  1. **Incoming Orders:** shows ID, customer info, order date/time, and status.  
  2. **Product Management:** view, add, edit, or delete products.
- Manual product entry (name, description, price, stock, image, category).

---

## 5. Data Model
### Products
| Field | Type | Description |
|--------|------|--------------|
| id | int | Primary key |
| name | text | Product name |
| description | text | Product description |
| price | numeric | Product price |
| stock | int | Quantity available |
| category | text | e.g. cigars, BBQ |
| image_url | text | Product image link |
| created_at | timestamp | Auto |

### Orders
| Field | Type | Description |
|--------|------|-------------|
| id | int | Primary key |
| customer_email | text | Required for confirmation |
| customer_phone | text | Optional |
| items_json | json | List of products and quantities |
| total_amount | numeric | Total price |
| status | text | e.g. pending, processed |
| created_at | timestamp | Auto |

---

## 6. API Requirements
| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/products` | GET | Retrieve all products |
| `/api/products/:id` | GET | Retrieve single product |
| `/api/orders` | POST | Submit new order (stores + emails) |
| `/api/orders` | GET | Admin: view all orders |
| `/api/orders/:id` | PATCH | Update order status |
| `/api/products` | POST | Admin: add new product |
| `/api/products/:id` | PATCH | Admin: update product details |

---

## 7. User Flows
### Customer
1. Visit home page → click “Shop Now”.  
2. Browse product list.  
3. Click product → view details → add to cart.  
4. Open cart (icon top right) → adjust quantities.  
5. Proceed to checkout → fill in email (required) and phone (optional).  
6. Confirm order → see confirmation page.

### Admin
1. Login → open dashboard.  
2. View new orders and mark as processed.  
3. Switch to “Products” tab → add or edit products manually.  
4. Logout.

---

## 8. Non-Goals (not in MVP)
- AI-generated descriptions.  
- Newsletters or user accounts.  
- Search/filtering system.  
- Online payment gateway.

---

## 9. Acceptance Criteria
- Products display correctly with accurate stock and price.  
- Cart and checkout logic function properly.  
- Orders appear in database and are emailed to the store.  
- Admin can log in and manage products and orders without error.  
- Site responsive on desktop and mobile.

---

## 10. Technical Stack
- **Frontend:** Next.js + Tailwind CSS  
- **Backend:** FastAPI (Python)  
- **Database:** Supabase  
- **Hosting:** Vercel  
- **Map Integration:** Google Maps JavaScript API  
- **Version Control:** GitHub (branch feature-kimove)

---

## 11. Risks & Mitigation
| Risk | Description | Mitigation |
|-------|--------------|-------------|
| Email delivery | Orders may fail to send | Use secure SMTP or Supabase function |
| Auth errors | Weak admin login | Add simple JWT or session auth |
| Stock desync | Manual update errors | Add simple validation when updating stock |

---

## 12. Success Metrics
- Time to complete order (under 2 minutes).  
- Admin can process orders without technical help.  
- Zero database errors after 50 test orders.  
- Deployment live on Vercel without crashes.

---

## 13. Future Improvements
- AI text generation for new product descriptions.  
- Search and category filtering.  
- Online payment integration.  
- Customer accounts and loyalty points.

---

*Prepared by:* **Kim-Ove Hagerup (feature-kimove branch)**  
*Date:* Auto-generated by Gemini CLI