import React from 'react';
import Agenda from './Agenda';
import HorizontalLine from './HorizontalLine';
import VerticalLine from './VerticalLine';

interface TimelineBarProps {
  text?: string;
  date?: Date;
}

const TimelineBar: React.FC<TimelineBarProps> = ({ text, date }) => {
  return (
    <div className="justify-center md:flex bg-primaryYellow items-center xs:px-20 sm:px-36 pt-14">
      <Agenda></Agenda>
      <HorizontalLine></HorizontalLine>
      <VerticalLine></VerticalLine>
      <Agenda></Agenda>
      <HorizontalLine></HorizontalLine>
      <VerticalLine></VerticalLine>
      <Agenda></Agenda>
    </div>
  );
};

export default TimelineBar;
