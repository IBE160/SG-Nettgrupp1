import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

function AdminOrderManagementPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
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

  if (loading) {
    return <div className="container mx-auto py-10 text-center">Loading orders...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-10 text-center text-destructive">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Order Management</h2>
        <Button 
          className="bg-yellow-400 text-black hover:bg-yellow-500 border-none"
          onClick={() => setShowArchived(!showArchived)}
        >
          {showArchived ? 'Hide Inactive Orders' : 'Show Inactive Orders'}
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => {
            const isInactive = order.status === 'Completed' || order.status === 'Cancelled';
            
            return (
              <Card 
                key={order.id} 
                className={`cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground ${isInactive ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-card'}`}
                onClick={() => navigate(`/admin/orders/${order.id}`)}
              >
                <CardContent className="p-6 flex justify-between items-center gap-4">
                    <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                         <span className="font-bold text-lg">Ref: {order.reference_number}</span>
                    </div>
                    <p className="text-sm mb-2">
                        {order.customer_email}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <span>{new Date(order.created_at).toLocaleString()}</span>
                        <span><strong>Status:</strong> {order.status}</span>
                    </div>
                    </div>
                    <ChevronRight className="h-6 w-6 shrink-0" />
                </CardContent>
              </Card>
            )
          })
        ) : (
          <Card className="p-8 text-center text-muted-foreground border-dashed">
            <p>{showArchived ? 'No orders found.' : 'No active orders found.'}</p>
          </Card>
        )}
      </div>
    </div>
  );
}

export default AdminOrderManagementPage;
