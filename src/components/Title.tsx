import React from 'react';

interface TItleProps {
  children: React.ReactNode;
}
const Title: React.FC<TItleProps> = ({ children }) => {
  return <h1 className="font-magilio text-heading">{children}</h1>;
};

export default Title;
