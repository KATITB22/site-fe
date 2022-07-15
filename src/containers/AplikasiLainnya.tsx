import React from 'react';
import CarouselCard from '../components/CarouselCard';
import Title from '../components/Title';

const AplikasiLainnya: React.FC = () => {
  return (
    <div className="bg-primaryYellow w-[100vw] px-36 py-14">
      <Title>Aplikasi Lainnya</Title>
      <CarouselCard />
    </div>
  );
};

export default AplikasiLainnya;
