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
import BackgroundMusic from './assets/audio/background-music.wav';
import AboutUs from './pages/AboutUs';
import Dropdown from './components/Dropdown';

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
  const [isOpen, setIsOpen] = useState(false);

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
    if (location.pathname === '/') {
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

    if (location.pathname === '/tentang-kami') {
      setTitle('Tentang Kami');
      setDescription('Kenali lebih dalam mengenai OSKM ITB');
    }
  }, [location.pathname]);

  return (
    <div ref={inputRef} onClick={musicTrigger}>
      <HelmetMeta title={title} description={description} />
      <MotionConfig reducedMotion="user">
        {showNavbar && (
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen}>
            <NavItem name="Home" to="/" external={false} />
            <Dropdown
              title="Organogram"
              items={[
                <NavItem
                  key={1}
                  name="Organogram KAT ITB"
                  to="/organogram-kat"
                  external={false}
                />,
                <NavItem
                  key={2}
                  name="Organogram IT"
                  to="/organogram-it"
                  external={false}
                />,
              ]}
              position={isOpen ? 'left' : 'right'}
            />
            <NavItem name="Tentang Kami" to="/tentang-kami" external={false} />
            <Dropdown
              title="Link Penting"
              items={[
                <NavItem
                  key={4}
                  name="OHU"
                  to="https://ohu.katitb22.com"
                  external={true}
                />,
                <NavItem
                  key={5}
                  name="Dashboard"
                  to="https://dashboard.katitb22.com"
                  external={true}
                />,
                <NavItem
                  key={6}
                  name="Blog"
                  to="https://blog.katitb22.com"
                  external={true}
                />,
                <NavItem
                  key={1}
                  name="Kelengkapan OSKM"
                  to="https://linktr.ee/KelengkapanOSKM2022"
                  external={true}
                />,
              ]}
              position={isOpen ? 'left' : 'right'}
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
