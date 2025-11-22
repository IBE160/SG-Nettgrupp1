import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id, 1); // Add one item by default
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Origin: {product.land_of_origin}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
        <p className="mt-2 font-bold text-lg">${product.price}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock_quantity}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAddToCart} 
          disabled={product.stock_quantity === 0}
          className="w-full"
        >
          {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
