import React from 'react';

interface TextsProps {
  children: React.ReactNode;
  className?: string;
}

const Texts: React.FC<TextsProps> = ({ children, className }) => {
  return (
    <>
      <p
        className={`font-alegreyasans color-primaryBlack text-body ${className}`}
      >
        {children}
      </p>
    </>
  );
};

export default Texts;
