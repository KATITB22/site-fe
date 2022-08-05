import React from 'react';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import VisiMisi from '../containers/VisiMisi';
import Organogram from '../containers/Organogram';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import Timeline from '../containers/Timeline';
import Animasi from '../containers/Animasi';

interface HomeProps {
  embedded?: string;
}

export const Home: React.FC<HomeProps> = ({ embedded }) => {
  return (
    <div>
      <Hero />
      <Timeline />
      {embedded === 'available' ? <Animasi /> : null}
      <VisiMisi embedded={embedded} />
      <Organogram embedded={embedded} />
      <AplikasiLainnya embedded={embedded} />
      <Footer embedded={embedded} />
    </div>
  );
};
