import React, { useEffect, useState } from 'react';
import OverlapTitle from '../components/OverlapTitle';
import TimelineWaveBottom from '../components/TimelineWaveBottom';
import TimelineWaveTop from '../components/TimelineWaveTop';

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
    <div >
      <OverlapTitle className='xs:px-20 sm:px-36 absolute top-48 h-0'>
          Timeline <br/> &emsp; KAT ITB 2022
      </OverlapTitle>
      <TimelineWaveTop width={screenSize.dynamicWidth}/>
      <TimelineWaveBottom width={screenSize.dynamicWidth}/>
    </div>
  );
};

export default Timeline;
