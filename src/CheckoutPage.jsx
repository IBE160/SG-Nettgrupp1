import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';

function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartId, clearCart } = useCart();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!cartId) {
        setError('Your cart is empty or could not be found. Please try again.');
        return;
    }
    
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to place order.');
      }

      clearCart();
      navigate(`/confirmation/${data.orderReference}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    borderRadius: 'var(--radius)'
  };
  
  const inputStyle = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
  };

  return (
    <div style={pageContainerStyle}>
      <div style={cardStyle}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Checkout</h2>
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>Enter your details to place your click-and-collect order.</p>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Email <span style={{ color: 'hsl(var(--destructive))' }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                style={inputStyle}
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number (Optional)</label>
              <input
                id="phone"
                type="tel"
                style={inputStyle}
                placeholder="+1 (555) 555-5555"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            
            {error && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{error}</p>}
            
            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>
                <p><strong>Please Note:</strong> Payment will be handled in-store upon pickup.</p>
                <p style={{marginTop: '0.5rem'}}>You must be <strong style={{ fontWeight: 'bold' }}>18 or older</strong> to purchase and pick up tobacco products.</p>
            </div>

            <button type="submit" style={{...buttonStyle, opacity: isSubmitting ? 0.7 : 1}} disabled={isSubmitting}>
              {isSubmitting ? 'Placing Order...' : 'Place Click-and-Collect Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
