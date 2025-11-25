import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';


function AdminOrderDetailPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateStatus = async (newStatus) => {
    if (window.confirm(`Are you sure you want to mark this order as ${newStatus}?`)) {
      setIsUpdating(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/api/orders/${orderId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ status: newStatus })
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || 'Failed to update order status');
        }

        const updatedOrder = await response.json();
        setOrder(updatedOrder);

      } catch (error) {
        setError(error);
      } finally {
        setIsUpdating(false);
      }
    }
  };

  const handleDelete = async () => {
    setIsUpdating(true);
    setError(null);
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/api/orders/${orderId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok && response.status !== 204) {
            const errData = await response.json();
            throw new Error(errData.message || 'Failed to delete order');
        }
        
        // On success, redirect to the main admin page
        navigate('/admin');

    } catch (error) {
        setError(error);
    } finally {
        setIsUpdating(false);
    }
  };

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

  if (error && !isUpdating) { // Only show primary error if not in the middle of an update
    return <div>Error: {error.message}</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }
  
  const canUpdate = order.status === 'pending' || order.status === 'prepared';

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Details #{order.id}</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
            <div>
                <p><strong>Reference Number:</strong> {order.reference_number}</p>
                <p><strong>Customer Email:</strong> {order.customer_email}</p>
                <p><strong>Order Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
                <p className="mb-4"><strong>Status:</strong> <span className={`font-semibold ${order.status === 'Cancelled' ? 'text-red-500' : 'text-green-500'}`}>{order.status}</span></p>
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" disabled={isUpdating}>Delete Order</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the order from the database.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>


        {canUpdate && (
          <div className="flex space-x-2 mt-4 border-t pt-4">
            {order.status === 'pending' && (
                <Button
                    onClick={() => handleUpdateStatus('prepared')}
                    disabled={isUpdating}
                >
                    {isUpdating ? 'Updating...' : 'Mark as Prepared'}
                </Button>
            )}
            <Button
              onClick={() => handleUpdateStatus('Cancelled')}
              disabled={isUpdating}
              variant="outline"
            >
              {isUpdating ? 'Cancelling...' : 'Mark as Cancelled'}
            </Button>
          </div>
        )}
        {error && isUpdating && <p className="text-red-500 mt-2">Update failed: {error.message}</p>}
      </div>


      <h3 className="text-xl font-bold mb-2">Items:</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Product Name</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.order_items.map(item => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.products.name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">${item.products.price.toFixed(2)}</td>
                <td className="py-2 px-4">${(item.quantity * item.products.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrderDetailPage;
