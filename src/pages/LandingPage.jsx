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

      <footer className="text-center mt-10">
        <p>&copy; 2025 Alta Sigar & Grill. All rights reserved.</p>
      </footer>
    </div>
  );
}
