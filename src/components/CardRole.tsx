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
}) => {
  return (
    <div
      className={`relative ${
        isDarkMode ? 'bg-[#2F4250' : 'bg-[#FFFCF2]'
      } ${cardClassName}`}
    >
      <div className={`${classRole}`}>
        <RoleText
          className={`absolute top-10 left-0 right- text-center ${className} ${textRoleSize}`}
          isDarkMode={isDarkMode}
        >
          {firstRole}
        </RoleText>
        <RoleText
          className={`absolute top-10 left-0 right-0 text-center  ${classNameSecond} ${textRoleSize}`}
          isDarkMode={isDarkMode}
        >
          {' '}
          {secondRole}
        </RoleText>
      </div>
      <RoleAvatar avatarSize={avatarSize} />
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
  );
};

export default CardRole;
