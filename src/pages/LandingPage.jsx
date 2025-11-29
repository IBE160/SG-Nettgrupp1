import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapQuery = "Alta Sigar & Grill,Svaneveien 32,9512 Alta";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(mapQuery)}`;

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '1rem 2rem',
    borderRadius: 'var(--radius)',
    textDecoration: 'none',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginTop: '2rem'
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground text-center py-20 md:py-32">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">A Haven for the Aficionado</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Experience the art of fine cigars. Explore our curated collection and discover your next favorite.
          </p>
          <Link to="/products" style={buttonStyle}>Explore Products</Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Visit Our Humidor</h2>
           <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {apiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}>
              </iframe>
            ) : (
              <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
                <p>Google Maps API Key is missing. The map cannot be displayed.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground text-background text-center py-6">
        <div className="container mx-auto">
            <p>&copy; 2025 Alta Sigar & Grill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
