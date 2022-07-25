import React from 'react';
import Body from './Body';
import Title from './Title';

interface AgendaProps {
  text?: string;
  date?: Date;
}

const Agenda: React.FC<AgendaProps> = ({ text, date }) => {
  return (
    <div className="flex items-center">
      <svg height="85" width="80">
        <circle
          cx="50"
          cy="30"
          r="15"
          stroke="#FF7D4B"
          strokeWidth="2.5"
          fill="transparent"
        />
      </svg>
      <div className="float-left">
        <Title className="text-[35px] p-0 m-0 leading-none">Dikpus</Title>
        <Body className="text-[17px] p-0 m-0 leading-tight">14 Jul 2022</Body>
      </div>
    </div>
  );
};

export default Agenda;
