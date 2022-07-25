import React from 'react';

interface OverlapTitleProps {
  children: React.ReactNode;
  className?: string;
}
const OverlapTitle: React.FC<OverlapTitleProps> = ({ children, className }) => {
  return (
    <h1 
      className={`font-magilio text-heading ${className}`}
      style={{position: 'relative', zIndex: '1', lineHeight: '0.9'}}>
      {children}
    </h1>
  );
};

export default OverlapTitle;
