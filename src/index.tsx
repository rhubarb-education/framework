import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './styles/toolkit.scss';

export { IModule, Module } from './components/core/Module';
export { ISlide, Slide } from './components/core/Slide';
export { Navbar } from './components/core/template/Navbar';


export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
