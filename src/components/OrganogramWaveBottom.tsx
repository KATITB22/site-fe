/* eslint-disable max-len */
import React from 'react';

interface OrganogramWaveBottomProps {
  height?: number;
  width?: number;
  isDarkMode?: boolean;
}

const OrganogramWaveBottom: React.FC<OrganogramWaveBottomProps> = ({ width, isDarkMode }) => {
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
          d="M1920 98.018l-107-7.67c-106-8.524-320-24.718-533 23.865-213 49.435-427 163.648-640 180.694-213 16.195-427-65.629-533-106.541L0 147.454V0h1920v98.018z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default OrganogramWaveBottom;
