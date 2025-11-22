import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      {/* Add more product details here as needed */}
    </div>
  );
}

export default ProductDetailPage;
