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
        height={346}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 346l80-57.667c80-57.666 240-173 400-163.389 160 9.612 320 144.167 480 182.612 160 38.444 320-19.223 480-67.278 160-48.056 320-86.5 400-105.722l80-19.223V0H0v346z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default TimelineWaveBottom;
