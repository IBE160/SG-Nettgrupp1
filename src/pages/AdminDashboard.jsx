import { useEffect, useState } from 'react';
import { useSupabaseAuth } from '@/lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import ProductForm from '@/components/ProductForm';

// --- API Service Functions ---

const getAuthHeader = (session) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${session.access_token}`,
});

const fetchProducts = async () => {
  const response = await fetch('/api/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  const result = await response.json();
  return result.data;
};

const addProduct = async (product, session) => {
    const response = await fetch('/api/products', {
        method: 'POST',
        headers: getAuthHeader(session),
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to add product: ${errorBody.message}`);
    }
    return await response.json();
};

const editProduct = async (product, session) => {
    const response = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: getAuthHeader(session),
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to edit product: ${errorBody.message}`);
    }
    return await response.json();
};

const updateStock = async (productId, stock_quantity, session) => {
    const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: getAuthHeader(session),
        body: JSON.stringify({ stock_quantity }),
    });
    if (!response.ok) throw new Error('Failed to update stock');
    return await response.json();
};


// --- Component ---

export default function AdminDashboard() {
  const { signOut, session } = useSupabaseAuth();
  const [products, setProducts] = useState([]);
  const [stockValues, setStockValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setApiError(null);
      const productData = await fetchProducts();
      setProducts(productData);
      // Initialize stockValues state
      const initialStockValues = productData.reduce((acc, product) => {
        acc[product.id] = product.stock_quantity;
        return acc;
      }, {});
      setStockValues(initialStockValues);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOpenDialog = (product = null) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (productData) => {
    setFormLoading(true);
    setApiError(null);
    try {
      if (editingProduct) {
        await editProduct(productData, session);
      } else {
        await addProduct(productData, session);
      }
      handleCloseDialog();
      await loadProducts(); // Refresh the list
    } catch (err) {
      console.error('handleSubmit error:', err);
      setApiError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleStockChange = (productId, value) => {
    setStockValues(prev => ({ ...prev, [productId]: value }));
  };

  const handleStockUpdate = async (productId) => {
    const originalProduct = products.find(p => p.id === productId);
    const newStockString = stockValues[productId];
    const newStock = parseInt(newStockString, 10);

    if (isNaN(newStock) || newStock < 0) {
      setApiError('Invalid stock value. Please enter a non-negative number.');
      // Revert the input to the original value
      setStockValues(prev => ({ ...prev, [productId]: originalProduct.stock_quantity }));
      return;
    }

    if (newStock === originalProduct.stock_quantity) {
        return; // No change
    }

    try {
        setApiError(null);
        const updatedProduct = await updateStock(productId, newStock, session);
        // Update local state for a seamless feel
        setProducts(prevProducts =>
            prevProducts.map(p => p.id === productId ? updatedProduct : p)
        );
    } catch (err) {
        setApiError(err.message);
        // Revert on failure
        setStockValues(prev => ({ ...prev, [productId]: originalProduct.stock_quantity }));
    }
  };


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={signOut} variant="outline">Sign Out</Button>
      </div>
      
      <div className="mb-4">
        <Button onClick={() => handleOpenDialog()}>Add New Product</Button>
      </div>

      {apiError && <p className="text-red-500 mb-4">Error: {apiError}</p>}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-[150px]">Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan="4" className="text-center">Loading...</TableCell></TableRow>
            ) : products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={stockValues[product.id] ?? ''}
                      onChange={(e) => handleStockChange(product.id, e.target.value)}
                      onBlur={() => handleStockUpdate(product.id)}
                      className="w-24"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleOpenDialog(product)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan="4" className="text-center">No products found.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
          </DialogHeader>
          <ProductForm
            product={editingProduct}
            onSubmit={handleSubmit}
            onCancel={handleCloseDialog}
            loading={formLoading}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
