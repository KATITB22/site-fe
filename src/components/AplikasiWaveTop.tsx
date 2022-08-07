import React from 'react';

interface AplikasiWaveTopProps {
  height?: number;
  width?: number;
}

const AplikasiWaveTop: React.FC<AplikasiWaveTopProps> = () => {
  return (
    <div className="bg-primaryCream">
      <svg
        width="100%"
        height={201}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        textAnchor="middle"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1920 172.5h-160c-160 0-480 0-800-28.75s-640-86.25-800-115L0 0v201h1920v-28.5z"
          fill="#FFEBB0"
        />
      </svg>
    </div>
  );
};

export default AplikasiWaveTop;
