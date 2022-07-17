import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
      <section className='absolute flex items-center md:flex-row-reverse flex-wrap top-24 w-full h-fit z-1 xs:px-20 sm:px-36'>
        <section className='w-full md:w-1/4 z-40'>
            <TopTitle className="static top-14 text-right">
                Organo <br/> Gram
            </TopTitle>
            <VStock className='static bg-grey justify-end w-[200px] h-[250px]'/>
            {/* <div className='position-absolute bg-grey w-[20vw] w-[200px] h-[250px]'/> */}
        </section>
        <section className='w-full md:w-3/4 z-40'>
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
            <CustomButton className="relative lg:left-5 md:top-10 sm:top-14 xs:top-16">Bidang IT</CustomButton>
          </a>
        </section> 
      </section>
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Organogram;
