import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';

function AdminOrderManagementPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
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

  const filteredOrders = useMemo(() => {
    if (showArchived) {
      return orders;
    }
    return orders.filter(order => order.status !== 'Completed' && order.status !== 'Cancelled');
  }, [orders, showArchived]);

  const outlineButtonStyle = {
    backgroundColor: 'transparent',
    color: 'hsl(var(--primary))',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius)',
    border: '1px solid hsl(var(--primary))',
    cursor: 'pointer',
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Order Management</h2>
        <button onClick={() => setShowArchived(!showArchived)} style={outlineButtonStyle}>
          {showArchived ? 'Hide Inactive Orders' : 'Show Inactive Orders'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => {
            const isInactive = order.status === 'Completed' || order.status === 'Cancelled';
            
            const cardStyle = {
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              backgroundColor: 'transparent'
            };

            if (hoveredRow === order.id) {
              cardStyle.backgroundColor = 'hsl(var(--accent))';
              cardStyle.color = 'hsl(var(--accent-foreground))';
            } else if (isInactive) {
              cardStyle.backgroundColor = 'hsl(var(--muted))';
              cardStyle.color = 'hsl(var(--muted-foreground))';
            }

            return (
              <div 
                key={order.id} 
                style={cardStyle}
                onClick={() => navigate(`/admin/orders/${order.id}`)}
                onMouseEnter={() => setHoveredRow(order.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 'bold' }}>
                    Ref: {order.reference_number}
                  </p>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {order.customer_email}
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                    <span>{new Date(order.created_at).toLocaleString()}</span>
                    <span><strong>Status:</strong> {order.status}</span>
                  </div>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  &gt;
                </div>
              </div>
            )
          })
        ) : (
          <div style={{ border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center' }}>
            <p>{showArchived ? 'No orders found.' : 'No active orders found.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminOrderManagementPage;
