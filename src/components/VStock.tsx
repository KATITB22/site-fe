import React from 'react';

interface VStockProps {
  className?: string;
}

const VStock: React.FC<VStockProps> = ({ className }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right'
      }}>
      <div className={`${className}`} />
    </div>
  );
};

export default VStock;
