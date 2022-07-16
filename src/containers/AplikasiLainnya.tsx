import React from 'react';
import CarouselCard from '../components/CarouselCard';
import Title from '../components/Title';

const AplikasiLainnya: React.FC = () => {
  return (
    <div className="bg-primaryCream w-[100vw] xs:px-20 sm:px-36 py-14">
      <Title>Aplikasi Lainnya</Title>
      <CarouselCard />
    </div>
  );
};

export default AplikasiLainnya;
