import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { data } = await response.json(); // Destructure data from response
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mx-auto text-center py-20">Loading products...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center py-20">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Product Catalog</h1>
        <p className="text-lg text-muted-foreground mt-2">Browse our hand-picked selection of premium cigars.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
