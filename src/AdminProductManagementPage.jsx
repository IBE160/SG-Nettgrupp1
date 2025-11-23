import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// AdminOrdersList Component
function AdminOrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch('/api/orders', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Reference Number</th>
            <th>Customer Email</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} onClick={() => navigate(`/admin/orders/${order.id}`)} style={{ cursor: 'pointer' }}>
              <td>{order.reference_number}</td>
              <td>{order.customer_email}</td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// AdminProductManagementPage Component
function AdminProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'orders'

  useEffect(() => {
    if (activeTab === 'products') {
      const fetchProducts = async () => {
        try {
          // Assuming product fetching also needs auth
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No authentication token found');
          }

          const response = await fetch('/api/products', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [activeTab]);

  if (loading && activeTab === 'products') {
    return <div>Loading products...</div>;
  }

  if (error && activeTab === 'products') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <button onClick={() => setActiveTab('products')} style={{ fontWeight: activeTab === 'products' ? 'bold' : 'normal' }}>
          Product Management
        </button>
        <button onClick={() => setActiveTab('orders')} style={{ fontWeight: activeTab === 'orders' ? 'bold' : 'normal' }}>
          Order Management
        </button>
      </nav>

      {activeTab === 'products' && (
        <div>
          <h3>Product List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Add New Product</button>
        </div>
      )}

      {activeTab === 'orders' && <AdminOrdersList />}
    </div>
  );
}

export default AdminProductManagementPage;
