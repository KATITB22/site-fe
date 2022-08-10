/* eslint-disable max-len */
import React from 'react';

interface OrganogramWaveTopProps {
  height?: number;
  width?: number;
  isDarkMode?: boolean;
}

const OrganogramWaveTop: React.FC<OrganogramWaveTopProps> = ({
  width,
  isDarkMode,
}) => {
  return (
    <div className="bg-primaryCream z-1 pt-10">
      <svg
        width="100%"
        height={146}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80 28.813L0 0v146h1920v-30.75l-80-28.813C1760 57.626 1600 0 1440 0s-320 57.625-480 96.042c-160 38.416-322.5 48.613-480 38.416C320 115.25 160 57.625 80 28.813z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default OrganogramWaveTop;
