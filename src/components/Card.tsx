import React from 'react';

interface CardProps {
  text?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ text, link }) => {
  return <div className="bg-grey h-[300px] w-[200px] text-white">{text}</div>;
};

export default Card;
