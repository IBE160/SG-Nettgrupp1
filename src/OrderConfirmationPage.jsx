import React from 'react';

function OrderConfirmationPage() {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Your order has been placed successfully.</p>
      <p>You will receive an email confirmation shortly with your order details.</p>
      {/* Optionally display order details passed via state or query params */}
    </div>
  );
}

export default OrderConfirmationPage;
