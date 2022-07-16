import React from 'react';
import CarouselCard from '../components/CarouselCard';
import MainLogo from '../components/MainLogo';
import OverlapTitle from '../components/OverlapTitle';

const Hero: React.FC = () => {
  return (
    <div className="bg-primaryCream w-[100vw] xs:px-20 sm:px-36 py-14">
      <OverlapTitle className="top-60 left-0 right-0 text-center">
        Lorem &nbsp; <br/> &ensp; Ipsum
      </OverlapTitle>
      <MainLogo />
    </div>
  );
};

export default Hero;
