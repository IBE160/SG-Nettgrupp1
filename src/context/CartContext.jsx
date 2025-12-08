import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    localStorage.removeItem('cartId');
    setCartId(null);
    setCartItems([]);
  };

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
      clearCart(); // If cart fetch fails (e.g., invalid ID), clear the cart
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
      setCartItems([]); // New cart is always empty
      return data.id;
    } catch (error) {
      console.error('[CartContext] Error in createCart:', error);
    }
  };

  const addToCart = async (productId, quantity) => {
    let currentCartId = cartId;
    if (!currentCartId) {
      currentCartId = await createCart();
      if (!currentCartId) {
        console.error("Failed to create cart, cannot add item.");
        return; 
      }
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
      
      await fetchCartItems(currentCartId);
      
    } catch (error) {
      console.error('[CartContext] Error in addToCart:', error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (!cartId) return;
    
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

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
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
