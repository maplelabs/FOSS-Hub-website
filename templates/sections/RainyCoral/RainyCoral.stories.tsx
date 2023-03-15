import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import RainyCoral from './index';

export default {
  title: 'Templates/Section/RainyCoral | Grids',
  component: RainyCoral,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RainyCoral>;

export const Template: ComponentStory<typeof RainyCoral> = (args) => (
  <RainyCoral {...args} />
);

Template.bind({});
Template.args = {
  title: 'Lorem Ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper risus rhoncus elit commodo, sed ultricies est luctus. Sed vulputate massa arcu, in pellentesque tellus consequat nec',
  tiles: [
    {
      id: 'Nikhil-Kumar-ML',
      title: 'Nikhil Kumar',
      subtitle: 'github-audit',
      avatar: 'https://avatars.githubusercontent.com/u/59562466?v=4',
      link: {
        icon: 'github',
        text: 'View on GitHub',
        url: 'https://github.com/Nikhil-Kumar-ML',
      },
    },
    {
      id: 'Skanda-J-ML',
      title: 'Skanda J',
      subtitle: 'opensource-portal',
      avatar: 'https://avatars.githubusercontent.com/u/53176542?v=4',
      link: {
        icon: 'github',
        text: 'View on GitHub',
        url: 'https://github.com/Skanda-J-ML',
      },
    },
    {
      id: 'upendrasahu',
      title: 'Upendra Sahu',
      subtitle: 'github-audit',
      avatar: 'https://avatars.githubusercontent.com/u/10721675?v=4',
      link: {
        icon: 'github',
        text: 'View on GitHub',
        url: 'https://github.com/upendrasahu',
      },
    },
    {
      id: 'Nikhil-Kumar-ML',
      title: 'Nikhil Kumar',
      subtitle: 'github-audit',
      avatar: 'https://avatars.githubusercontent.com/u/59562466?v=4',
      link: {
        icon: 'github',
        text: 'View on GitHub',
        url: 'https://github.com/Nikhil-Kumar-ML',
      },
    },
    {
      id: 'Nikhil-Kumar-ML',
      title: 'Nikhil Kumar',
      subtitle: 'github-audit',
      avatar: 'https://avatars.githubusercontent.com/u/59562466?v=4',
      link: {
        icon: 'github',
        text: 'View on GitHub',
        url: 'https://github.com/Nikhil-Kumar-ML',
      },
    },
  ],
};
