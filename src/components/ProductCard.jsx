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

  return (
    <Card 
      className="relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
      style={{ flex: '0 1 400px', margin: '20px', textAlign: 'center' }}
    >
      <Link to={`/products/${product.id}`} className="flex-grow flex flex-col">
        <div className="relative">
          {/* Image Placeholder */}
          <div className="bg-muted h-64 w-full flex items-center justify-center">
            <span className="text-muted-foreground italic">
              {product.image_url ? 
                <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" /> : 
                'Product Image'
              }
            </span>
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
          <p className="mt-2 font-bold text-primary text-xl">${product.price}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of Stock'}
          </p>
          <Button 
            onClick={handleAddToCart} 
            disabled={product.stock_quantity === 0}
            style={{ width: '50%' }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
      </CardFooter>
    </Card>
  );
}
