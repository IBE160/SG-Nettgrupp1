CREATE OR REPLACE FUNCTION cancel_order_and_restock(p_order_id uuid)
RETURNS SETOF orders AS $$
DECLARE
  order_item_record RECORD;
BEGIN
  -- Update order status to 'Cancelled'
  UPDATE orders
  SET status = 'Cancelled'
  WHERE id = p_order_id;

  -- Loop through order items and restock products
  FOR order_item_record IN
    SELECT product_id, quantity FROM order_items WHERE order_id = p_order_id
  LOOP
    UPDATE products
    SET stock_quantity = stock_quantity + order_item_record.quantity
    WHERE id = order_item_record.product_id;
  END LOOP;

  -- Return the updated order
  RETURN QUERY SELECT * FROM orders WHERE id = p_order_id;
END;
$$ LANGUAGE plpgsql;
