import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products', { cache: 'no-store' });
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
    return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>Loading products...</div>;
  }

  if (error) {
    return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>Error: {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Product Catalog</h1>
        <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Browse our hand-picked selection of premium cigars.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
