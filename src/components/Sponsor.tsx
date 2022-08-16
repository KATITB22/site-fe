import React from 'react';
import { sponsor } from '../utils/sponsorMedpar';

const Sponsor: React.FC = () => {
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
      {sponsor.map((elmt, idx) => (
        <img
          src={elmt.src}
          alt={elmt.name}
          key={idx}
          className={`${getSponsorHeight(elmt.size)} mx-2 mt-10`}
        />
      ))}
    </div>
  );
};

export default Sponsor;
