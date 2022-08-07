import React from 'react';
import rectangle from '../resources/rectangle.png';

interface VStockProps {
  className?: string;
  src?: string;
}

const VStock: React.FC<VStockProps> = ({ className, src }) => {
  return (
    <div>
      <img className={`${className} pointer-events-none`} src={src ? src : rectangle} />
    </div>
  );
};

export default VStock;
