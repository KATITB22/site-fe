import React from 'react';
import logo from '../resources/logo.png'

interface MainLogoProps {
  className?: string;
}

const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img 
        width={200}
        className={`${className}`} 
        src={logo}
      />
    </div>
  );
};

export default MainLogo;
