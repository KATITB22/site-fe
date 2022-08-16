import React from 'react';
import { medpar } from '../utils/sponsorMedpar';

const MediaPartner: React.FC = () => {
  const getSponsorHeight = (size: string) => {
    if (size === 'S') {
      return 'h-[30px]';
    }
    if (size === 'M') {
      return 'h-[60px]';
    }
    if (size === 'L') {
      return 'h-[90px]';
    }
    if (size === 'XL') {
      return 'h-[120px]';
    }
  };

  return (
    <div className="xs:px-0 sm:px-20 lg:px-32 xl:px-40 xxl:px-76 flex flex-wrap justify-center items-center -mt-2">
      {medpar.map((elmt, idx) => (
        <img
          src={elmt.src}
          alt={elmt.name}
          key={idx}
          className={`${getSponsorHeight(elmt.size)} mx-2 mt-4`}
        />
      ))}
    </div>
  );
};

export default MediaPartner;
