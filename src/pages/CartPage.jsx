import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products">Continue Shopping</Link>
      </div>
    );
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.product.name}</strong> - ${item.product.price}
            </div>
            <div>
              Quantity: {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default CartPage;
