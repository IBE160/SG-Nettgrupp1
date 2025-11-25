import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async (id) => {
    try {
      const response = await fetch(`/api/cart/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch cart items. Status: ${response.status}`);
      }
      const data = await response.json();
      setCartItems(data.items || []); // Assuming the API returns { id: ..., items: [...] }
    } catch (error) {
      console.error('[CartContext] Error in fetchCartItems:', error);
    }
  };

  useEffect(() => {
    // Load cartId from localStorage on initial render
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      setCartId(storedCartId);
      fetchCartItems(storedCartId); // Fetch cart items if cartId exists
    }
  }, []);

  const createCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to create cart');
      }
      const data = await response.json();
      setCartId(data.id);
      localStorage.setItem('cartId', data.id);
      // After creating a cart, immediately fetch its items (which should be empty initially)
      fetchCartItems(data.id);
      return data.id;
    } catch (error) {
      console.error('[CartContext] Error in createCart:', error);
    }
  };

  const addToCart = async (productId, quantity) => {
    let currentCartId = cartId;
    if (!currentCartId) {
      currentCartId = await createCart();
    }

    try {
      const response = await fetch(`/api/cart/${currentCartId}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add item to cart');
      }
      
      // After successfully adding an item, re-fetch the entire cart to ensure state is synchronized
      await fetchCartItems(currentCartId);
      
    } catch (error) {
      console.error('[CartContext] Error in addToCart:', error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (!cartId) return;

    try {
      const response = await fetch(`/api/cart/${cartId}/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update quantity');
      }

      await fetchCartItems(cartId);

    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!cartId) return;

    try {
      const response = await fetch(`/api/cart/${cartId}/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok && response.status !== 204) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to remove item');
      }

      await fetchCartItems(cartId);

    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const value = {
    cartId,
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
