import { motion } from 'framer-motion';
import React from 'react';
import CarouselCard from '../components/CarouselCard';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';

const AplikasiLainnya: React.FC = () => {
  return (
    <div className="bg-primaryCream w-[100vw] xs:px-20 md:px-32 lg:px-40 xl:px-40 xxl:px-80 3xl:px-96 py-14">
      <MotionTitle {...getTransition('left')}>
        Kunjuni aplikasi <br /> &nbsp; &nbsp;lainnya!
      </MotionTitle>
      <motion.div {...getTransition('bottom')}>
        <CarouselCard />
      </motion.div>
    </div>
  );
};

export default AplikasiLainnya;
