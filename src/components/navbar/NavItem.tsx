import React from 'react';
import { Link, To } from 'react-router-dom';

export interface NavItemProps {
  name: string;
  to: string;
  external: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, to, external }) => {
  return (
    <li className="pt-2 pb-2.5 font-alegreyasans">
      {external ? (
        <a style={{ color: '#171133' }} href={to}>
          {name}
        </a>
      ) : (
        <Link style={{ color: '#171133' }} to={to}>
          {name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;
