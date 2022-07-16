import React, { useEffect, useState } from 'react';
import FooterWaveTopOrganogram from '../components/FooterWaveTopOrganogram';
import Title from '../components/Title';

const FooterOrganogramKAT: React.FC = () => {
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
      <Title className="absolute top-40 left-0 right-0 text-center text-[#F5ECCB]">
        Sponsor
      </Title>
      <FooterWaveTopOrganogram width={screenSize.dynamicWidth} />
    </div>
  );
};

export default FooterOrganogramKAT;
