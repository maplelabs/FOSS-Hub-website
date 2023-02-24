/**
 * Files generated using template generator
 */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './index';

export default {
    title: 'Templates/Section/Header',
    component: Header,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

Template.bind({})
Template.args={
  title: 'OpenSource @ Maplelabs',
  text: 'At MapleLabs we contribute back.',
  logo: {
    alternateText: 'Maple Labs Logo',
    darkMode: '/images/dark-logo.svg',
    lightMode: '/images/logo.svg',
  },
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