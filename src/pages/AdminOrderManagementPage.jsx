import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';

function AdminOrderManagementPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { session } = useSupabaseAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!session) {
        setLoading(false);
        return;
      }
      try {
        const token = session.access_token;
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch('/api/orders', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Order Management</h2>
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

export default AdminOrderManagementPage;
