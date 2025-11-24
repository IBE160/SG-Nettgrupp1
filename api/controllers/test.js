import { supabase } from '../config/supabase.js';

export const createTestOrder = async (req, res) => {
  const { customer_email, items } = req.body;

  if (!customer_email || !items || items.length === 0) {
    return res.status(400).json({ message: 'Missing customer_email or items in request body.' });
  }

  try {
    // Start a transaction (Supabase client doesn't support direct transactions in client-side JS,
    // so we simulate or rely on database-level transaction if using RPC/functions)
    // For direct inserts, we'll handle potential rollbacks manually if an error occurs mid-way.

    // 1. Create the order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({ customer_email, status: 'pending', reference_number: `TEST-${Date.now()}` })
      .select('id')
      .single();

    if (orderError) {
      throw orderError;
    }

    const orderId = orderData.id;

    // 2. Add order items and decrement product stock
    const orderItemsToInsert = [];
    for (const item of items) {
      const { product_id, quantity } = item;

      // Fetch product to ensure existence and sufficient stock
      const { data: product, error: productFetchError } = await supabase
        .from('products')
        .select('stock_quantity')
        .eq('id', product_id)
        .single();

      if (productFetchError) throw productFetchError;
      if (!product) {
        // Rollback order creation if product not found
        await supabase.from('orders').delete().eq('id', orderId);
        return res.status(404).json({ message: `Product with ID ${product_id} not found.` });
      }
      if (product.stock_quantity < quantity) {
        // Rollback order creation if insufficient stock
        await supabase.from('orders').delete().eq('id', orderId);
        return res.status(400).json({ message: `Insufficient stock for product ${product_id}.` });
      }

      // Decrement stock
      const { error: stockUpdateError } = await supabase
        .from('products')
        .update({ stock_quantity: product.stock_quantity - quantity })
        .eq('id', product_id);

      if (stockUpdateError) throw stockUpdateError;

      orderItemsToInsert.push({ order_id: orderId, product_id, quantity });
    }

    const { error: orderItemsError } = await supabase
      .from('order_items')
      .insert(orderItemsToInsert);

    if (orderItemsError) {
      // Manual rollback: Delete order if order items failed to insert
      await supabase.from('orders').delete().eq('id', orderId);
      throw orderItemsError;
    }

    // Fetch the complete order for the response
    const { data: newOrder, error: fetchError } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (
            name,
            price
          )
        )
      `)
      .eq('id', orderId)
      .single();

    if (fetchError) {
      throw fetchError;
    }

    res.status(201).json(newOrder);

  } catch (error) {
    console.error('Error creating test order:', error);
    res.status(500).json({ message: error.message || 'Server Error' });
  }
};

export const deleteTestOrder = async (req, res) => {
    const { id } = req.params;

    try {
        // Delete order items first due to foreign key constraints
        const { error: deleteItemsError } = await supabase
            .from('order_items')
            .delete()
            .eq('order_id', id);

        if (deleteItemsError) throw deleteItemsError;

        const { error: deleteOrderError } = await supabase
            .from('orders')
            .delete()
            .eq('id', id);

        if (deleteOrderError) throw deleteOrderError;

        res.status(200).json({ message: `Order ${id} and its items deleted successfully.` });
    } catch (error) {
        console.error('Error deleting test order:', error);
        res.status(500).json({ message: error.message || 'Server Error' });
    }
}
