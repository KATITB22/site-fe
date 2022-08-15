import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface RoleAvatarProps {
  classNameAvatar?: string;
  link?: string;
  avatarSize?: number;
  foto?: string;
  classNameAvatarContainer?: string;
}

const RoleAvatar: React.FC<RoleAvatarProps> = ({
  classNameAvatar,
  classNameAvatarContainer,
  link,
  avatarSize,
  foto,
}) => {
  return (
    <div
      className={`${classNameAvatarContainer} `}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LazyLoadImage
        width={avatarSize}
        className={` ${classNameAvatar}`}
        src={foto}
      />
    </div>
  );
};

export default RoleAvatar;
