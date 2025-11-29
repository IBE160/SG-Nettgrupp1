import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '@/lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';

const getAuthHeader = (session) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${session.access_token}`,
});

const fetchOrder = async (orderId, session) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    headers: getAuthHeader(session),
  });
  if (!response.ok) throw new Error('Failed to fetch order');
  return await response.json();
};

const updateOrderStatus = async (orderId, status, session) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    method: 'PUT',
    headers: getAuthHeader(session),
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Failed to update order status');
  return await response.json();
};

export default function AdminOrderDetailPage() {
  const { orderId } = useParams();
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadOrder = async () => {
    try {
      setLoading(true);
      setError(null);
      const orderData = await fetchOrder(orderId, session);
      setOrder(orderData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      loadOrder();
    }
  }, [orderId, session]);

  const handleUpdateStatus = async (status) => {
    try {
      setError(null);
      await updateOrderStatus(orderId, status, session);
      navigate('/admin/orders');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!order) return <p>Order not found.</p>;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>
      <div className="space-y-4">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Order Reference:</strong> {order.reference_number}</p>
        <p><strong>Customer Email:</strong> {order.customer_email}</p>
        <p><strong>Total Price:</strong> ${order.total_price}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Order Items</h2>
        <div className="rounded-md border">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.order_items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.products.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.products.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item.quantity * item.products.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {order.status === 'pending' && (
          <>
            <Button onClick={() => handleUpdateStatus('Prepared')}>
              Mark as Prepared
            </Button>
            <Button variant="destructive" onClick={() => handleUpdateStatus('Cancelled')}>
              Cancel Order
            </Button>
          </>
        )}
        {order.status === 'Prepared' && (
            <>
                <Button onClick={() => handleUpdateStatus('Completed')}>
                    Mark as Completed
                </Button>
                <Button variant="destructive" onClick={() => handleUpdateStatus('Cancelled')}>
                    Cancel Order
                </Button>
            </>
        )}
      </div>
    </div>
  );
}
