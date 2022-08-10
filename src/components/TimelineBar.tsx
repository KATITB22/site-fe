import React, { useState } from 'react';
import Agenda from './Agenda';
import VerticalLine from './VerticalLine';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';
import moment from 'moment';
interface TimelineBarProps {
  text?: string;
  date?: Date;
}

const timelineData = [
  {
    text: 'OSKM',
    date: moment().add(1, 'days'),
  },
  {
    text: 'Dikpus',
    date: moment().add(2, 'days'),
  },
  {
    text: 'OHU',
    date: moment().add(3, 'days'),
  },
  {
    text: 'OSKM2',
    date: moment().add(4, 'days'),
  },
  {
    text: 'Dikpus2',
    date: moment().add(5, 'days'),
  },
  {
    text: 'OHU2',
    date: moment().add(6, 'days'),
  },
];

const TimelineBar: React.FC<TimelineBarProps> = () => {
  const dataCount = 3;
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col bg-primaryYellow items-center justify-start xs:px-20 sm:px-36 pt-14">
      <motion.div>
        {timelineData.slice(0, dataCount).map((data, idx) =>
          idx === dataCount - 1 ? (
            <Agenda
              key={idx}
              text={data.text}
              startDate={data.date}
              endDate={timelineData[idx + 1]?.date}
            />
          ) : (
            <React.Fragment key={idx}>
              <Agenda
                text={data.text}
                startDate={data.date}
                endDate={timelineData[idx + 1].date}
              />
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
          >
            {timelineData
              .slice(dataCount, timelineData.length)
              .map((data, idx) =>
                idx === timelineData.length - 1 ? (
                  <Agenda
                    key={idx}
                    text={data.text}
                    startDate={data.date}
                    endDate={timelineData[idx + dataCount + 1]?.date}
                  />
                ) : (
                  <React.Fragment key={idx}>
                    <VerticalLine />
                    <Agenda
                      text={data.text}
                      startDate={data.date}
                      endDate={timelineData[idx + dataCount + 1]?.date}
                    />
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
