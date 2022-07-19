import React from 'react';
import NavItem from '../components/navbar/NavItem';
import AplikasiLainnya from '../containers/AplikasiLainnya';
import VisiMisi from '../containers/VisiMisi';
import Organogram from '../containers/Organogram';
import Footer from '../containers/Footer';
import Navbar from '../containers/Navbar';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar>
        <NavItem name="Organogram KAT ITB" to="organogram-kat" />
        <NavItem name="Organogram IT" to="divisi-it" />
        <NavItem name="Aplikasi Lainnya" to="/" />
      </Navbar>
      <VisiMisi />
      <Organogram />
      <AplikasiLainnya />
      <Footer />
    </div>
  );
};
