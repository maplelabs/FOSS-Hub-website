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
Template.args={
  gridListView: 
  {
    title: 'Featured Projects',
    cardDetails: [{
      id: 1,
      title: 'OpenSource Portal',
      description: 'This is a portal which hosts the code for MapleLab`s Opensource website. You can contribute to this repo and add templates.',
      link: '',
      icon: {icon:'github', color:{ bg: '#F8C02F', fg: '#000' }},
      tags: ['JS', 'HTML', 'CSS'],
      avatars: [{
        name: 'Nikhil Kumar',
        link: 'https://github.com/Nikhil-Kumar-ML',
        src: 'https://github.com/Nikhil-Kumar-ML'
      },
      {
        name: 'Skanda J',
        link: 'https://github.com/Skanda-J-ML',
        src: 'https://github.com/Skanda-J-ML'
      },
      {
        name: 'Nikhil Kumar',
        link: 'https://github.com/Nikhil-Kumar-ML',
        src: 'https://github.com/Nikhil-Kumar-ML'
      }]
    },
    {
      id: 2,
      title: 'Sacling Manager',
      description: 'This is a repo for scaling manager. You can contribute to this repo and add templates.',
      link: '',
      icon: {icon:'github', color:{ bg: '#FE345A', fg: '#FFF' }},
      tags: ['Python', 'C++', 'Django'],
      avatars: [{
        name: 'Nikhil Kumar',
        link: 'https://github.com/Nikhil-Kumar-ML',
        src: 'https://github.com/Nikhil-Kumar-ML'
      },
      {
        name: 'Skanda J',
        link: 'https://github.com/Skanda-J-ML',
        src: 'https://github.com/Skanda-J-ML'
      },
      {
        name: 'Nikhil Kumar',
        link: 'https://github.com/Nikhil-Kumar-ML',
        src: 'https://github.com/Nikhil-Kumar-ML'
      }]
    }],
    tableDetails: 
      {
        id: 1,
        tableData: [
          {
            name: 'OpenSource Portal',
            description: 'This is a portal which hosts the code for MapleLab`s Opensource website. You can contribute to this repo and add templates.',
            link: '',
            icon: {icon:'github', color:{ bg: '#F8C02F', fg: '#000' }},
            tags: ['JS', 'HTML', 'CSS'],
            topics: ['Featured', 'Contributions-Welcome'],
            avatars: [{
              name: 'Nikhil Kumar',
              link: 'https://github.com/Nikhil-Kumar-ML',
              src: 'https://github.com/Nikhil-Kumar-ML'
            },
            {
              name: 'Skanda J',
              link: 'https://github.com/Skanda-J-ML',
              src: 'https://github.com/Skanda-J-ML'
            },
            {
              name: 'Nikhil Kumar',
              link: 'https://github.com/Nikhil-Kumar-ML',
              src: 'https://github.com/Nikhil-Kumar-ML'
            }] 
          },
          {
            name: 'Sacling Manager',
            description: 'This is a repo for scaling manager. You can contribute to this repo and add templates.',
            link: '',
            icon: {icon:'github', color:{ bg: '#FE345A', fg: '#FFF' }},
            tags: ['Python', 'C++', 'Django'],
            topics: ['Featured', 'Contributions-Welcome'],
            avatars: [{
              name: 'Nikhil Kumar',
              link: 'https://github.com/Nikhil-Kumar-ML',
              src: 'https://github.com/Nikhil-Kumar-ML'
            },
            {
              name: 'Skanda J',
              link: 'https://github.com/Skanda-J-ML',
              src: 'https://github.com/Skanda-J-ML'
            },
            {
              name: 'Nikhil Kumar',
              link: 'https://github.com/Nikhil-Kumar-ML',
              src: 'https://github.com/Nikhil-Kumar-ML'
            }]
          }]
      }

  }
}