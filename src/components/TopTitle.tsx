import React from 'react';

interface TopTitleProps {
  children: React.ReactNode;
  className?: string;
}
const TopTitle: React.FC<TopTitleProps> = ({ children, className }) => {
  return (
    <h1 className={`font-magilio text-heading ${className}`}
        style={{position: 'relative', zIndex: '1', lineHeight: '0.9'}}>
      {children}
      </h1>
  );
};

export default TopTitle;
