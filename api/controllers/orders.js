import { supabase } from '../config/supabase.js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// @desc    Get order by ID
// @route   GET /api/orders/:id
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Order not found' });
      }
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in getOrderById:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      // Check for a not-found error specifically
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Order not found' });
      }
      throw error;
    }

    if (status === 'Prepared') {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: data.customer_email,
          subject: `Your order is ready for pickup`,
          text: `Your order with reference number ${id} is now ready for pickup.`,
        });
        console.log(`Pickup notification sent to ${data.customer_email}`);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Decide if you want to fail the whole request if email fails
        // For now, just log it and continue
      }
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in updateOrderStatus:', error);
    res.status(400).json({ message: error.message });
  }
};
