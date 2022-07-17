import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

interface TextsProps {
  children: React.ReactNode;
  className?: string;
}

const Texts: React.FC<TextsProps> = ({ children, className }) => {
  return (
    <>
        <p className={`font-alegreyasans text-body ${className}`}>{children}</p>
    </>
  );
};

export default Texts;
