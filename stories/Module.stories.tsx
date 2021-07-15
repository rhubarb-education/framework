import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Module } from '../src';
import { DefaultSlide } from './Slide.stories';


//👇 This default export determines where your story goes in the story list
export default {
  title: 'Module',
  component: Module,
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Module>> = (args) => <Module {...args} />;

export const Empty = (args) => <Module {...args} />;

export const OneSlide = (args) => (
    <Module {...args} slides={[
        DefaultSlide
    ]}/>
);

export const MultipleSlides = (args) => (
    <Module {...args} slides={[
        DefaultSlide,
        DefaultSlide,
        DefaultSlide,
    ]}/>
);