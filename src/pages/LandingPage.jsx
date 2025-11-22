import React from 'react';
import { Link } from 'react-router-dom';
// Assuming the Button component is now available at src/components/ui/button
import { Button } from '../components/ui/button';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Our Store!</h1>
      <p>Discover a wide range of amazing products.</p>
      <Link to="/products">
        <Button>View Products</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
