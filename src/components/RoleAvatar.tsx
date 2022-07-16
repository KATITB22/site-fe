import React from 'react';
import logo from '../resources/logo.png';

interface RoleAvatarProps {
  className?: string;
  link?: string;
}

const RoleAvatar: React.FC<RoleAvatarProps> = ({ className, link }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img width={200} className={`${className}`} src={logo} />
    </div>
  );
};

export default RoleAvatar;
