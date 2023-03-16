import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MiniatureAardwolf from './index';

export default {
  title: 'Templates/Section/MiniatureAardwolf | Grids, Media',
  component: MiniatureAardwolf,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MiniatureAardwolf>;

export const Template: ComponentStory<typeof MiniatureAardwolf> = (args) => (
  <MiniatureAardwolf {...args} />
);

Template.bind({});
Template.args = {
  title: 'Featured Videos',
  medias: [
    {
      url: 'https://www.youtube.com/watch?v=JLmei2IUDm0',
      text: 'What, Why And How Of Open Source',
      thumbnail: '/images/videos/what-why-how-opensource.svg',
    },
  ],
};
