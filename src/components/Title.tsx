import React from 'react';

interface TItleProps {
  children: React.ReactNode;
  className?: string;
}
const Title: React.FC<TItleProps> = ({ children, className }) => {
  return (
    <h1 className={`font-magilio text-heading ${className}`}>{children}</h1>
  );
};

export default Title;
