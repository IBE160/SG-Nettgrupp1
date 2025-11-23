-- Migration: Create the orders and order_items tables

CREATE TABLE orders (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    customer_email text NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    total_price decimal NOT NULL CHECK (total_price >= 0)
);

COMMENT ON TABLE orders IS 'Stores customer order information.';
COMMENT ON COLUMN orders.id IS 'Unique identifier for the order.';
COMMENT ON COLUMN orders.created_at IS 'Timestamp of when the order was placed.';
COMMENT ON COLUMN orders.customer_email IS 'Email of the customer who placed the order.';
COMMENT ON COLUMN orders.status IS 'Current status of the order (e.g., pending, prepared, completed).';
COMMENT ON COLUMN orders.total_price IS 'The total price of the order.';

CREATE TABLE order_items (
    id bigserial PRIMARY KEY,
    order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    quantity integer NOT NULL CHECK (quantity > 0),
    price decimal NOT NULL CHECK (price >= 0)
);

COMMENT ON TABLE order_items IS 'Stores the individual items within an order.';
COMMENT ON COLUMN order_items.id IS 'Unique identifier for the order item.';
COMMENT ON COLUMN order_items.order_id IS 'Foreign key to the orders table.';
COMMENT ON COLUMN order_items.product_id IS 'Foreign key to the products table.';
COMMENT ON COLUMN order_items.quantity IS 'Quantity of the product ordered.';
COMMENT ON COLUMN order_items.price IS 'The price of the product at the time of order.';

-- Enable Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies for orders
CREATE POLICY "Admins can manage all orders"
ON orders FOR ALL
TO authenticated
USING (true) -- Replace with a check for an admin role in a real app
WITH CHECK (true);

CREATE POLICY "Users can view their own orders"
ON orders FOR SELECT
TO authenticated
USING (auth.email() = customer_email);

-- Policies for order_items
CREATE POLICY "Admins can manage all order items"
ON order_items FOR ALL
TO authenticated
USING (true); -- Replace with a check for an admin role

CREATE POLICY "Users can view their own order items"
ON order_items FOR SELECT
TO authenticated
USING (exists(select 1 from orders where orders.id = order_id and orders.customer_email = auth.email()));
