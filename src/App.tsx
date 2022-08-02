import { MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import DivisiIT from './pages/DivisiIT';
import OrganogramKAT from './pages/OrganogramKAT';
import PageNotFound from './pages/PageNotFound';
import Navbar from './containers/Navbar';
import NavItem from './components/navbar/NavItem';

const App: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    location.pathname === '/organogram-kat'
      ? setDarkMode(true)
      : setDarkMode(false);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion='user'>
      <Navbar darkMode={darkMode}>
        <NavItem
          darkMode={darkMode}
          name="Organogram KAT ITB"
          to="organogram-kat"
        />
        <NavItem darkMode={darkMode} name="Organogram IT" to="divisi-it" />
        <NavItem darkMode={darkMode} name="Aplikasi Lainnya" to="/" />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/organogram-kat" element={<OrganogramKAT />} />
        <Route path="/divisi-it" element={<DivisiIT />} />
      </Routes>
    </MotionConfig>
  );
};

export default App;
