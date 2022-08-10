import React from 'react';

interface TimelineWaveBottomProps {
  height?: number;
  width?: number;
}

const TimelineWaveBottom: React.FC<TimelineWaveBottomProps> = ({ width }) => {
  return (
    <div className="bg-primaryCream">
      <svg
        width="100%"
        height={231}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 231l79.958-57.667C159.917 115.667 319.833.333 479.75 9.944c159.917 9.612 319.833 144.167 479.75 182.612 
          159.92 38.444 319.83-19.223 479.75-67.278 159.92-48.056 319.83-86.5 399.79-105.722L1919 .333H0V231z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default TimelineWaveBottom;
