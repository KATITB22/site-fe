import React from 'react';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import VisiMisi from '../containers/VisiMisi';
import Organogram from '../containers/Organogram';
import Footer from '../containers/Footer';

export const Home: React.FC = () => {
  return (
    <div>
      <VisiMisi />
      <Organogram />
      <AplikasiLainnya />
      <Footer />
    </div>
  );
};
