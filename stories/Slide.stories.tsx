import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Navbar, Slide } from '../src';



//π This default export determines where your story goes in the story list
export default {
    title: 'Slide',
    component: Slide,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'color',
                presetColors: ['transparent', 'black', 'blue', 'green']
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

//π We create a βtemplateβ of how args map to rendering
const Template: Story<ComponentProps<typeof Slide>> = (args) => <Slide {...args} />;

export const DefaultSlide = Template.bind({});
DefaultSlide.args = {
    /*π The args you need here will depend on your component */
    header: (<Navbar />),
};


export const WithContent = Template.bind({});
WithContent.args = {
    /*π The args you need here will depend on your component */
    ...DefaultSlide.args,
    children: (<Container className="h-100"><Row className="h-100 align-items-center"><h1>Content</h1></Row></Container>)
};


export const ContentAndFooter = Template.bind({});
ContentAndFooter.args = {
    /*π The args you need here will depend on your component */
    ...WithContent.args,
    footer: (<Button className="btn-3d">Next</Button>)
};

