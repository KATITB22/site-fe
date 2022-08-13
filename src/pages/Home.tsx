import React from 'react';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import VisiMisi from '../containers/VisiMisi';
import Organogram from '../containers/Organogram';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import Timeline from '../containers/Timeline';
import Animasi from '../containers/Animasi';
import { ToastContainer } from 'react-toastify';

interface HomeProps {
  embedded?: string;
}

export const Home: React.FC<HomeProps> = ({ embedded }) => {
  return (
    <div className='overflow-hidden'>
      <ToastContainer position="top-center" />
      <Hero />
      <Timeline />
      {embedded === 'available' ? <Animasi /> : null}
      <VisiMisi embedded={embedded} />
      <Organogram embedded={embedded} />
      <AplikasiLainnya embedded={embedded} />
      <Footer landing embedded={embedded} />
    </div>
  );
};
