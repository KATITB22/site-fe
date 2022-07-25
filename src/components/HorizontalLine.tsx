import React from 'react';

interface HorizontalLineProps {
    text?: string;
    date?: Date;
  }
  
  const HorizontalLine: React.FC<HorizontalLineProps> = ({ text, date }) => {
    return (
    <div className='items-center hidden md:flex'>
      <svg height="85" width="130">
        <line x1="30" y1="30" x2="130" y2="30" stroke="#FF7D4B" stroke-width="2.5" />
      </svg> 
    </div>
    );
  };
  
  export default HorizontalLine;