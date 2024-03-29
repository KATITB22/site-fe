/* eslint-disable max-len */
import React from 'react';

interface FooterWaveTopProps {
  height?: number;
  width?: number;
  isDarkMode?: boolean;
  embedded?: string;
}

const FooterWaveTop: React.FC<FooterWaveTopProps> = ({
  width,
  isDarkMode,
  embedded,
}) => {
  const colorPicker = () => {
    if (embedded === 'available') {
      return 'bg-primaryYellow';
    }
    return 'bg-primaryCream';
  };

  return (
    <div className={isDarkMode ? 'bg-[#2F4250]' : colorPicker()}>
      <svg
        width="100%"
        height={160}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0l80 23.59c80 23.59 240 69.957 400 69.957S800 47.18 960 54.5c160 8.135 320 70.77 480 94.36 160 22.777 320 7.321 400 0l80-8.134V160.5H0V0z"
          fill={isDarkMode ? '#4F6266' : '#FFC176'}
        />
      </svg>
    </div>
  );
};

export default FooterWaveTop;
