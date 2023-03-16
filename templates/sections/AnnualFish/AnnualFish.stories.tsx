import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AnnualFish from './index';

export default {
  title: 'Templates/Section/AnnualFish | Blogs',
  component: AnnualFish,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AnnualFish>;

export const Template: ComponentStory<typeof AnnualFish> = (args) => (
  <AnnualFish {...args} />
);

Template.bind({});
Template.args = {
  frontMatter: {
    title: 'A Journey towards contributing to the open-source Project',
    thumbnail:
      'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
    featured: true,
    starred: false,
    author: 'Akhil Nair',
    date: '01/01/2023',
    authorAvatar:
      'https://ui-avatars.com/api/?background=F8C02F&color=4E2E07&name=Akhil Nair&size=128&font-size=0.4',
  },
  content: `**[Openapi Generator](https://github.com/OpenAPITools/openapi-generator)**

  ### Introduction
  
  From the start of my career, I have been a consumer of the open-source community. It all started with using open-source tools and products. I am fascinated with the support I get from the community and the support an open-source community provides is much more than proprietary software.     
  I have always wanted to be part of a group where I could provide a solution to a problem that can help consumers of software. And I feel a straightforward way to do that is to get involved in an open-source project and contribute by solving an issue or enhancing the project.`,
  recentBlogs: [
    {
      slug: 'contributing-to-opensource',
      title: 'A Journey towards contributing to the open-source Project',
      thumbnail:
        'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
      date: '01/01/2023',
      path: '',
    },
    {
      slug: 'contributing-to-opensource',
      title: 'A Journey towards contributing to the open-source Project',
      thumbnail:
        'https://opensource.com/sites/default/files/lead-images/career_journey_road_gps_path_map_520.png',
      date: '01/01/2023',
      path: '',
    },
  ],
};
