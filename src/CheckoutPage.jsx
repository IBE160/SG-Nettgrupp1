import React, { useState } from 'react';

function CheckoutPage({ cart }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Order submitted:', { customerInfo, cart });
    alert('Thank you for your order!');
    // Here you would typically clear the cart and redirect the user
  };

  const calculateTotal = () => {
    if (!cart) return 0;
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        {cart && cart.length > 0 ? (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <strong>Total: ${calculateTotal()}</strong>
      </div>
      <hr />
      <div>
        <h3>Customer Information</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={customerInfo.address} onChange={handleInputChange} required />
          </div>
          <button type="submit" disabled={!cart || cart.length === 0}>Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
