import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function OrderConfirmationPage() {
  const { orderRef } = useParams();

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '448px', textAlign: 'center' }}>
        <CardHeader>
          <CardTitle className="text-3xl">Thank You For Your Order!</CardTitle>
          <CardDescription>Your order has been placed successfully.</CardDescription>
        </CardHeader>
        <CardContent style={{ padding: '2rem' }} className="space-y-4">
          <p>Your order reference number is:</p>
          <p className="text-2xl font-bold bg-secondary text-secondary-foreground rounded-md p-4">{orderRef}</p>
          <p className="text-muted-foreground">You will receive an email confirmation shortly (this feature is pending). Please keep this reference number for your records.</p>
          <p className="text-muted-foreground">We will notify you again once your order is ready for pickup.</p>
          <Button asChild className="mt-4">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderConfirmationPage;