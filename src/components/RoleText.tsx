import React from 'react';

interface RoleTextProps {
  children: React.ReactNode;
  className?: string;
  fontSizeName?: string;
  fontSizeRole?: string;
}
const RoleText: React.FC<RoleTextProps> = ({ children, className }) => {
  return (
    <h1
      className={`font-magilio text-[#F5ECCB] ${className}`}
      style={{ position: 'relative', zIndex: '1', lineHeight: '0.9' }}
    >
      {children}
    </h1>
  );
};

export default RoleText;
