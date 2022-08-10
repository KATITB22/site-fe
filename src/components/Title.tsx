import { motion } from 'framer-motion';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(function Title(
  { children, className, isDarkMode },
  ref
) {
  return (
    <h1
      className={`font-magilio text-heading ${className} ${
        isDarkMode ? 'text-primaryCream' : 'text-primaryBlack'
      }`}
      ref={ref}
    >
      {children}
    </h1>
  );
});

export const MotionTitle = motion(Title);

export default Title;
