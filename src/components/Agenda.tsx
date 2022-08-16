import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import Body from './Body';
import Title from './Title';

interface AgendaProps {
  text?: string;
  startDate?: Date | Moment;
  endDate?: Date | Moment;
}

const Agenda: React.FC<AgendaProps> = ({ text, startDate, endDate }) => {
  const target = moment();
  const [isCurrentDate, setIsCurrentDate] = useState<boolean>();

  useEffect(() => {
    setIsCurrentDate(
      endDate
        ? target.isBetween(startDate, endDate, 'days', '[)')
        : target.isBetween(startDate, startDate, 'days', '[]')
    );
  }, [isCurrentDate]);

  return (
    <div className="flex items-center w-[350px]">
      <svg height="85" width="80">
        <circle
          cx="50"
          cy="30"
          r="15"
          stroke="#FF7D4B"
          strokeWidth="2.5"
          fill={isCurrentDate ? '#FF7D4B' : 'transparent'}
        />
      </svg>
      <div className="float-left">
        <Title className="text-subHeading max-w-[200px] p-0 m-0 leading-none">
          {text}
        </Title>
        <Body className="text-[17px] p-0 m-0 leading-tight">
          {moment(startDate).format('LL')}
        </Body>
      </div>
    </div>
  );
};

export default Agenda;
