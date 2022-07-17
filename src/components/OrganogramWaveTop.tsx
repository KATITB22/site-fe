/* eslint-disable max-len */
import React from 'react';

interface OrganogramWaveTopProps {
  height?: number;
  width?: number;
  isDarkMode?: boolean;
}

const OrganogramWaveTop: React.FC<OrganogramWaveTopProps> = ({ width, isDarkMode }) => {
  return (
    <div className="bg-primaryCream z-1">
      <svg
        width="100%"
        height={375}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
        z={"1"}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0l80 28.813c80 28.812 240 86.437 400 105.645 160 19.209 320 0 480-38.416C1120 57.625 1280 0 1440 0s320 57.625 400 86.438l80 28.812V461H0V0z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default OrganogramWaveTop;
