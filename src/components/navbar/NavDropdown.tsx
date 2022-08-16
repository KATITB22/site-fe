import React from 'react';
import { NavItemProps } from './NavItem';
import hamburgerDefault from '../../assets/img/icons/hamburger-default.svg';
import hamburgerClose from '../../assets/img/icons/hamburger-close.svg';

interface NavDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  children,
  setIsOpen,
  isOpen,
}) => {
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative h-full w-8 flex items-center z-50">
        <button
          onClick={() => toggleButton()}
          className={`${isOpen ? 'fixed top-[25px] mr-8' : ''}`}
        >
          {!isOpen ? (
            <img src={hamburgerDefault} alt="Hamburger Menu" />
          ) : (
            <img src={hamburgerClose} alt="Hamburger Close" />
          )}
        </button>
      </div>
      <div
        hidden={!isOpen}
        className="fixed left-0 top-0 bg-secondaryYellow/90 w-full h-full z-40"
      >
        <div className="h-1/2 pl-12 flex">
          <ul className="flex flex-col gap-4 mt-auto text-subHeading">
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavDropdown;
