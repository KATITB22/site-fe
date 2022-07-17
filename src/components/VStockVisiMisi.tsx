import React from 'react';

interface VStockVisiMisiProps {
  className?: string;
}

const VStockVisiMisi: React.FC<VStockVisiMisiProps> = ({ className }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'left'
      }}>
      <div className={`${className}`} />
    </div>
  );
};

export default VStockVisiMisi;
