import { supabase } from '../config/supabase.js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// @desc    Create a new order from a cart
// @route   POST /api/orders
// @access  Public
export const createOrder = async (req, res) => {
    const { cartId, email, phone } = req.body;

    if (!cartId || !email) {
        return res.status(400).json({ message: 'Cart ID and email are required' });
    }

    try {
        // 1. Call the transactional database function
        const { data, error } = await supabase.rpc('create_order_from_cart', {
            p_cart_id: cartId,
            p_customer_email: email,
            p_customer_phone: phone,
        }).single();

        if (error) {
            console.error('Error in create_order_from_cart RPC:', error);
            // Check for specific error messages from the function if any are defined
            if (error.message.includes('Not enough stock')) {
                return res.status(400).json({ message: 'Order could not be placed due to insufficient stock.' });
            }
            throw error;
        }

        const { order_id, order_ref } = data;

        // 2. Send email notification to store owner
        try {
            await resend.emails.send({
                from: 'onboarding@resend.dev', // Must be a verified domain in Resend
                to: process.env.STORE_OWNER_EMAIL,
                subject: `New Order Received: ${order_ref}`,
                text: `A new order has been placed.\n\nOrder Reference: ${order_ref}\nCustomer Email: ${email}\n\nPlease check the admin dashboard for details.`,
            });
        } catch (emailError) {
            // If email fails, just log it but don't fail the entire transaction
            console.error('Failed to send new order notification email:', emailError);
        }

        // 3. Return the order reference to the client
        res.status(201).json({ orderReference: order_ref, orderId: order_id });

    } catch (error) {
        console.error('Supabase Error in createOrder:', error);
        res.status(500).json({ message: 'Failed to create order.' });
    }
};


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
      if (rpcError) throw rpcError;
      data = rpcData;
    } else {
      // Standard update for other statuses like 'prepared'
      const { data: updateData, error: updateError } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', id)
        .select()
        .single();
      if (updateError) throw updateError;
      data = updateData;
    }

    if (!data) {
      return res.status(404).json({ message: `Order with ID ${id} not found.` });
    }
    
    // Send email notification if status is 'Prepared'
    if (status === 'Prepared' && data.customer_email) {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: data.customer_email,
          subject: `Your order is ready for pickup`,
          text: `Your order with reference number ${data.reference_number} is now ready for pickup.`,
        });
        console.log(`Pickup notification sent to ${data.customer_email}`);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Do not fail the request if email fails, just log it.
      }
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

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Private (Admin)
export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const { error } = await supabase
            .from('orders')
            .delete()
            .eq('id', id);

        if (error) {
            // Handle case where item is not found vs. other errors
            if (error.code === 'PGRST116') { // no rows found
                return res.status(404).json({ message: 'Order not found' });
            }
            throw error;
        }

        res.status(204).send(); // 204 No Content for successful deletion

    } catch (error) {
        console.error(`Error deleting order ${id}:`, error);
        res.status(500).json({ message: 'Server Error' });
    }
};
