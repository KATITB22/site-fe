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
      <section className='absolute flex items-center md:flex-row-reverse flex-wrap w-full h-auto z-1 xs:px-20 sm:px-36 xs:top-40 md:top-52 lg:top-56 xl:top-52'>
        <section className='w-full lg:w-1/4 z-40'>
          <section className='relative xs:ml-10 w-[200px] xs:h-[40vh] md:h-[40vh] lg:h-[40vh]' >
            <TopTitle className="absolute top-14 text-right md:mr-0 lg:mr-0 xs:top-0 lg:top-6 ">
                Organo <br/> gram
            </TopTitle>
            <VStock className='absolute xs:w-40 xs:mr-0 lg:ml-0 xs:top-5 lg:top-10'/>
          </section>
        </section>
        <section className='w-full lg:w-3/4 z-40'>
          <Title className="relative top-5">
                Organogram
          </Title>
          <Texts className="relative top-5">
            Cari tahu siapa orang-orang di balik kerennya KAT ITB 2022. 
          </Texts>
          <a href="/organogram-kat">
            <CustomButton className="relative xs:top-14 sm:top-10 md:top-10 xs:py-1">Organogram KAT ITB 2022</CustomButton>
          </a>
          <a href="/divisi-it">
            <CustomButton className="relative lg:left-5 xs:top-16 sm:top-14 md:top-12 lg:top-10 xs:py-1">Bidang IT</CustomButton>
          </a>
        </section> 
      </section>
      <section className='w-full bg-primaryYellow h-56 xs:h-56 sm:h-40 lg:hidden' />
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Organogram;
