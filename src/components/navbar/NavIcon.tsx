import React from 'react';

interface NavIconProps {
  darkMode: boolean;
}

const NavIcon: React.FC<NavIconProps> = ({ darkMode }) => {
  return (
    <div className="pt-2 pb-2.5">
      <div className="w-10 h-10 rounded-full bg-grey absolute -top-2" />
      <div
        className={`ml-12 font-magilio ${
          darkMode ? 'text-quarternaryYellow' : 'text-primaryBlack'
        }`}
      >
        KAT ITB 2022
      </div>
    </div>
  );
};

export default NavIcon;
