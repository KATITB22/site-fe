import React from 'react';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}
const Body: React.FC<BodyProps> = ({ children, className }) => {
  return (
    <h1
      className={`${className}`}
      style={{fontFamily: "Alegreya Sans"}}>
        {children}
    </h1>
  );
};

export default Body;
