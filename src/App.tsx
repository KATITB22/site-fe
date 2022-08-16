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
import ReactAudioPlayer from 'react-audio-player';
import BackgroundMusic from './assets/audio/background-music.mp3';
import AboutUs from './pages/AboutUs';

interface AppProps {
  video?: string;
}

function fixComponent<T>(component: T): T {
  return (component as any).default ?? component;
}
const ReactAudioPlayerComponent = fixComponent(ReactAudioPlayer);

const App: React.FC<AppProps> = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  const [title, setTitle] = useState('Home');
  const [description, setDescription] = useState(
    'Halaman Utama Landing Page OSKM 2022'
  );

  const inputRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current !== null) {
        inputRef.current.click();
      }
    }, 1000);
  }, [inputRef]);

  const musicTrigger = () => {
    const music = document.getElementById(
      'backgroundMusic'
    ) as HTMLAudioElement;
    if (music != null) {
      music.play();
    }
  };

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
    <div ref={inputRef} onClick={musicTrigger}>
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
            <NavItem name="Tentang Kami" to="/tentang-kami" external={false} />
            <NavItem
              name="Kelengkapan OSKM"
              to="https://linktr.ee/KelengkapanOSKM2022"
              external={true}
            />
            <NavItem
              name="Dashboard"
              to="https://dashboard.katitb22.com"
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
          <Route path="/tentang-kami" element={<AboutUs />} />
        </Routes>
      </MotionConfig>
      <ReactAudioPlayerComponent
        id="backgroundMusic"
        src={BackgroundMusic}
        autoPlay={true}
        loop
      />
    </div>
  );
};

export default App;
