import React from 'react';
import { Link, To } from 'react-router-dom';

export interface NavItemProps {
  name: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, to }) => {
  return (
    <li className="pt-2 pb-2.5 font-alegreyasans">
      <Link to={to}>{name}</Link>
    </li>
  );
};

export default NavItem;
