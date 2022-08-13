import React from 'react';

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
      <img width={avatarSize} className={` ${classNameAvatar}`} src={foto} />
    </div>
  );
};

export default RoleAvatar;
