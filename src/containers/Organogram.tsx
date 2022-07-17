import React, { useEffect, useState } from 'react';
import OrganogramWaveBottom from '../components/OrganogramWaveBottom';
import OrganogramWaveTop from '../components/OrganogramWaveTop';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import Texts from '../components/Texts';
import VStock from '../components/VStock';
import CustomButton from '../components/CustomButton';

const Organogram: React.FC = () => {
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

  return (
    <div className="relative w-[100vw]">
      <OrganogramWaveTop width={screenSize.dynamicWidth} />
      <section className='absolute flex items-center md:flex-row-reverse flex-wrap top-24 w-full h-auto z-1 xs:px-20 sm:px-36'>
        <section className='w-full lg:w-1/4 z-40'>
            <TopTitle className="static top-14 text-right">
                Organo <br/> gram
            </TopTitle>
            <VStock className='static ml-2 sm:ml-28 lg:ml-2'/>
        </section>
        <section className='w-full lg:w-3/4 z-40'>
          <Title className="relative top-5">
                Organogram
          </Title>
          <Texts className="relative top-5">
            Cari tahu siapa orang-orang di balik kerennya KAT ITB 2022. 
          </Texts>
          <a href="/organogram-kat">
            <CustomButton className="relative md:top-10 sm:top-12 xs:top-14">Organogram KAT ITB 2022</CustomButton>
          </a>
          <a href="/divisi-it">
            <CustomButton className="relative lg:left-5 md:top-12 sm:top-14 xs:top-16">Bidang IT</CustomButton>
          </a>
        </section> 
      </section>
      <section className='w-full bg-primaryYellow h-56 xs:h-56 md:h-32 lg:hidden' />
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Organogram;
