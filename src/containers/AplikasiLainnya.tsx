import React from 'react';
import CarouselCard from '../components/CarouselCard';
import Title from '../components/Title';

const AplikasiLainnya: React.FC = () => {
  return (
    <div className="bg-primaryCream w-[100vw] xs:px-20 md:px-32 lg:px-40 xl:px-40 xxl:px-80 3xl:px-96 py-14">
      <Title>
        Kunjuni aplikasi <br /> &nbsp; &nbsp;lainnya!
      </Title>
      <CarouselCard />
    </div>
  );
};

export default AplikasiLainnya;
