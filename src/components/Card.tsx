import moment, { Moment } from 'moment';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/dist/locale/id';

interface CardProps {
  name: string;
  src: string;
  date: Date | Moment;
  url: string;
}

const Card: React.FC<CardProps> = ({ name, src, date, url }) => {
  moment.locale('id');
  const today = moment();
  const handleClick = () => {
    if (today.isBefore(date)) {
      toast.warning(
        `Maaf, web ${name} dibuka tanggal ${moment(date).format('LL')}`,
        {
          autoClose: 2000,
        }
      );
    } else {
      window.location.href = url;
    }
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
