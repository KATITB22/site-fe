/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';

import React from 'react';
import NavItem from './navbar/NavItem';

interface DropdownProps {
  title: string;
  items: React.ReactElement[];
  position: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  position = 'right',
}) => {
  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="pt-2 pb-2.5 font-alegreyasans">
            {title}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ${position}-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {items.map((item, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => (
                  <div
                    className={`px-1 py-1 flex items-center justify-center ${
                      active ? 'bg-tertiaryYellow' : ''
                    }`}
                  >
                    {item}
                  </div>
                )}
              </Menu.Item>
            ))}
            {/* {items.map((item, idx) => (
              <div
                key={idx}
                className="px-1 py-1 flex items-center justify-center "
              >
                <Menu.Item>{({ active }) => item}</Menu.Item>
              </div>
            ))} */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
