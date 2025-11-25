import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

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
    return <div className="container mx-auto text-center py-20">Loading product details...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center py-20">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="container mx-auto text-center py-20">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Image */}
        <div className="w-full">
          <Card>
            {product.image_url ? (
              <img src={product.image_url} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
            ) : (
              <div className="w-full h-[400px] bg-muted flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground">No Image Available</span>
              </div>
            )}
          </Card>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">${product.price}</p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
          
          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Origin</p>
              <p className="text-lg">{product.land_of_origin}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Vitola</p>
              <p className="text-lg">{product.vitola}</p>
            </div>
          </div>
          
          <Separator />

          <Card className="bg-background/50 border shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm">
                  <span className="font-medium">Availability:</span> 
                  <span className={product.stock_quantity > 10 ? 'text-green-600' : (product.stock_quantity > 0 ? 'text-orange-500' : 'text-destructive')}>
                    {product.stock_quantity > 0 ? ` ${product.stock_quantity} in Stock` : ' Out of Stock'}
                    {product.stock_quantity > 0 && product.stock_quantity <= 10 && ' (Low Stock)'}
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <Label htmlFor="quantity" className="text-sm font-medium">Quantity</Label>
                  <Input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max={product.stock_quantity}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-24"
                    disabled={product.stock_quantity === 0}
                  />
                </div>
                <Button 
                    onClick={handleAddToCart} 
                    disabled={product.stock_quantity === 0 || quantity > product.stock_quantity || quantity < 1}
                    size="lg"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
