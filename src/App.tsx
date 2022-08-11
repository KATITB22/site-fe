import { MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavItem from './components/navbar/NavItem';
import Navbar from './containers/Navbar';
import DivisiIT from './pages/DivisiIT';
import { Home } from './pages/Home';
import OrganogramKAT from './pages/OrganogramKAT';
import PageNotFound from './pages/PageNotFound';

interface AppProps {
  video?: string;
}

const App: React.FC<AppProps> = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    location.pathname === '/organogram-kat'
      ? setDarkMode(true)
      : setDarkMode(false);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      {showNavbar && (
        <Navbar>
          <NavItem name="Home" to="/" />
          <NavItem name="Organogram KAT ITB" to="/organogram-kat" />
          <NavItem name="Organogram IT" to="/divisi-it" />
        </Navbar>
      )}
      <Routes>
        <Route path="/" element={<Home embedded="not-available" />} />
        <Route
          path="*"
          element={<PageNotFound setShowNavbar={setShowNavbar} />}
        />
        <Route path="/organogram-kat" element={<OrganogramKAT />} />
        <Route path="/divisi-it" element={<DivisiIT />} />
      </Routes>
    </MotionConfig>
  );
};

export default App;
