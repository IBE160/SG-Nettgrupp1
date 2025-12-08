import { useState, useEffect } from 'react';

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
    if (product) {
        productData.id = product.id;
    }
    onSubmit(productData);
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    backgroundColor: 'white',
    color: 'black',
    boxSizing: 'border-box',
    fontFamily: 'inherit', // Ensure textarea uses the same font as other inputs
    fontSize: 'inherit',
  };

  const buttonStyle = {
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius)',
    border: 'none',
    cursor: 'pointer',
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: 'hsl(var(--primary))',
    border: '1px solid hsl(var(--primary))',
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '448px', margin: '0 auto' }}>
      <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={labelStyle}>
            Navn
          </label>
          <input 
            id="name" 
            style={inputStyle}
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description" style={labelStyle}>
            Beskrivelse
          </label>
          <textarea 
            id="description" 
            style={inputStyle}
            rows="4"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="price" style={labelStyle}>
            Pris
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            style={inputStyle}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="stock" style={labelStyle}>
            Antall på lager
          </label>
          <input
            id="stock"
            type="number"
            style={inputStyle}
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="land_of_origin" style={labelStyle}>
            Opprinnelse
          </label>
          <input
            id="land_of_origin"
            style={inputStyle}
            value={landOfOrigin}
            onChange={(e) => setLandOfOrigin(e.target.value)}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="vitola" style={labelStyle}>
            Vitola
          </label>
          <input
            id="vitola"
            style={inputStyle}
            value={vitola}
            onChange={(e) => setVitola(e.target.value)}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
        <button type="button" style={outlineButtonStyle} onClick={onCancel}>Avbryt</button>
        <button type="submit" style={{...buttonStyle, opacity: loading ? 0.7 : 1}} disabled={loading}>
          {loading ? 'Lagrer...' : 'Lagre'}
        </button>
      </div>
    </form>
  );
}
