import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius)',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const pageContainerStyle = {
    maxWidth: '1280px', 
    margin: '0 auto', 
    padding: '2rem 1rem'
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div style={{...pageContainerStyle, textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Shopping Cart</h2>
        <p style={{ marginBottom: '1.5rem' }}>Your cart is empty.</p>
        <Link to="/products" style={buttonStyle}>Continue Shopping</Link>
      </div>
    );
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={pageContainerStyle}>
      <div style={{ border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Shopping Cart</h2>
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>Review and manage the items in your cart.</p>
        </div>
        <div style={{ padding: '1.5rem', paddingTop: 0 }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Product</th>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Price</th>
                <th style={{ textAlign: 'center', padding: '0.75rem' }}>Quantity</th>
                <th style={{ textAlign: 'right', padding: '0.75rem' }}>Total</th>
                <th style={{ textAlign: 'right', padding: '0.75rem' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                  <td style={{ padding: '0.75rem' }}>{item.product.name}</td>
                  <td style={{ padding: '0.75rem' }}>${item.product.price}</td>
                  <td style={{ textAlign: 'center', padding: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <button style={{ padding: '0.25rem 0.5rem' }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button style={{ padding: '0.25rem 0.5rem' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right', padding: '0.75rem' }}>${(item.product.price * item.quantity).toFixed(2)}</td>
                  <td style={{ textAlign: 'right', padding: '0.75rem' }}>
                    <button style={{ padding: '0.25rem 0.5rem', color: 'hsl(var(--destructive))' }} onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'hsl(var(--muted))' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Total: ${calculateTotal()}
          </div>
          <Link to="/checkout" style={{...buttonStyle, fontSize: '1.125rem' }}>Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
