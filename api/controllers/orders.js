import { supabase } from '../config/supabase.js';

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const { data, error } = await supabase
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
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ message: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Server error in getAllOrders:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single order by ID
// @route   GET /api/orders/:id
// @access  Private (Admin)
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
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
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // No rows found
        return res.status(404).json({ message: `Order with ID ${id} not found` });
      }
      console.error('Error fetching order by ID:', error);
      return res.status(500).json({ message: error.message });
    }

    if (!data) {
      return res.status(404).json({ message: `Order with ID ${id} not found` });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Server error in getOrderById:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id
// @access  Private (Admin)
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    let data;
    let error;

    if (status === 'Cancelled') {
      // Use an RPC call for transactional update
      const { data: rpcData, error: rpcError } = await supabase.rpc('cancel_order_and_restock', {
        p_order_id: id,
      });

      if (rpcError) {
        throw rpcError;
      }
      
      data = rpcData;

    } else {
      // Standard update for other statuses like 'prepared'
      const { data: updateData, error: updateError } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', id)
        .select()
        .single();
      
      if (updateError) {
        throw updateError;
      }
      data = updateData;
    }

    if (!data) {
      return res.status(404).json({ message: `Order with ID ${id} not found.` });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(`Error updating order ${id}:`, error);
    if (error.code === 'PGRST116') {
      return res.status(404).json({ message: `Order with ID ${id} not found` });
    }
    res.status(500).json({ message: 'Server Error' });
  }
};
