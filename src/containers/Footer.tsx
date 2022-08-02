import React, { useEffect, useState } from 'react';
import FooterWaveTop from '../components/FooterWaveTop';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const [screenSize, setScreenSize] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    setScreenSize({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  return (
    <div className="relative w-[100vw]">
      <MotionTitle
        className="absolute top-40 left-0 right-0 text-center "
        isDarkMode={isDarkMode}
        {...getTransition('bottom')}
      >
        Sponsor
      </MotionTitle>
      {/* dark mode in footerWaveTop using isDarkMode */}
      <FooterWaveTop width={screenSize.dynamicWidth} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Footer;
