import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart(product.id, quantity);
  };

  const cardStyle = {
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const imagePlaceholderStyle = {
    backgroundColor: 'hsl(var(--muted))',
    height: '16rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'hsl(var(--muted-foreground))',
    fontStyle: 'italic',
  };

  const imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <Link to={`/products/${product.id}`} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative' }}>
          <div style={imagePlaceholderStyle}>
            <span>
              {product.image_url ? 
                <img src={product.image_url} alt={product.name} style={imageStyle} /> : 
                'Product Image'
              }
            </span>
          </div>
        </div>
        <div style={{ padding: '1rem', flexGrow: 1 }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{product.name}</h3>
          <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'hsl(var(--primary))', fontSize: '1.25rem' }}>${product.price}</p>
        </div>
      </Link>
      <div style={{ padding: '1rem', paddingTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
            {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of Stock'}
          </p>
          <button 
            onClick={handleAddToCart} 
            disabled={product.stock_quantity === 0}
            style={{ width: '80%', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', opacity: product.stock_quantity === 0 ? 0.5 : 1 }}
          >
            Add to Cart
          </button>
      </div>
    </div>
  );
}
