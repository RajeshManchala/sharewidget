import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pill from '../components/pill';

export default {
  title: 'Components/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: "random name",
};