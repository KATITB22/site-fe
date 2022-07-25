/* eslint-disable max-len */
import React from 'react';

interface OrganogramWaveBottomProps {
  height?: number;
  width?: number;
  isDarkMode?: boolean;
}

const OrganogramWaveBottom: React.FC<OrganogramWaveBottomProps> = ({
  width,
  isDarkMode,
}) => {
  return (
    <div className="bg-primaryCream z-1">
      <svg
        width="100%"
        height={219}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1920 20.018h-107c-110.5 0-320.5-6.518-533 16.195-212.5 22.712-427 163.648-640 180.694-213 16.194-427-65.629-533-106.541L0 69.454V0h1920v20.018z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default OrganogramWaveBottom;
