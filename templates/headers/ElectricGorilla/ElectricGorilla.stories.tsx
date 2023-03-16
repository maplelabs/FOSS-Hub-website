import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ElectricGorilla from './index';

export default {
  title: 'Templates/Headers/ElectricGorilla',
  component: ElectricGorilla,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ElectricGorilla>;

export const Template: ComponentStory<typeof ElectricGorilla> = (args) => (
  <ElectricGorilla {...args} />
);

Template.bind({});
Template.args = {
  logo: {
    darkMode: '/images/dark-logo.svg',
    lightMode: '/images/light-logo.svg',
  },
  menu: [
    {
      title: 'Projects',
      path: '#projects',
    },
    {
      title: 'Getting Started',
      path: '#getstarted',
    },
    {
      title: 'Blogs',
      path: '#blogs',
    },
  ],
};
