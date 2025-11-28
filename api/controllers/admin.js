// Controller for admin-specific data fetching

// @desc    Get all products for admin view (includes archived)
// @route   GET /api/admin/products
export const getAllAdminProducts = async (req, res) => {
  try {
    const { includeArchived } = req.query;
    let query = req.supabase
      .from('products')
      .select('*');

    // The admin page can choose to show all or only active,
    // but the default should be to show all, including archived.
    // This logic can be simplified, but for now, we'll keep the param for consistency.
    if (includeArchived === 'false') {
      query = query.eq('is_archived', false);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error('Supabase Error in getAllAdminProducts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
