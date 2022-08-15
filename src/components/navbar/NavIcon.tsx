import React from 'react';
import { useNavigate } from 'react-router-dom';
import OSKM from '../../assets/img/logo/LogoOnly.png';

const NavIcon: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/', { replace: true })}
      className="pt-2 pb-2.5 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full absolute -top-2 flex items-center justify-center">
        <img src={OSKM} className="w-8" alt="Logo Only" />
      </div>
      <div className="ml-12 font-magilio text-primaryBlack">
        OSKM - KAT ITB 2022
      </div>
    </div>
  );
};

export default NavIcon;
