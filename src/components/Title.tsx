import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}
const Title: React.FC<TitleProps> = ({ children, className, isDarkMode }) => {
  return (
    <h1
      className={`font-magilio text-heading ${className} ${
        isDarkMode ? 'text-primaryCream' : 'text-[#2F4250]'
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
