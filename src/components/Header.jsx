import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';
import logo from '../assets/logo.jpg';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const { cartItems } = useCart();
  const { session, signOut } = useSupabaseAuth();
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const linkStyle = { margin: '0 12px' };

  return (
    <header className="bg-secondary text-secondary-foreground shadow-md py-4">
      <nav className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="Alta Sigar & Grill Logo" style={{ height: '300px', width: '300px', marginBottom: '20px' }} />
        </div>
        <div className="flex items-center text-lg font-medium mt-4">
          <Link to="/" style={linkStyle} className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" style={linkStyle} className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/cart" style={linkStyle} className="hover:text-primary transition-colors">
            Cart {totalItems > 0 && <span>({totalItems})</span>}
          </Link>
          {session ? (
            <>
              <Link to="/admin/products" style={linkStyle} className="hover:text-primary transition-colors">
                Admin: Products
              </Link>
              <Link to="/admin/orders" style={linkStyle} className="hover:text-primary transition-colors">
                Admin: Orders
              </Link>
              <button onClick={handleSignOut} style={linkStyle} className="hover:text-primary transition-colors">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={linkStyle} className="hover:text-primary transition-colors">
              Admin
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
