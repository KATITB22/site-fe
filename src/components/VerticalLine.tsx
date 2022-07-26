import React from 'react';

interface VerticalLineProps {
  text?: string;
  date?: Date;
}

const VerticalLine: React.FC<VerticalLineProps> = ({ text, date }) => {
  return (
    <div className="flex items-center">
      <svg height="90" width="80">
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="65"
          stroke="#FF7D4B"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
};

export default VerticalLine;
