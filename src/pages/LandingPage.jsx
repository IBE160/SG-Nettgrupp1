import React from 'react';

export default function LandingPage() {
  return (
    <div className="container mx-auto py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to Alta Sigar & Grill</h1>
        <p className="text-xl text-muted-foreground mt-2">Your premier destination for fine cigars and accessories.</p>
      </header>

      <main>
        <div className="mt-6 border rounded-lg overflow-hidden">
          <iframe
            title="Alta Sigar & Grill Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.06!2d23.1618!3d69.9688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c9411222222222%3A0x400f6ad272992f0!2sAlta%2C%20Norway!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <footer className="text-center mt-10">
        <p>&copy; 2025 Alta Sigar & Grill. All rights reserved.</p>
      </footer>
    </div>
  );
}
