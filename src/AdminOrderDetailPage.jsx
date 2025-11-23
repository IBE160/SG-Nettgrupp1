import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AdminOrderDetailPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch(`/api/orders/${orderId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrder(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div>
      <h2>Order Details for #{order.id}</h2>
      <p><strong>Reference Number:</strong> {order.reference_number}</p>
      <p><strong>Customer Email:</strong> {order.customer_email}</p>
      <p><strong>Order Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
      <p><strong>Status:</strong> {order.status}</p>

      <h3>Items:</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.order_items.map(item => (
            <tr key={item.id}>
              <td>{item.products.name}</td>
              <td>{item.quantity}</td>
              <td>${item.products.price.toFixed(2)}</td>
              <td>${(item.quantity * item.products.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add more order details as needed */}
    </div>
  );
}

export default AdminOrderDetailPage;
