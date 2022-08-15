import { motion } from 'framer-motion';
import React from 'react';
import VerticalLogo from '../assets/img/logo/LogoAndTextVertical.png';
import HeroBackground from '../components/HeroBackground';
import { getTransition } from '../utils/transition';

const Hero: React.FC = () => {
  return (
    <>
      <motion.div
        className="bg-tranparent w-[100vw] h-[700px] min-h-[700px] xs:px-20 sm:px-36 py-14"
        {...getTransition('bottom')}
      >
        <div className="h-[400px] w-full flex items-center justify-center">
          <div
            className="h-[290px] w-[290px] xs:bg-primaryYellow/20 lg:bg-transparent rounded-full 
          flex items-center justify-center"
          >
            <img
              src={VerticalLogo}
              alt="OSKM LOGO AND TEXT VERTICAL"
              className="w-[220px]"
            />
          </div>
        </div>
      </motion.div>
      <HeroBackground />
    </>
  );
};

export default Hero;
