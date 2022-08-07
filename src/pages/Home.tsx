import React from 'react';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import VisiMisi from '../containers/VisiMisi';
import Organogram from '../containers/Organogram';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import Timeline from '../containers/Timeline';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <VisiMisi />
      <Organogram />
      <AplikasiLainnya />
      <Footer withGraphics />
    </div>
  );
};
