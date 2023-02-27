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
Template.args={}