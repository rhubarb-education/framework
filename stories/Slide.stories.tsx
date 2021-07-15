import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Slide } from '../src';



//👇 This default export determines where your story goes in the story list
export default {
  title: 'Slide',
  component: Slide,
  argTypes: {
    backgroundColor: {
        control: {
            type: 'color'
        }
    }
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Slide>> = (args) => <Slide {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  header: (<h1>Hi</h1>)
};
