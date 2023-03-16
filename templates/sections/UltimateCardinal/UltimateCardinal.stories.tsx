import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import UltimateCardinal from './index';

export default {
  title: 'Templates/Section/UltimateCardinal | Blogs,Cards',
  component: UltimateCardinal,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UltimateCardinal>;

export const Template: ComponentStory<typeof UltimateCardinal> = (args) => (
  <UltimateCardinal {...args} />
);

Template.bind({});
Template.args = {
  title: 'Blogs',
  cards: [
    {
      slug: 'contributing-to-opensource',
      title: 'A Journey towards contributing to the open-source Project',
      thumbnail:
        'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
      author: 'Akhil Nair',
      authorAvatar:
        'https://ui-avatars.com/api/?background=F8C02F&color=4E2E07&name=Akhil Nair&size=128&font-size=0.4',
      path: '',
    },
    {
      slug: 'contributing-to-opensource',
      title: 'A Journey towards contributing to the open-source Project',
      thumbnail:
        'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
      author: 'Akhil Nair',
      authorAvatar:
        'https://ui-avatars.com/api/?background=F8C02F&color=4E2E07&name=Akhil Nair&size=128&font-size=0.4',
      path: '',
    },
    {
      slug: 'contributing-to-opensource',
      title: 'A Journey towards contributing to the open-source Project',
      thumbnail:
        'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
      author: 'Akhil Nair',
      authorAvatar:
        'https://ui-avatars.com/api/?background=F8C02F&color=4E2E07&name=Akhil Nair&size=128&font-size=0.4',
      path: '',
    },
  ],
};
