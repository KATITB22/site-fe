import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavIcon: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/', { replace: true })}
      className="pt-2 pb-2.5 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-grey absolute -top-2" />
      <div className="ml-12 font-magilio text-primaryBlack">KAT ITB 2022</div>
    </div>
  );
};

export default NavIcon;
