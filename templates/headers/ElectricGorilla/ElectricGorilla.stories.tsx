/**
 * Files generated using template generator
 */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ElectricGorilla from './index';

export default {
    title: 'Templates/Section/ElectricGorilla',
    component: ElectricGorilla,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof ElectricGorilla>;

export const Template: ComponentStory<typeof ElectricGorilla> = (args) => <ElectricGorilla {...args} />;

Template.bind({})
Template.args={
  title: 'OpenSource @ Maplelabs',
  text: 'At MapleLabs we contribute back.',
  logo: {
    alternateText: 'Maple Labs Logo',
    darkMode: '/images/dark-logo.svg',
    lightMode: '/images/logo.svg',
  },
  favicon: '/images/favicon.png',
  show: true,
  menu: [
    {
      title: 'Projects',
      path: '#projects'
    },
    {
      title: 'Getting Started',
      path: '#getstarted',
    },
    {
      title: 'Blogs',
      path: '#blogs',
    }
  ]
}