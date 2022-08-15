import React, { useEffect, useState } from 'react';
import FooterWaveTop from '../components/FooterWaveTop';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';
import LandingFooterGraphics from '../components/LandingFooterGraphics';
import OrganogramFooterGraphics from '../components/OrganogramFooterGraphics';
import Sponsor from '../components/Sponsor';
import Copyright from '../components/Copyright';
import MediaPartner from '../components/MediaPartner';
import { motion } from 'framer-motion';

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
        Sponsors
      </MotionTitle>
      <motion.div {...getTransition('left')}>
        <Sponsor />
      </motion.div>

      <MotionTitle
        className="text-center pt-20"
        isDarkMode={isDarkMode}
        {...getTransition('bottom')}
      >
        Media Partners
      </MotionTitle>
      <motion.div {...getTransition('right')}>
        <MediaPartner />
      </motion.div>

      <Copyright />
    </div>
  );
};

export default Footer;
