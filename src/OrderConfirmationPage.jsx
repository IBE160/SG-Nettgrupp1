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
          <CardTitle className="text-3xl font-bold">Takk for din bestilling!</CardTitle>
          <p className="text-muted-foreground mt-2">Bestillingen din er mottatt.</p>
        </CardHeader>
        <CardContent className="pt-6">
          <p>Ditt ordrenummer er:</p>
          <div className="text-2xl font-bold bg-secondary text-secondary-foreground rounded-md p-4 my-4">
            {orderRef}
          </div>
          <p className="text-muted-foreground mt-4">
            Du vil snart motta en bekreftelse på e-post (denne funksjonen er under utvikling). Ta vare på dette referansenummeret.
          </p>
          <p className="text-muted-foreground mt-4 mb-6">
            Vi gir deg beskjed når bestillingen er klar for henting.
          </p>
          <Button asChild className="w-full">
            <Link to="/products">
              Fortsett å handle
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderConfirmationPage;