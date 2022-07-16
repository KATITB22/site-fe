import React from 'react';

interface TimelineWaveTopProps {
  height?: number;
  width?: number;
}

const TimelineWaveTop: React.FC<TimelineWaveTopProps> = ({ width }) => {
  return (
    <div
      style={{backgroundColor: '#FFEBB0'}}>
      <svg
        width="100%"
        height={297}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 98.018l107-7.67c106-8.524 320-24.718 533 23.865 213 49.435 427 163.648 640 180.694 213 16.195 427-65.629 533-106.541l107-40.912V0H0v98.018z"
          fill="#FFFCF2"
        />
      </svg>
    </div>
  );
};

export default TimelineWaveTop;
