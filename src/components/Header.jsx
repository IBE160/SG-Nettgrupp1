import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.jpg';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-card text-card-foreground shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Alta Sigar & Grill Logo" style={{ height: '40px' }} className="w-auto" />
          <span className="text-xl font-bold hidden sm:inline">Alta Sigar & Grill</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/products" className="text-lg font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
