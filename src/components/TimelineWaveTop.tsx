import React from 'react';

interface TimelineWaveTopProps {
  height?: number;
  width?: number;
}

const TimelineWaveTop: React.FC<TimelineWaveTopProps> = ({ width }) => {
  return (
    <div>
      <svg
        width="100%"
        height={217}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1920 217V67.454l-107 40.912c-96.65 37.303-283.09 108.619-476.69 108.634H1920zM1336.19 
          217H0V18.018l107-7.67C213 1.823 427-14.37 640 34.212c85.107 19.752 170.373 49.846 255.671 79.952 128.179 
          45.24 256.439 90.507 384.329 100.742 18.75 1.426 37.5 2.092 56.19 2.093z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default TimelineWaveTop;
