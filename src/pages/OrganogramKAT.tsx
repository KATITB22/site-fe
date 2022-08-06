import React from 'react';
import Footer from '../containers/Footer';
import OrganogramSection from '../containers/OrganogramSection';
import Navbar from '../containers/Navbar';
import NavItem from '../components/navbar/NavItem';

const OrganogramKAT: React.FC = () => {
  return (
    <div>
      <Navbar>
        <NavItem name="Organogram KAT ITB" to="organogram-kat" />
        <NavItem name="Organogram IT" to="divisi-it" />
        <NavItem name="Aplikasi Lainnya" to="/" />
      </Navbar>
      <OrganogramSection isDarkMode={false} />
      <Footer isDarkMode={false} />
    </div>
  );
};

export default OrganogramKAT;
