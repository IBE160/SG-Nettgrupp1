import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function OrderConfirmationPage() {
  const { orderRef } = useParams();

  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Thank You For Your Order!</CardTitle>
          <CardDescription>Your order has been placed successfully.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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