import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';

function AdminProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArchived, setShowArchived] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const { session } = useSupabaseAuth();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = session?.access_token;
      if (!token) throw new Error('No authentication token found');
      const response = await fetch(`/api/admin/products?includeArchived=${showArchived}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }
      const { data } = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      fetchProducts();
    }
  }, [session, showArchived]);

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to permanently delete this product?')) {
      try {
        const token = session?.access_token;
        const response = await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete product');
        }
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        setError(error);
      }
    }
  };

  const handleArchiveToggle = async (productId, currentIsArchived) => {
    const action = currentIsArchived ? 'Unarchive' : 'Archive';
    if (window.confirm(`Are you sure you want to ${action} this product?`)) {
      try {
        const token = session?.access_token;
        const response = await fetch(`/api/products/${productId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ is_archived: !currentIsArchived })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        fetchProducts();
      } catch (error) {
        console.error('Error toggling archive status:', error);
        setError(error);
      }
    }
  };

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  const handleFormSubmit = async (productData) => {
    setFormLoading(true);
    const isEditing = !!editingProduct;
    const url = isEditing ? `/api/products/${editingProduct.id}` : '/api/products';
    const method = isEditing ? 'PUT' : 'POST';
    const payload = { ...productData };
    if (isEditing) {
      payload.is_archived = editingProduct.is_archived;
    }
    try {
      const token = session?.access_token;
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${isEditing ? 'update' : 'create'} product`);
      }
      handleDialogClose();
      fetchProducts();
    } catch (err) {
      console.error(`Failed to ${isEditing ? 'update' : 'create'} product:`, err);
      setError(err);
    } finally {
      setFormLoading(false);
    }
  };

  const actionButtonStyle = {
    minWidth: '80px',
    textAlign: 'center',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius)',
    border: '1px solid hsl(var(--border))',
    cursor: 'pointer',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))'
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Product Management</h2>
      
      {isDialogOpen && (
        <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h3>
          <ProductForm 
            product={editingProduct} 
            onSubmit={handleFormSubmit} 
            onCancel={handleDialogClose}
            loading={formLoading}
          />
        </div>
      )}

      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>
          <input
            type="checkbox"
            checked={showArchived}
            onChange={() => setShowArchived(!showArchived)}
            style={{ marginRight: '0.5rem' }}
          />
          Show Archived Products
        </label>
        {!isDialogOpen && (
          <button onClick={handleAddClick}>Add New Product</button>
        )}
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {products.map(product => {
          const cardStyle = {
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          };

          if (product.is_archived) {
            cardStyle.backgroundColor = 'hsl(var(--muted))';
            cardStyle.color = 'hsl(var(--muted-foreground))';
          }

          return (
            <div key={product.id} style={cardStyle}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{product.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                  <span><strong>Price:</strong> ${product.price}</span>
                  <span><strong>Stock:</strong> {product.stock_quantity}</span>
                  <span><strong>Status:</strong> {product.is_archived ? 'Archived' : 'Active'}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button onClick={() => handleEditClick(product)} style={actionButtonStyle}>Edit</button>
                <button onClick={() => handleDelete(product.id)} style={{...actionButtonStyle, color: 'hsl(var(--destructive))' }}>Delete</button>
                <button onClick={() => handleArchiveToggle(product.id, product.is_archived)} style={actionButtonStyle}>
                  {product.is_archived ? 'Unarchive' : 'Archive'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminProductManagementPage;
