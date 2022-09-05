import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Learn from '../components/learn';

export default {
  title: 'Components/Learn',
  component: Learn,
} as ComponentMeta<typeof Learn>;

const Template: ComponentStory<typeof Learn> = (args) => <Learn {...args} />;

export const WithLink = Template.bind({});

WithLink.args = {
    showLink: true,
};

export const WithoutLink = Template.bind({});

WithoutLink.args = {
    showLink: false,
};
