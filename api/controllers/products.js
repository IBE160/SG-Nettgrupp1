import { supabase } from '../config/supabase.js';

// @desc    Create a new product
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([req.body])
      .select()
      .single(); // .single() to get the object directly

    if (error) {
      throw error;
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Supabase Error in createProduct:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      throw error;
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error('Supabase Error in getAllProducts:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get a single product by ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in getProductById:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Only allow updating specific fields
    const { name, description, price, stock_quantity } = req.body;
    const updateData = { name, description, price, stock_quantity };

    const { data, error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      // Check for a not-found error specifically
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Product not found' });
      }
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in updateProduct:', error);
    res.status(400).json({ message: error.message });
  }
};

