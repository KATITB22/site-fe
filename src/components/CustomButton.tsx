import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className }) => {
  return (
    <>
        <button className={`bg-primaryOrange text-subHeading py-3 px-8 rounded-full font-alegreya ${className}`}>{children}</button>
    </>
  );
};

export default CustomButton;
