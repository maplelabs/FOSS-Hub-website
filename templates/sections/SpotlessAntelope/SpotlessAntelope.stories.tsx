import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SpotlessAntelope from './index';

export default {
  title: 'Templates/Section/SpotlessAntelope | Card',
  component: SpotlessAntelope,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SpotlessAntelope>;

export const Template: ComponentStory<typeof SpotlessAntelope> = (args) => (
  <SpotlessAntelope {...args} />
);

Template.bind({});
Template.args = {
  title: 'Getting Started',
  subtitle:
    'You can get started by choosing a project you want to use/contribute-to and go to the respective github link.',
  description:
    'It is easy to get started if you join our open source discord community',
  button: {
    text: 'Click to join',
    url: '',
  },
  image: {
    url: '/images/questions.svg',
  },
};
