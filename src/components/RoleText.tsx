import React from 'react';

interface RoleTextProps {
  children: React.ReactNode;
  className?: string;
  fontSizeName?: string;
  fontSizeRole?: string;
  isDarkMode?: boolean;
}
const RoleText: React.FC<RoleTextProps> = ({
  children,
  className,
  isDarkMode,
}) => {
  return (
    <h1
      className={`font-magilio  ${className} ${
        isDarkMode ? 'text-[#F5ECCB]' : 'text-[#231A51]'
      } `}
      style={{ position: 'relative', zIndex: '1', lineHeight: '0.9' }}
    >
      {children}
    </h1>
  );
};

export default RoleText;
