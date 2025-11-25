import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id, quantity);
    }
  };

  if (loading) {
    return <div className="container mx-auto text-center">Loading product details...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="container mx-auto text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{product.name}</CardTitle>
          <CardDescription>Origin: {product.land_of_origin} | Vitola: {product.vitola}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl">${product.price}</p>
            <p className="text-md text-gray-500">Stock: {product.stock_quantity}</p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={product.stock_quantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24"
            />
            <Button onClick={handleAddToCart} disabled={product.stock_quantity === 0 || quantity > product.stock_quantity}>
              {product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetailPage;
