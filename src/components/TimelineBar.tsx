import React, { useState } from 'react';
import Agenda from './Agenda';
import VerticalLine from './VerticalLine';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';
interface TimelineBarProps {
  text?: string;
  date?: Date;
}

const timelineData = [
  {
    text: 'OSKM',
    date: new Date(),
  },
  {
    text: 'Dikpus',
    date: new Date(),
  },
  {
    text: 'OHU',
    date: new Date(),
  },
  {
    text: 'OSKM2',
    date: new Date(),
  },
  {
    text: 'Dikpus2',
    date: new Date(),
  },
  {
    text: 'OHU2',
    date: new Date(),
  },
];

const TimelineBar: React.FC<TimelineBarProps> = () => {
  const dataCount = 3;
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-center flex flex-col bg-primaryYellow items-center xs:px-20 sm:px-36 pt-14">
      <motion.div>
        {timelineData.slice(0, dataCount).map((data, idx) =>
          idx === dataCount - 1 ? (
            <Agenda key={idx} text={data.text} date={data.date} />
          ) : (
            <React.Fragment key={idx}>
              <Agenda text={data.text} date={data.date} />
              <VerticalLine />
            </React.Fragment>
          )
        )}
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial={{ display: 'none', height: 0 }}
            animate={{ display: 'block', height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {timelineData
              .slice(dataCount, timelineData.length)
              .map((data, idx) =>
                idx === timelineData.length - 1 ? (
                  <Agenda key={idx} text={data.text} date={data.date} />
                ) : (
                  <React.Fragment key={idx}>
                    <VerticalLine />
                    <Agenda text={data.text} date={data.date} />
                  </React.Fragment>
                )
              )}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        onClick={handleExpand}
        style={{ fontSize: '42px', color: '#171133', cursor: 'pointer' }}
      >
        <MdKeyboardArrowDown />
      </motion.div>
    </div>
  );
};

export default TimelineBar;
