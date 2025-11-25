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
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
