import { supabase } from '../config/supabase.js';

// @desc    Create a new cart
// @route   POST /api/cart
export const createCart = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('carts')
      .insert({})
      .select('id')
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Supabase Error in createCart:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Add an item to a cart
// @route   POST /api/cart/:cartId/items
export const addCartItem = async (req, res) => {
  const { cartId } = req.params;
  const { productId, quantity } = req.body;

  // Input validation
  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ message: 'Invalid productId' });
  }
  if (!quantity || typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ message: 'Invalid quantity, must be a positive integer' });
  }

  try {
    // 1. Check product stock
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('stock_quantity')
      .eq('id', productId)
      .single();

    if (productError) throw productError;
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.stock_quantity < quantity) {
      return res.status(400).json({ message: 'Not enough stock' });
    }

    // 2. Check if item already exists in cart
    const { data: existingItem, error: existingItemError } = await supabase
      .from('cart_items')
      .select('*')
      .eq('cart_id', cartId)
      .eq('product_id', productId)
      .single();

    if (existingItemError && existingItemError.code !== 'PGRST116') { // PGRST116 = no rows found
        throw existingItemError;
    }

    let itemData;

    if (existingItem) {
      // 3a. Update quantity if item exists
      const newQuantity = existingItem.quantity + quantity;
      if (product.stock_quantity < newQuantity) {
        return res.status(400).json({ message: 'Not enough stock for updated quantity' });
      }
      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', existingItem.id)
        .select()
        .single();
      if (error) throw error;
      itemData = data;
    } else {
      // 3b. Insert new item if it doesn't exist
      const { data, error } = await supabase
        .from('cart_items')
        .insert({ cart_id: cartId, product_id: productId, quantity: quantity })
        .select()
        .single();
      if (error) throw error;
      itemData = data;
    }

    res.status(201).json(itemData);

  } catch (error) {
    console.error('Supabase Error in addCartItem:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get cart items by cart ID
// @route   GET /api/cart/:cartId
export const getCartItems = async (req, res) => {
  const { cartId } = req.params;

  try {
    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        *,
        products (
          id,
          name,
          description,
          price,
          image_url
        )
      `)
      .eq('cart_id', cartId);

    if (error) {
      throw error;
    }

    // Transform data to a more friendly format if needed, e.g., flattening product details
    const cartItems = data.map(item => ({
      id: item.id,
      productId: item.product_id,
      quantity: item.quantity,
      product: {
        id: item.products.id,
        name: item.products.name,
        description: item.products.description,
        price: item.products.price,
        imageUrl: item.products.image_url,
      },
    }));

    res.status(200).json({ id: cartId, items: cartItems });
  } catch (error) {
    console.error('Supabase Error in getCartItems:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update item quantity in a cart
// @route   PUT /api/cart/:cartId/items/:itemId
export const updateCartItem = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
    return res.status(400).json({ message: 'Invalid quantity, must be a non-negative integer' });
  }

  try {
    // If quantity is 0, delete the item
    if (quantity === 0) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);
      
      if (error) throw error;
      return res.status(204).send(); // 204 No Content
    }

    // Get product ID to check stock
    const { data: item, error: itemError } = await supabase
      .from('cart_items')
      .select('product_id')
      .eq('id', itemId)
      .single();

    if (itemError) throw itemError;
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    // Check product stock
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('stock_quantity')
      .eq('id', item.product_id)
      .single();
    
    if (productError) throw productError;
    if (product.stock_quantity < quantity) {
      return res.status(400).json({ message: 'Not enough stock' });
    }

    // Update item quantity
    const { data: updatedItem, error: updateError } = await supabase
      .from('cart_items')
      .update({ quantity: quantity })
      .eq('id', itemId)
      .select()
      .single();

    if (updateError) throw updateError;
    
    res.status(200).json(updatedItem);

  } catch (error) {
    console.error('Supabase Error in updateCartItem:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Remove an item from a cart
// @route   DELETE /api/cart/:cartId/items/:itemId
export const deleteCartItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', itemId);

    if (error) {
      // Handle case where item is not found vs. other errors if needed
      if (error.code === 'PGRST116') { // no rows found
        return res.status(404).json({ message: 'Cart item not found' });
      }
      throw error;
    }

    res.status(204).send(); // 204 No Content

  } catch (error) {
    console.error('Supabase Error in deleteCartItem:', error);
    res.status(400).json({ message: error.message });
  }
};