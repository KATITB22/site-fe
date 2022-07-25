import React, { useEffect, useState } from 'react';
import OrganogramWaveBottom from '../components/OrganogramWaveBottom';
import OrganogramWaveTop from '../components/OrganogramWaveTop';
import { Link } from 'react-router-dom';
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
    <div className="w-[100vw] bg-primaryYellow">
      <OrganogramWaveTop width={screenSize.dynamicWidth} />
      <section
        className="flex items-center justify-center lg:flex-row-reverse w-full h-[300px] xs:px-20 md:px-32 
      lg:px-40 xl:px-40 xxl:px-80 3xl:px-96"
      >
        <section className="relative md:w-[220px] xs:hidden lg:block self-start">
          <TopTitle className="absolute text-right top-0">
            Organo <br /> gram
          </TopTitle>
          <VStock className="absolute top-5" />
        </section>
        <section className="space-y-2 lg:w-3/4 xl:w-2/3 mt-20">
          <Title>Organogram</Title>
          <Texts>
            Cari tahu siapa orang-orang di balik kerennya KAT ITB 2022.
          </Texts>
          <section className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-0">
            <Link to="/organogram-kat">
              <CustomButton className="relative w-auto xs:py-1">
                Organogram KAT ITB 2022
              </CustomButton>
            </Link>
            <Link to="/divisi-it">
              <CustomButton className="relative w-auto md:left-5 xs:py-1">
                Bidang IT
              </CustomButton>
            </Link>
          </section>
        </section>
      </section>
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Organogram;
