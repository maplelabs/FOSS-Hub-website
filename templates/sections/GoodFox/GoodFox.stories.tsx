/**
 * Files generated using template generator
 */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import GoodFox from './index';

export default {
  title: 'Templates/Section/GoodFox | Lists,Grids',
  component: GoodFox,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GoodFox>;

export const Template: ComponentStory<typeof GoodFox> = (args) => <GoodFox {...args} />;

Template.bind({})
Template.args = {
  title: 'Featured Projects',
  listItems: [{
    title: 'OpenSource Portal',
    description: 'This is a portal which hosts the code for MapleLab`s Opensource website. You can contribute to this repo and add templates.',
    link: '',
    icon: { icon: 0, color: { bg: '#F8C02F', fg: '#000' } },
    languages: ['JS', 'HTML', 'CSS'],
    tags: ['Featured', 'Contributions-Welcome'],
    contributors: [{
      name: 'Nikhil Kumar',
      link: 'https://github.com/Nikhil-Kumar-ML',
      src: 'https://avatars.githubusercontent.com/u/59562466?v=4'
    },
    {
      name: 'Skanda J',
      link: 'https://github.com/Skanda-J-ML',
      src: 'https://avatars.githubusercontent.com/u/53176542?v=4'
    },
    {
      name: 'Nikhil Kumar',
      link: 'https://github.com/Nikhil-Kumar-ML',
      src: 'https://avatars.githubusercontent.com/u/59562466?v=4'
    }]
  },
  {
    title: 'Sacling Manager',
    description: 'This is a repo for scaling manager. You can contribute to this repo and add templates.',
    link: '',
    icon: {icon:1, color:{ bg: '#FE345A', fg: '#FFF' }},
    languages: ['Python', 'C++', 'Django'],
    tags: ['Featured', 'Contributions-Welcome'],
    contributors: [{
      name: 'Nikhil Kumar',
      link: 'https://github.com/Nikhil-Kumar-ML',
      src: 'https://avatars.githubusercontent.com/u/59562466?v=4'
    },
    {
      name: 'Skanda J',
      link: 'https://github.com/Skanda-J-ML',
      src: 'https://avatars.githubusercontent.com/u/53176542?v=4'
    },
    {
      name: 'Nikhil Kumar',
      link: 'https://github.com/Nikhil-Kumar-ML',
      src: 'https://avatars.githubusercontent.com/u/59562466?v=4'
    }]
  }],
  columnHeaders: [
    {
      name: 'Project Name',
      className: 'uk-width-large',
    },
    {
      name: 'Tech Stack',
      className: "uk-width-small"
    },
    {
      name: 'Category',
      className: "uk-width-small"
    },
    {
      name: 'Tags',
      className: "uk-width-small"
    },
    {
      name: 'Contributors',
      className: ""
    }
  ]
}