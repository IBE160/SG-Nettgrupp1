import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';

function AdminProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArchived, setShowArchived] = useState(true); // Default to showing archived
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const { session } = useSupabaseAuth();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = session?.access_token;
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`/api/admin/products?includeArchived=${showArchived}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
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
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete product');
        }
        
        fetchProducts(); // Re-fetch products to update the list
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
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ is_archived: !currentIsArchived })
        });

        if (!response.ok) throw new Error('Network response was not ok');
        fetchProducts(); // Re-fetch products to update the list
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
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
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

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Product Management</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showArchived}
            onChange={() => setShowArchived(!showArchived)}
          />
          Show Archived Products
        </label>
        <button onClick={handleAddClick} style={{ float: 'right' }}>Add New Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock_quantity}</td>
              <td>{product.is_archived ? 'Archived' : 'Active'}</td>
              <td>
                <button onClick={() => handleEditClick(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button onClick={() => handleArchiveToggle(product.id, product.is_archived)}>
                  {product.is_archived ? 'Unarchive' : 'Archive'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
              <DialogHeader>
                  <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
              </DialogHeader>
              <ProductForm 
                product={editingProduct} 
                onSubmit={handleFormSubmit} 
                onCancel={handleDialogClose}
                loading={formLoading}
              />
          </DialogContent>
      </Dialog>
    </div>
  );
}

export default AdminProductManagementPage;
