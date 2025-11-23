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
