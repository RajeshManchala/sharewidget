import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SwitchComponent from '../components/switch-component';

export default {
  title: 'Components/SwitchComponent',
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (args) => <SwitchComponent {...args} />;

export const SwitchOn = Template.bind({});

SwitchOn.args = {
    checked: true,
};

export const SwitchOff = Template.bind({});

SwitchOff.args = {
    checked: false,
};
