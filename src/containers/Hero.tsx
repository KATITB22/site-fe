import { motion } from 'framer-motion';
import React from 'react';
import MainLogo from '../components/MainLogo';
import OverlapTitle from '../components/OverlapTitle';
import { getTransition } from '../utils/transition';

const Hero: React.FC = () => {
  return (
    <motion.div
      className="bg-primaryCream w-[100vw] h-[700px] min-h-[700px] xs:px-20 sm:px-36 py-14"
      {...getTransition('bottom')}
    >
      <OverlapTitle className="top-60 left-0 right-0 text-center">
        Lorem &nbsp; <br /> &ensp; Ipsum
      </OverlapTitle>
      <MainLogo />
    </motion.div>
  );
};

export default Hero;
