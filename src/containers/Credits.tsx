import { motion } from 'framer-motion';
import React from 'react';
import Texts from '../components/Texts';
import Title from '../components/Title';
import VStock from '../components/VStock';
import { getTransition } from '../utils/transition';
import Mic from '../assets/img/vistock/landing/credits/mic.png';
import NotBalok from '../assets/img/vistock/landing/credits/not-balok.png';

const Credits: React.FC = () => {
  return (
    <div
      className="flex md:flex-row-reverse justify-center items-center bg-primaryCream w-full h-auto space-x-0 
      xs:px-20 md:px-48 xl:px-40 xxl:px-80 py-20"
    >
      <motion.section
        className="flex justify-center w-full lg:w-2/3"
        {...getTransition('right')}
      >
        <section>
          <Title>usic Credit</Title>
          <Texts>Song - Good Morrow</Texts>
          <Texts>Background Music Web dibuat oleh:</Texts>
          <Texts>Jericho Fletcher - Teknik Informatika &apos;21</Texts>
          <Texts>Khabibullah Mukhammad Addib Baaj - Desain Produk &apos;21</Texts>
        </section>
      </motion.section>
      <motion.section
        className="relative flex justify-center content-center xs:invisible lg:visible xs:w-0 lg:w-1/3"
        {...getTransition('left')}
      >
        <section className="relative w-[232px]">
          <VStock src={Mic}></VStock>
          <VStock
            src={NotBalok}
            className="absolute top-0 right-0 h-[100px]"
          ></VStock>
        </section>
      </motion.section>
    </div>
  );
};

export default Credits;
