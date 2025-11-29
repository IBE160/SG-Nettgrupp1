import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductForm({ product, onSubmit, onCancel, loading }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [landOfOrigin, setLandOfOrigin] = useState('');
  const [vitola, setVitola] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setDescription(product.description || '');
      setPrice(product.price || '');
      setStockQuantity(product.stock_quantity || '');
      setLandOfOrigin(product.land_of_origin || '');
      setVitola(product.vitola || '');
    } else {
        // Reset form for 'Add'
        setName('');
        setDescription('');
        setPrice('');
        setStockQuantity('');
        setLandOfOrigin('');
        setVitola('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price: parseFloat(price),
      stock_quantity: parseInt(stockQuantity, 10),
      land_of_origin: landOfOrigin,
      vitola: vitola,
    };
    // If it's an edit, we pass the id
    if (product) {
        productData.id = product.id;
    }
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '448px', margin: '0 auto' }}>
      <div className="py-4">
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="name">
            Name
          </Label>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="description">
            Description
          </Label>
          <Input 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="price">
            Price
          </Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="stock">
            Stock
          </Label>
          <Input
            id="stock"
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="land_of_origin">
            Origin
          </Label>
          <Input
            id="land_of_origin"
            value={landOfOrigin}
            onChange={(e) => setLandOfOrigin(e.target.value)}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="vitola">
            Vitola
          </Label>
          <Input
            id="vitola"
            value={vitola}
            onChange={(e) => setVitola(e.target.value)}
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
