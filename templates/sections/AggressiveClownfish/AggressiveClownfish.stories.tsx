/**
 * Files generated using template generator
 */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AggressiveClownfish from './index';

export default {
  title: 'Templates/Section/AggressiveClownfish | Covers',
  component: AggressiveClownfish,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AggressiveClownfish>;

export const Template: ComponentStory<typeof AggressiveClownfish> = (args) => (
  <AggressiveClownfish {...args} />
);

Template.bind({});
Template.args = {
  title1: 'Embracing Collabration.',
  title2: 'Embracing Open Source.',
  description:
    "We at MapleLabs believe open source solves real-world problems. We are a passionate, open-minded and focused group of software enthusiasts pushing boundaries with an aim to contribute back to open-source by developing value adding applications, tools, plugins, utilities, etc relevant to company's product/services' offerings.",

  button: {
    text: 'MapleLabs on Github',
    icon: 'github',
    url: 'https://github.com/maplelabs',
  },
  backgroundImage: '../../../images/background_intro.svg',
};
