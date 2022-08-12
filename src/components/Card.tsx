import { Moment } from 'moment';
import React from 'react';

interface CardProps {
  name: string;
  src: string;
  date: Date | Moment;
  url: string;
}

const Card: React.FC<CardProps> = ({ name, src, date, url }) => {
  // return <div className="bg-grey h-[300px] w-[200px] text-white">{text}</div>;
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white h-[300px] w-[200px] text-white rounded-[10px] cursor-pointer hover:scale-[1.02] 
      transition-transform"
      style={{ boxShadow: '12px 11px 19px -3px rgba(0,0,0,0.75)' }}
    >
      <img className="rounded-[10px]" src={src} alt={name} />
    </div>
  );
};

export default Card;
