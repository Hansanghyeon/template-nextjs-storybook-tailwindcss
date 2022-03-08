import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '장바구니',
};

export const Naver = Template.bind({});
Naver.args = {
  type: 'naver',
};

export const Heart = Template.bind({});
Heart.args = {
  type: 'heart',
};

export const Black = Template.bind({});
Black.args = {
  type: 'black',
  children: '구매하기',
};
