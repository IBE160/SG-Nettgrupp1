import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SupabaseAuthProvider } from './lib/supabase-auth-provider';
import { CartProvider } from './context/CartContext';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SupabaseAuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SupabaseAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
