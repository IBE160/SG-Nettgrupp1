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
          throw new Error('Nettverksrespons var ikke ok');
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
    return <div className="max-w-7xl mx-auto px-4 py-8 text-center">Laster produkter...</div>;
  }

  if (error) {
    return <div className="max-w-7xl mx-auto px-4 py-8 text-center text-destructive">Feil: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Produktkatalog</h1>
        <p className="text-lg text-muted-foreground mt-2">Utforsk vårt håndplukkede utvalg av premiumsigarer.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
