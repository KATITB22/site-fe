import { motion } from 'framer-motion';
import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import { getTransition } from '../utils/transition';
import Body from './Body';
import Title from './Title';

interface AgendaProps {
  text?: string;
  startDate?: Date | Moment;
  endDate?: Date | Moment;
}

const Agenda: React.FC<AgendaProps> = ({ text, startDate, endDate }) => {
  const target = moment('20220802', 'YYYYMMDD');
  const [isCurrentDate, setIsCurrentDate] = useState<boolean>();

  useEffect(() => {
    setIsCurrentDate(
      endDate
        ? target.isBetween(startDate, endDate, 'days', '[)')
        : target.isBetween(startDate, startDate, 'days', '[]')
    );
  }, [isCurrentDate]);

  return (
    <div className="flex items-center w-[300px]">
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
      <motion.div
        className="float-left"
        {...getTransition('right', { delay: 0 })}
      >
        <Title className="text-[35px] p-0 m-0 leading-none">{text}</Title>
        <Body className="text-[17px] p-0 m-0 leading-tight">
          {moment(startDate).format('LL')}
        </Body>
      </motion.div>
    </div>
  );
};

export default Agenda;
