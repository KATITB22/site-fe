import React from 'react';
import logo from '../resources/foto.png';

interface RoleAvatarProps {
  className?: string;
  link?: string;
  avatarSize?: number;
}

const RoleAvatar: React.FC<RoleAvatarProps> = ({
  className,
  link,
  avatarSize,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img width={avatarSize} className={`${className}`} src={logo} />
    </div>
  );
};

export default RoleAvatar;
