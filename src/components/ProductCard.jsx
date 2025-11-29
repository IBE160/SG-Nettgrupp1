import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity] = useState(1); // Default quantity to 1

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart(product.id, quantity);
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="flex flex-col flex-grow group">
        <div className="aspect-square relative bg-muted flex items-center justify-center overflow-hidden">
            {product.image_url ? (
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
              />
            ) : (
              <span className="text-muted-foreground italic">Product Image</span>
            )}
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-xl font-bold text-primary mt-2">{product.price} kr</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex flex-col gap-3">
          <p className={`text-sm ${product.stock_quantity > 0 ? 'text-muted-foreground' : 'text-destructive font-medium'}`}>
            {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of Stock'}
          </p>
          <Button 
            onClick={handleAddToCart} 
            disabled={product.stock_quantity === 0}
            className="w-full"
          >
            Add to Cart
          </Button>
      </CardFooter>
    </Card>
  );
}
