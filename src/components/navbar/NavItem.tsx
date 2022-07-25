import React from 'react';
import { Link, To } from 'react-router-dom';

export interface NavItemProps {
  name: string;
  to: string;
  darkMode: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, to, darkMode }) => {
  return (
    <li className="pt-2 pb-2.5 font-alegreyasans">
      <Link style={{ color: `${darkMode ? '#F5ECCB' : '#171133'}` }} to={to}>
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
