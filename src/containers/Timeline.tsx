import React, { useEffect, useState } from 'react';
import OverlapTitle from '../components/OverlapTitle';
import TimelineWaveBottom from '../components/TimelineWaveBottom';
import TimelineWaveTop from '../components/TimelineWaveTop';
import TimelineBar from '../components/TimelineBar';
import Title from '../components/Title';

const Timeline: React.FC = () => {
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
    <div className="relative z-[3] -mt-56">
      <TimelineWaveTop width={screenSize.dynamicWidth} />
      {/* <OverlapTitle className="xs:px-20 md:px-32 lg:px-32 xl:px-40 xxl:px-80 3xl:px-96 absolute top-48 h-0">
        imeine <br /> &emsp; KAT ITB 2022
      </OverlapTitle> */}
      <Title className="absolute top-24 xs:px-20 md:px-32 lg:px-32 xl:px-40 xxl:px-80 3xl:px-96">
        imeine <br /> &emsp; KAT ITB 2022
      </Title>
      <TimelineBar />
      <TimelineWaveBottom width={screenSize.dynamicWidth} />
    </div>
  );
};

export default Timeline;
