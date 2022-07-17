import React from 'react';
import rectangle from '../resources/rectangle.png'

interface VStockProps {
  className?: string;
}

const VStock: React.FC<VStockProps> = ({ className }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}>
      <img
       width={200}
       className={`${className}`}
       src={rectangle} />
    </div>
  );
};

export default VStock;
