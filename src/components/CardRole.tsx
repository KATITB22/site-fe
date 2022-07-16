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
}

const CardRole: React.FC<CardRoleProps> = ({
  className,
  firstRole,
  secondRole,
  name,
  jurusan,
}) => {
  return (
    <div className={`bg-[#2F4250] ${className}`}>
      <RoleText className="top-5 left-0 right-0 text-center text-heading">
        {firstRole} &nbsp; <br /> &ensp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{' '}
        {secondRole}
      </RoleText>
      <RoleAvatar />
      <RoleText className="top-0 left-0 right-0 text-center">{name}</RoleText>
      <RoleText className="top-0 left-0 right-0 text-center">{jurusan}</RoleText>
    </div>
  );
};

export default CardRole;
