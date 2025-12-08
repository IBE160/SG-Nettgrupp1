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

const statusTranslations = {
  pending: "Mottatt",
  Pending: "Mottatt",
  Prepared: "Klargjort",
  Completed: "Fullført",
  Cancelled: "Kansellert",
};

const getAuthHeader = (session) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${session.access_token}`,
});

const fetchOrder = async (orderId, session) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    headers: getAuthHeader(session),
  });
  if (!response.ok) throw new Error('Klarte ikke å hente bestilling');
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
    console.error('Klarte ikke å tolke JSON-respons');
    throw new Error(`Serverfeil: ${response.status} ${response.statusText}`);
  }

  if (!response.ok) {
    console.error('Oppdatering mislyktes data:', data);
    throw new Error(data.message || `Klarte ikke å oppdatere bestillingsstatus (${response.status})`);
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
      console.error('Oppdatering mislyktes:', err);
      setError(err.message);
    }
  };

  if (loading) return <div className="container mx-auto py-10 text-center">Laster bestillingsdetaljer...</div>;
  if (error) return <div className="container mx-auto py-10 text-center text-destructive">Feil: {error}</div>;
  if (!order) return <div className="container mx-auto py-10 text-center">Bestilling ikke funnet.</div>;

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Bestillingsdetaljer</h1>
      
      <Card className="mb-8">
        <CardHeader>
            <CardTitle>Bestillingsinformasjon</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Bestillings-ID</p>
                    <p>{order.id}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Referansenummer</p>
                    <p>{order.reference_number}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Kundens e-post</p>
                    <p>{order.customer_email}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Kundens telefon</p>
                    <p>{order.customer_phone || 'N/A'}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Totalpris</p>
                    <p>{Math.round(order.total_price)} kr</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className={`font-semibold ${order.status === 'Cancelled' ? 'text-destructive' : 'text-primary'}`}>{statusTranslations[order.status] || order.status}</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Bestillingsvarer</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="hidden md:block">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Produkt</TableHead>
                    <TableHead>Antall</TableHead>
                    <TableHead>Enhetspris</TableHead>
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
                            <span>Antall: {item.quantity}</span>
                            <span>{Math.round(item.products.price)} kr / enhet</span>
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
              Merk som klargjort
            </Button>
            <Button variant="destructive" onClick={() => handleUpdateStatus('Cancelled')}>
              Kanseller bestilling
            </Button>
          </>
        )}
        {order.status === 'Prepared' && (
            <>
                <Button onClick={() => handleUpdateStatus('Completed')}>
                    Merk som fullført
                </Button>
                <Button variant="destructive" onClick={() => handleUpdateStatus('Cancelled')}>
                    Kanseller bestilling
                </Button>
            </>
        )}
      </div>
    </div>
  );
}
