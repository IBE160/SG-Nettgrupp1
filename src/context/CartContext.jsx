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
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      setCartItems(data.items || []); // Assuming the API returns { id: ..., items: [...] }
    } catch (error) {
      console.error('Error fetching cart items:', error);
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
      console.error(error);
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
      console.error(error);
    }
  };

  const value = {
    cartId,
    cartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
