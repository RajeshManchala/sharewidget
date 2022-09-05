import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '../components/title';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Random title text",
};
