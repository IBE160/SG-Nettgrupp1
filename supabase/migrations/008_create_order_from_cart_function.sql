-- Migration: Add reference_number and phone to orders table, and create the create_order_from_cart function

-- 1. Add new columns to the orders table
ALTER TABLE public.orders
ADD COLUMN reference_number text,
ADD COLUMN customer_phone text;

-- Generate a unique, human-readable reference number before insert
CREATE OR REPLACE FUNCTION generate_reference_number()
RETURNS TRIGGER AS $$
BEGIN
  -- Generate a random 8-character uppercase alphanumeric string
  NEW.reference_number := (
    SELECT string_agg(substr('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', floor(random() * 36 + 1)::int, 1), '')
    FROM generate_series(1, 8)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_reference_number
BEFORE INSERT ON public.orders
FOR EACH ROW
EXECUTE FUNCTION generate_reference_number();


-- 2. Create the transactional function to create an order from a cart
CREATE OR REPLACE FUNCTION create_order_from_cart(
  p_cart_id uuid,
  p_customer_email text,
  p_customer_phone text
)
RETURNS TABLE(order_id uuid, order_ref text)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_order_id uuid;
  new_order_ref text;
  cart_total decimal;
BEGIN
  -- Calculate total price from cart items
  SELECT SUM(ci.quantity * p.price)
  INTO cart_total
  FROM cart_items ci
  JOIN products p ON ci.product_id = p.id
  WHERE ci.cart_id = p_cart_id;

  -- Step 1: Create a new order
  INSERT INTO public.orders (customer_email, customer_phone, total_price)
  VALUES (p_customer_email, p_customer_phone, cart_total)
  RETURNING id, reference_number INTO new_order_id, new_order_ref;

  -- Step 2: Copy items from cart_items to order_items
  INSERT INTO public.order_items (order_id, product_id, quantity, price)
  SELECT
    new_order_id,
    ci.product_id,
    ci.quantity,
    p.price -- Use the current product price
  FROM cart_items ci
  JOIN products p ON ci.product_id = p.id
  WHERE ci.cart_id = p_cart_id;

  -- Step 3: Decrement stock quantity for each product
  UPDATE public.products p
  SET stock_quantity = p.stock_quantity - ci.quantity
  FROM cart_items ci
  WHERE ci.cart_id = p_cart_id AND p.id = ci.product_id;

  -- Step 4: Delete the original cart
  DELETE FROM public.carts WHERE id = p_cart_id;

  -- Step 5: Return the new order's ID and reference number
  RETURN QUERY SELECT new_order_id, new_order_ref;
END;
$$;
