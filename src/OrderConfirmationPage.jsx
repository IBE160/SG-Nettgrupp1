import React from 'react';
import { Link, useParams } from 'react-router-dom';

function OrderConfirmationPage() {
  const { orderRef } = useParams();

  const pageContainerStyle = {
    maxWidth: '1280px', 
    margin: '0 auto', 
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center'
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '448px',
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    textAlign: 'center'
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius)',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '1.5rem'
  };

  const orderRefStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: 'hsl(var(--secondary))',
    color: 'hsl(var(--secondary-foreground))',
    borderRadius: 'var(--radius)',
    padding: '1rem',
    margin: '1rem 0'
  };

  return (
    <div style={pageContainerStyle}>
      <div style={cardStyle}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Thank You For Your Order!</h2>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Your order has been placed successfully.</p>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <p>Your order reference number is:</p>
          <p style={orderRefStyle}>{orderRef}</p>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '1rem' }}>
            You will receive an email confirmation shortly (this feature is pending). Please keep this reference number for your records.
          </p>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '1rem' }}>
            We will notify you again once your order is ready for pickup.
          </p>
          <Link to="/products" style={buttonStyle}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;