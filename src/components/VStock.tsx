/* eslint-disable max-len */
import React from 'react';
import rectangle from '../resources/rectangle.png';
import { motion } from 'framer-motion';
import { getTransition } from '../utils/transition';

interface VStockProps {
  className?: string;
  src?: string;
  animation?: 'left' | 'right' | 'bottom';
  animationType?: string;
  id?: string;
}

const VStock: React.FC<VStockProps> = ({
  className,
  src,
  animation,
  animationType,
}) => {
  if (animation) {
    return (
      <>
        <motion.img
          className={`${className} pointer-events-none`}
          src={src ? src : rectangle}
          {...getTransition(animation, {
            type: animationType ? animationType : '',
          })}
        />
      </>
    );
  }
  return (
    <>
      <img
        className={`${className} pointer-events-none`}
        src={src ? src : rectangle}
      />
    </>
  );
};

export default VStock;
