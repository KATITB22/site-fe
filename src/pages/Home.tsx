import React from 'react';
import '../font/font.css';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import Timeline from '../containers/Timeline';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <AplikasiLainnya />
      <Footer />
    </div>
  );
};
