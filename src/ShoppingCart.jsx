import React from 'react';

function ShoppingCart({ cart, updateQuantity, removeFromCart }) {
  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong> - ${item.price}
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
    </div>
  );
}

export default ShoppingCart;
