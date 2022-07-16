import React from 'react';
import '../font/font.css';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AplikasiLainnya />
      <Footer />
    </div>
  );
};
