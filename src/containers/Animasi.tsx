import { motion } from 'framer-motion';
import React from 'react';
import Title from '../components/Title';
import { getTransition } from '../utils/transition';

const Animasi: React.FC = () => {
  return (
    <div
      className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-full h-auto space-x-0 xs:px-20 md:px-32 
    lg:px-20 xl:px-40 xxl:px-80"
    >
      <motion.section
        className="relative justify-center w-full"
        {...getTransition('right')}
      >
        <section className="bg-primaryCream h-1000">
          <Title className="text-center">Animasi OSKM</Title>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/7WyHtSlvHD4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default Animasi;
