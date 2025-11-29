import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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

  if (loading) {
    return <div className="container mx-auto py-10 text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-10 text-center text-destructive">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Product Management</h2>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
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

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="showArchived" 
            checked={showArchived} 
            onCheckedChange={(checked) => setShowArchived(checked)} 
          />
          <label
            htmlFor="showArchived"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show Archived Products
          </label>
        </div>
        <Button onClick={handleAddClick}>Add New Product</Button>
      </div>
      
      <div className="grid gap-4">
        {products.map(product => (
            <Card 
                key={product.id} 
                className={`${product.is_archived ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-card'}`}
            >
              <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                        {product.is_archived && (
                            <span className="inline-flex items-center rounded-full border border-slate-600 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-slate-200">
                                Archived
                            </span>
                        )}
                    </div>
                  <p className={`text-sm mb-2 ${product.is_archived ? 'text-slate-400' : 'text-muted-foreground'}`}>
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <span><span className="font-semibold">Price:</span> ${product.price}</span>
                    <span><span className="font-semibold">Stock:</span> {product.stock_quantity}</span>
                    <span>
                        <span className="font-semibold">Status:</span> 
                        <span className={product.is_archived ? 'text-slate-400 ml-1' : 'text-green-600 ml-1'}>
                            {product.is_archived ? 'Archived' : 'Active'}
                        </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                  <Button variant={product.is_archived ? "secondary" : "outline"} size="sm" onClick={() => handleEditClick(product)}>Edit</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
                  <Button 
                    variant={product.is_archived ? "secondary" : "outline"} 
                    size="sm" 
                    onClick={() => handleArchiveToggle(product.id, product.is_archived)}
                    className={product.is_archived ? "hover:bg-slate-700" : ""}
                  >
                    {product.is_archived ? 'Unarchive' : 'Archive'}
                  </Button>
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminProductManagementPage;
