import { AnimatePresence, motion } from 'framer-motion';
import moment from 'moment';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { getTransition } from '../utils/transition';
import Agenda from './Agenda';
import VerticalLine from './VerticalLine';
import 'moment/dist/locale/id';
interface TimelineBarProps {
  text?: string;
  date?: Date;
}

const timelineData = [
  {
    text: 'Opening Ceremony dan Talk Show',
    date: new Date('August 17, 2022'),
  },
  {
    text: 'Treasure Hunt',
    date: new Date('August 18, 2022'),
  },
  {
    text: 'Mentoring dan Forum Lapangan',
    date: new Date('August 19, 2022'),
  },
  {
    text: 'Talk Show dan Closing Ceremony',
    date: new Date('August 20, 2022'),
  },
];

const TimelineBar: React.FC<TimelineBarProps> = () => {
  moment.locale('id');
  const dataCount = 3;
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col bg-primaryYellow items-center justify-start xs:px-20 sm:px-36 pt-32 sm:pt-14">
      <motion.div>
        {timelineData.slice(0, dataCount).map((data, idx) => (
          <motion.div key={idx} {...getTransition('right')}>
            {idx === dataCount - 1 ? (
              <Agenda
                text={data.text}
                startDate={data.date}
                endDate={timelineData[idx + 1]?.date}
              />
            ) : (
              <>
                <Agenda
                  text={data.text}
                  startDate={data.date}
                  endDate={timelineData[idx + 1].date}
                />
                <VerticalLine />
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            variants={{
              hidden: {
                height: 0,
                transition: {
                  staggerChildren: 0.2,
                  staggerDirection: -1,
                  delay: 0.6,
                },
              },
              visible: {
                height: 'auto',
                transition: {
                  staggerChildren: 0.2,
                  when: 'beforeChildren',
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {timelineData
              .slice(dataCount, timelineData.length)
              .map((data, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: '100%' },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 1, type: 'spring' }}
                >
                  {idx === timelineData.length - 1 ? (
                    <Agenda
                      text={data.text}
                      startDate={data.date}
                      endDate={timelineData[idx + dataCount + 1]?.date}
                    />
                  ) : (
                    <>
                      <VerticalLine />
                      <Agenda
                        text={data.text}
                        startDate={data.date}
                        endDate={timelineData[idx + dataCount + 1]?.date}
                      />
                    </>
                  )}
                </motion.div>
              ))}
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
