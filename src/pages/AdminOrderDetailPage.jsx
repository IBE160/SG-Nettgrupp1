import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '@/lib/supabase-auth-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  console.log('Update Status Response:', response.status, response.statusText);

  let data;
  try {
    data = await response.json();
  } catch (e) {
    console.error('Failed to parse JSON response');
    throw new Error(`Server Error: ${response.status} ${response.statusText}`);
  }

  if (!response.ok) {
    console.error('Update failed data:', data);
    throw new Error(data.message || `Failed to update order status (${response.status})`);
  }
  return data;
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
      console.error('Update failed:', err);
      setError(err.message);
    }
  };

  if (loading) return <div className="container mx-auto py-10 text-center">Loading order details...</div>;
  if (error) return <div className="container mx-auto py-10 text-center text-destructive">Error: {error}</div>;
  if (!order) return <div className="container mx-auto py-10 text-center">Order not found.</div>;

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Order Details</h1>
      
      <Card className="mb-8">
        <CardHeader>
            <CardTitle>Order Information</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Order ID</p>
                    <p>{order.id}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Reference Number</p>
                    <p>{order.reference_number}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Customer Email</p>
                    <p>{order.customer_email}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Customer Phone</p>
                    <p>{order.customer_phone || 'N/A'}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Price</p>
                    <p>{Math.round(order.total_price)} kr</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className={`font-semibold ${order.status === 'Cancelled' ? 'text-destructive' : 'text-primary'}`}>{order.status}</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="hidden md:block">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead>Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {order.order_items.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.products.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{Math.round(item.products.price)} kr</TableCell>
                        <TableCell>{(item.quantity * item.products.price).toFixed(0)} kr</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>

            <div className="md:hidden flex flex-col gap-4">
                {order.order_items.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 flex flex-col gap-2 bg-card text-card-foreground">
                        <div className="flex justify-between items-start">
                            <span className="font-medium">{item.products.name}</span>
                            <span className="font-semibold">{(item.quantity * item.products.price).toFixed(0)} kr</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Qty: {item.quantity}</span>
                            <span>{Math.round(item.products.price)} kr / unit</span>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>

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
