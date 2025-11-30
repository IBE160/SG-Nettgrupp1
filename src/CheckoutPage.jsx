import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartId, clearCart } = useCart();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Vennligst skriv inn en gyldig e-postadresse.');
      return;
    }
    if (!cartId) {
        setError('Handlekurven din er tom eller ble ikke funnet. Vennligst prøv igjen.');
        return;
    }
    
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Klarte ikke å legge inn bestilling.');
      }

      clearCart();
      navigate(`/confirmation/${data.orderReference}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Sende bestilling</CardTitle>
          <CardDescription>Skriv inn dine detaljer for å legge inn din klikk-og-hent-bestilling.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                E-post <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="din.epost@eksempel.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="bg-white text-black"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefonnummer (valgfritt)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+47 123 45 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitting}
                className="bg-white text-black"
              />
            </div>
            
            {error && <p className="text-sm text-destructive">{error}</p>}
            
            <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Vennligst merk:</strong> Betaling skjer i butikken ved henting.</p>
                <p>Du må være <strong className="font-bold">18 år eller eldre</strong> for å kjøpe og hente tobakksprodukter.</p>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sender bestilling...' : 'Send bestilling'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CheckoutPage;

