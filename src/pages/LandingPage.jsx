import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="container mx-auto py-10 text-center">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Welcome to Alta Sigar & Grill</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Your premier destination for fine cigars and accessories.
        </p>
      </header>

      <main>
        <p className="mb-6">
          Explore our curated selection of high-quality cigars from around the world.
        </p>
        <Button asChild>
          <Link to="/products">View Products</Link>
        </Button>
      </main>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=Alta+Sigar+&+Grill,Svaneveien+32,9512+Alta">
          </iframe>
        </div>
      </section>

      <footer className="text-center mt-10">
        <p>&copy; 2025 Alta Sigar & Grill. All rights reserved.</p>
      </footer>
    </div>
  );
}
