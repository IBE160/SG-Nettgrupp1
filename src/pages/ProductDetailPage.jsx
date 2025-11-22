import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product.id, 1);
  };

  if (loading) return <div className="text-center p-4">Loading product...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center p-4">Product not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>Origin: {product.land_of_origin} | Vitola: {product.vitola}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <p className="mt-4 font-bold text-2xl">${product.price}</p>
          <p className="text-md text-gray-500">Stock: {product.stock_quantity}</p>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleAddToCart} 
            disabled={product.stock_quantity === 0}
            size="lg"
          >
            {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
