import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import peopleImage from '../assets/people.jpg';

export default function LandingPage() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapQuery = "Alta Sigar & Grill,Svaneveien 32,9512 Alta";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(mapQuery)}`;

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src={peopleImage} 
              alt="Førsteklasses tobakksblader" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text readability */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">Alta Sigar & Grill</h1>
          <p className="text-lg md:text-xl text-white font-bold mt-6 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Vi tilbyr et eksklusivt utvalg av håndrullede premiumsigarer fra anerkjente produsenter i Karibia og Mellom-Amerika – nøye valgt ut for kvalitet, smak og tradisjonelt håndverk.
            Hos oss ønsker vi å skape en varm og avslappet atmosfære der både erfarne entusiaster og nysgjerrige nykommere kan føle seg velkommen. Vi deler gjerne kunnskap om alt fra smak og aroma til lagring og sigartradisjoner, slik at hver kunde får en personlig og god opplevelse.
            Alta Sigar & Grill handler om mer enn å selge sigarer – det handler om nytelse, ro og gode øyeblikk. Velkommen inn i en verden av kvalitet og ekte håndverk.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-bold mt-8 hover:bg-primary/90 transition-colors shadow-lg"
          >
            Se våre produkter
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Besøk vår humidor:</h2>
           <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border" style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                <p>Mangler Google Maps API-nøkkel. Kart kan ikke vises.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground text-background text-center py-6">
        <div className="container mx-auto">
            <p>&copy; 2025 Alta Sigar & Grill. Alle rettigheter forbeholdt.</p>
        </div>
      </footer>
    </div>
  );
}
