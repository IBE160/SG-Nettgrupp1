import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function OrderConfirmationPage() {
  const { orderRef } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="border-b pb-6">
          <CardTitle className="text-3xl font-bold">Thank You For Your Order!</CardTitle>
          <p className="text-muted-foreground mt-2">Your order has been placed successfully.</p>
        </CardHeader>
        <CardContent className="pt-6">
          <p>Your order reference number is:</p>
          <div className="text-2xl font-bold bg-secondary text-secondary-foreground rounded-md p-4 my-4">
            {orderRef}
          </div>
          <p className="text-muted-foreground mt-4">
            You will receive an email confirmation shortly (this feature is pending). Please keep this reference number for your records.
          </p>
          <p className="text-muted-foreground mt-4 mb-6">
            We will notify you again once your order is ready for pickup.
          </p>
          <Button asChild className="w-full">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderConfirmationPage;