import { MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavItem from './components/navbar/NavItem';
import Navbar from './containers/Navbar';
import DivisiIT from './pages/DivisiIT';
import { Home } from './pages/Home';
import OrganogramKAT from './pages/OrganogramKAT';
import PageNotFound from './pages/PageNotFound';
import HelmetMeta from './components/HelmetMeta';

interface AppProps {
  video?: string;
}

const App: React.FC<AppProps> = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  const [title, setTitle] = useState('Home');
  const [description, setDescription] = useState(
    'Halaman Utama Landing Page OSKM 2022'
  );

  useEffect(() => {
    if (location.pathname === '/home') {
      setTitle('Home');
      setDescription('Halaman Utama Landing Page OSKM 2022');
    }

    if (location.pathname === '/organogram-kat') {
      setTitle('Organogram KAT');
      setDescription('Halaman Organogram KAT');
    }

    if (location.pathname === '/organogram-it') {
      setTitle('Bidang IT');
      setDescription('Halaman Organogram Bidang IT');
    }
  }, [location.pathname]);

  return (
    <>
      <HelmetMeta title={title} description={description} />
      <MotionConfig reducedMotion="user">
        {showNavbar && (
          <Navbar>
            <NavItem name="Home" to="/" external={false} />
            <NavItem
              name="Organogram KAT ITB"
              to="/organogram-kat"
              external={false}
            />
            <NavItem
              name="Organogram IT"
              to="/organogram-it"
              external={false}
            />
            <NavItem
              name="Kelengkapan OSKM"
              to="https://linktr.ee/KelengkapanOSKM2022"
              external={true}
            />
          </Navbar>
        )}
        <Routes>
          <Route path="/" element={<Home embedded="not-available" />} />
          <Route
            path="*"
            element={<PageNotFound setShowNavbar={setShowNavbar} />}
          />
          <Route path="/organogram-kat" element={<OrganogramKAT />} />
          <Route path="/organogram-it" element={<DivisiIT />} />
        </Routes>
      </MotionConfig>
    </>
  );
};

export default App;
