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
}) => {
  return (
    <div className={`relative bg-[#2F4250] ${className}`}>
      <RoleText
        className={`absolute top-10 left-0 right- text-center  ${className} ${textRoleSize}`}
      >
        {firstRole}
      </RoleText>
      <RoleText
        className={`absolute top-10 left-0 right-0 text-center  ${classNameSecond} ${textRoleSize}`}
      >
        {' '}
        {secondRole}
      </RoleText>
      <RoleAvatar avatarSize={avatarSize} />
      <RoleText className={`top-0 left-0 right-0 text-center ${textNameSize} `}>
        {name}
      </RoleText>
      <RoleText
        className={`top-0 left-0 right-0 text-center ${textJurusanSize}`}
      >
        {jurusan}
      </RoleText>
    </div>
  );
};

export default CardRole;
