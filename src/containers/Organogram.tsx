import React, { useEffect, useState } from 'react';
import OrganogramWaveBottom from '../components/OrganogramWaveBottom';
import OrganogramWaveTop from '../components/OrganogramWaveTop';
import { Link } from "react-router-dom";
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
      <section className='absolute flex items-center md:flex-row-reverse flex-wrap w-full h-auto xs:px-20 sm:px-36 xs:top-24 sm:top-32 md:top-40 lg:top-36 xl:top-28'>
        <section className='relative md:w-1/4 xl:w-1/3 h-0 xs:invisible lg:h-[220px] lg:visible lg:ml-0 lg:top-0'>
            <TopTitle className="absolute text-right top-0 xl:mr-7">
                Organo <br/> gram
            </TopTitle>
            <VStock className='absolute h-[220px] w-auto top-5 xl:ml-28'/>
        </section>
        <section className='flex flex-col space-y-2 w-3/4 xl:w-2/3'>
          <Title className="relative">
                Organogram
          </Title>
          <Texts className="relative">
            Cari tahu siapa orang-orang di balik kerennya KAT ITB 2022. 
          </Texts>
          <section className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-0'>
            <Link to="/organogram-kat">
                <CustomButton className="relative w-auto xs:py-1">Organogram KAT ITB 2022</CustomButton>
            </Link>
            <Link to="/divisi-it">
                <CustomButton className="relative w-auto md:left-5 xs:py-1">Bidang IT</CustomButton>
            </Link>
          </section>
        </section> 
      </section>
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Organogram;
