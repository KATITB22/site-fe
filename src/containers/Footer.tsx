import React, { useEffect, useState } from 'react';
import FooterWaveTop from '../components/FooterWaveTop';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';
import LandingFooterGraphics from '../components/LandingFooterGraphics';
import OrganogramFooterGraphics from '../components/OrganogramFooterGraphics';
import Sponsor from '../components/Sponsor';
import Copyright from '../components/Copyright';

interface FooterProps {
  isDarkMode?: boolean;
  organogram?: boolean;
  landing?: boolean;
  embedded?: string;
}

const Footer: React.FC<FooterProps> = ({
  isDarkMode,
  embedded,
  landing,
  organogram,
}) => {
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
    <div className="relative w-[100vw] bg-secondaryYellow">
      {landing ? (
        <LandingFooterGraphics />
      ) : organogram ? (
        <OrganogramFooterGraphics />
      ) : null}
      {/* dark mode in footerWaveTop using isDarkMode */}
      <FooterWaveTop
        width={screenSize.dynamicWidth}
        isDarkMode={isDarkMode}
        embedded={embedded}
      />
      <MotionTitle
        className="text-center "
        isDarkMode={isDarkMode}
        {...getTransition('bottom')}
      >
        Sponsor
      </MotionTitle>
      <Sponsor />
      <Copyright />
    </div>
  );
};

export default Footer;
