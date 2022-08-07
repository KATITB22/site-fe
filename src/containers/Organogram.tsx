import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import OrganogramWaveBottom from '../components/OrganogramWaveBottom';
import OrganogramWaveTop from '../components/OrganogramWaveTop';
import Texts from '../components/Texts';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import VStock from '../components/VStock';
import { getTransition } from '../utils/transition';
import LandingCloudsLeft from '../components/LandingCloudsLeft';
import LandingCloudsRight from '../components/LandingCloudsRight';

// import vistock
import bgMaskot from '../assets/img/vistock/landing/organogram/bg-maskot.svg';
import maskot1 from '../assets/img/vistock/landing/organogram/maskot1.png';
import maskot2 from '../assets/img/vistock/landing/organogram/maskot2.png';
import maskot3 from '../assets/img/vistock/landing/organogram/maskot3.png';
import maskot4 from '../assets/img/vistock/landing/organogram/maskot4.png';
import maskot5 from '../assets/img/vistock/landing/organogram/maskot5.png';
import maskot6 from '../assets/img/vistock/landing/organogram/maskot6.png';

interface OrganogramProps {
  embedded?: string;
}

const Organogram: React.FC<OrganogramProps> = ({ embedded }) => {
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

  if (embedded === 'available') {
    return (
      <div className="w-[100vw] bg-primaryCream">
        <section
          className="flex items-center justify-center lg:flex-row-reverse w-full h-[300px] xs:px-20
        lg:px-32 xl:px-40 xxl:px-80 3xl:px-96"
        >
          <motion.section
            className="relative md:w-[220px] xs:hidden lg:block self-start"
            {...getTransition('right')}
          >
            <TopTitle className="absolute text-right top-0">
              Organo <br /> gram
            </TopTitle>
            <VStock className="absolute top-5" />
          </motion.section>
          <motion.section
            className="space-y-2 lg:w-3/4 xl:w-2/3 mt-20"
            {...getTransition('left')}
          >
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
          </motion.section>
        </section>
      </div>
    );
  }

  return (
    <div className="w-[100vw] bg-primaryYellow">
      <OrganogramWaveTop width={screenSize.dynamicWidth} />
      <section
        className="flex items-center justify-center lg:flex-row-reverse w-full h-[300px] xs:px-20
      lg:px-32 xl:px-40 xxl:px-80 3xl:px-96"
      >
        <motion.section
          className="relative md:w-[220px] xs:hidden lg:block self-start"
          {...getTransition('right')}
        >
          <TopTitle className="absolute text-right top-0">
            Organo <br /> gram
          </TopTitle>
          <VStock className="absolute top-5" src={bgMaskot} />
          <VStock className="absolute w-[130px] top-[80px] -left-6" src={maskot1} />
          <VStock className="absolute w-[80px] top-[135px] left-6" src={maskot2} />
          <VStock className="absolute w-[180px] top-[90px] left-16" src={maskot3} />
          <VStock className="absolute w-[150px] top-[70px] left-40" src={maskot4} />
          <VStock className="absolute w-[90px] top-[125px] left-20" src={maskot5} />
          <VStock className="absolute w-[100px] top-[145px] left-32" src={maskot6} />
        </motion.section>
        <motion.section
          className="space-y-2 lg:w-3/4 xl:w-2/3 mt-20"
          {...getTransition('left')}
        >
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
        </motion.section>
      </section>
      <OrganogramWaveBottom width={screenSize.dynamicWidth} />
      <LandingCloudsLeft />
      <LandingCloudsRight />
    </div>
  );
};

export default Organogram;
