import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductForm({ product, onSubmit, onCancel, loading }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setDescription(product.description || '');
      setPrice(product.price || '');
      setStockQuantity(product.stock_quantity || '');
    } else {
        // Reset form for 'Add'
        setName('');
        setDescription('');
        setPrice('');
        setStockQuantity('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price: parseFloat(price),
      stock_quantity: parseInt(stockQuantity, 10),
    };
    // If it's an edit, we pass the id
    if (product) {
        productData.id = product.id;
    }
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="col-span-3" 
            required 
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="col-span-3" 
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="col-span-3"
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input
            id="stock"
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="col-span-3"
            required
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
