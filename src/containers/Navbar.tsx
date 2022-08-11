import React from 'react';
import NavDropdown from '../components/navbar/NavDropdown';
import NavIcon from '../components/navbar/NavIcon';
import { NavItemProps } from '../components/navbar/NavItem';

interface NavbarProps {
  children:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="-mt-12 px-8 bg-tertiaryYellow flex sticky top-4 z-[99]">
      <div className="mr-auto">
        <NavIcon />
      </div>
      <ul className="gap-16 hidden md:flex">{children}</ul>
      <div className="block md:hidden">
        <NavDropdown>{children}</NavDropdown>
      </div>
    </nav>
  );
};

export default Navbar;
