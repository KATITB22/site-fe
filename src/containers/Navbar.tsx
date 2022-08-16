import React from 'react';
import NavDropdown from '../components/navbar/NavDropdown';
import NavIcon from '../components/navbar/NavIcon';
import { NavItemProps } from '../components/navbar/NavItem';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
}

const Navbar: React.FC<NavbarProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <nav className="-mt-12 px-8 bg-tertiaryYellow flex sticky top-4 z-[99]">
      <div className="mr-auto">
        <NavIcon />
      </div>
      <ul className="gap-16 hidden xl:flex">{children}</ul>
      <div className="block xl:hidden">
        <NavDropdown isOpen={isOpen} setIsOpen={setIsOpen}>
          {children}
        </NavDropdown>
      </div>
    </nav>
  );
};

export default Navbar;
