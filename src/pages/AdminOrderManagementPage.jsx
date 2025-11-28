import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

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
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Order Management</h2>
        <Button onClick={() => setShowArchived(!showArchived)} variant="outline">
          Show/Hide completed/Cancelled orders
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference Number</TableHead>
              <TableHead>Customer Email</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <TableRow key={order.id} onClick={() => navigate(`/admin/orders/${order.id}`)} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{order.reference_number}</TableCell>
                  <TableCell>{order.customer_email}</TableCell>
                  <TableCell>{new Date(order.created_at).toLocaleString()}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" className="text-center">
                  {showArchived ? 'No orders found.' : 'No active orders found.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminOrderManagementPage;
