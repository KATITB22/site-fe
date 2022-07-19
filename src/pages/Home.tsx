import React from 'react';
import NavItem from '../components/navbar/NavItem';
import AplikasiLainnya from '../containers/AplikasiLainnya';
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
      <AplikasiLainnya />
      <Footer />
    </div>
  );
};
