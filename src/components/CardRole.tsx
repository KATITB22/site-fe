import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import RoleAvatar from './RoleAvatar';
import RoleText from './RoleText';

interface CardRoleProps {
  className?: string;
  link?: string;
  firstRole?: string;
  secondRole?: string;
  name?: string;
  jurusan?: string;
  avatarSize?: number;
  textRoleSize?: string;
  textNameSize?: string;
  textJurusanSize?: string;
  classNameSecond?: string;
  isDarkMode?: boolean;
  classRole?: string;
  cardClassName?: string;
  foto?: string;
  classNameAvatar?: string;
  classNameText?: string;
  classNameNama?: string;
  classNameAvatarContainer?: string;
}

const CardRole: React.FC<CardRoleProps> = ({
  className,
  classNameSecond,
  firstRole,
  secondRole,
  name,
  jurusan,
  avatarSize,
  textRoleSize,
  textJurusanSize,
  textNameSize,
  isDarkMode,
  classRole,
  cardClassName,
  classNameAvatar,
  classNameText,
  classNameNama,
  classNameAvatarContainer,
  foto,
}) => {
  return (
    <div
      className={`relative ${isDarkMode ? 'bg-[#2F4250' : ''} ${cardClassName}`}
    >
      <div className={`${classRole}`}>
        <RoleText
          className={`absolute top-0 left-0 right- text-center ${classNameText} ${textRoleSize}`}
          isDarkMode={isDarkMode}
        >
          {firstRole}
        </RoleText>
        <RoleText
          className={`absolute top-0 left-0 right-0 text-center  ${classNameSecond} ${textRoleSize}`}
          isDarkMode={isDarkMode}
        >
          {' '}
          {secondRole}
        </RoleText>
      </div>
      <div className="">
        <RoleAvatar
          classNameAvatarContainer={`${classNameAvatarContainer}`}
          avatarSize={avatarSize}
          foto={foto}
          classNameAvatar={`${classNameAvatar}`}
        />
      </div>
      <div className={`${classNameNama}`}>
        <RoleText
          className={`top-0 left-0 right-0 text-center ${textNameSize} `}
          isDarkMode={isDarkMode}
        >
          {name}
        </RoleText>
        <RoleText
          className={`top-0 left-0 right-0 text-center ${textJurusanSize}`}
          isDarkMode={isDarkMode}
        >
          {jurusan}
        </RoleText>
      </div>
    </div>
  );
};

export default CardRole;
