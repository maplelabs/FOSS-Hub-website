/**
 * Files generated using template generator
 */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlatTiles_2 from './index';
export default {
    title: 'Templates/Section/FlatTiles_2',
    component: FlatTiles_2,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof FlatTiles_2>;

export const Template: ComponentStory<typeof FlatTiles_2> = (args) => <FlatTiles_2 {...args} />;

Template.bind({})
Template.args={
  title: 'Featured Videos',
  videos: [
    {
        url : 'https://www.youtube.com/watch?v=JLmei2IUDm0',      
        text : 'What, Why And How Of Open Source',
        thumbnail: '/images/videos/Thumbnail1.png',
    },
]
}