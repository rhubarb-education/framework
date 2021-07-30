import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Button } from 'react-bootstrap';
import { Navbar, Slide } from '../src';



//👇 This default export determines where your story goes in the story list
export default {
  title: 'Slide',
  component: Slide,
  argTypes: {
    backgroundColor: {
        control: {
            type: 'color',
            presetColors:['transparent', 'black', 'blue', 'green']
        }
    },
    nextSlide: {
        action: 'next slide!'
    }
  },
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Slide>> = (args) => <Slide {...args} />;

export const DefaultSlide = Template.bind({});
DefaultSlide.args = {
  /*👇 The args you need here will depend on your component */
  header: (<Navbar/>)
};


export const WithContent = Template.bind({});
WithContent.args = {
  /*👇 The args you need here will depend on your component */
  ...DefaultSlide.args,
  children: (<h1>Content</h1>)
};


export const ContentAndFooter = Template.bind({});
ContentAndFooter.args = {
  /*👇 The args you need here will depend on your component */
  ...WithContent.args,
  footer: (<Button className="btn-3d">Next</Button>)
};

