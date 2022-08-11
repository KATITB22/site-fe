import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

const Copyright: React.FC = () => {
  return (
    <div className="pt-10 pb-4">
      <div className="w-full bg-primaryOrange flex justify-end items-center px-20 py-1 font-alegreyasans">
        <p className="flex items-center">
          <span className="pr-1">
            <AiOutlineCopyright />
          </span>
          Copyright - IT KAT ITB 2022
        </p>
      </div>
    </div>
  );
};

export default Copyright;
