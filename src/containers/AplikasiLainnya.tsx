import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import AplikasiWaveTop from '../components/AplikasiWaveTop';
import CarouselCard from '../components/CarouselCard';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';

interface AplikasiLainnyaProps {
  embedded?: string;
}

const AplikasiLainnya: React.FC<AplikasiLainnyaProps> = ({ embedded }) => {
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

  if (embedded === 'available') {
    return (
      <div className="w-[100vw] bg-primaryYellow">
        <AplikasiWaveTop width={screenSize.dynamicWidth} />
        <section className=" xs:px-10 md:px-32 lg:px-40 xl:px-40 xxl:px-80 3xl:px-96 py-14">
          <MotionTitle {...getTransition('left')}>
            Kunjuni aplikasi <br /> &nbsp; &nbsp;lainnya!
          </MotionTitle>
          <motion.div {...getTransition('bottom')}>
            <CarouselCard />
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-primaryCream w-[100vw] xs:px-10 md:px-32 lg:px-40 xl:px-40 xxl:px-80 3xl:px-96 py-14">
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
