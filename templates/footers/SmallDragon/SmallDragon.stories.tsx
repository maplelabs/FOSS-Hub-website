/**
 * Files generated using template generator
 */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SmallDragon from './index';

export default {
  title: 'Templates/Footers/SmallDragon',
  component: SmallDragon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SmallDragon>;

export const Template: ComponentStory<typeof SmallDragon> = (args) => (
  <SmallDragon {...args} />
);

Template.bind({});
Template.args = {
  copyRight: `Copyright © 2023 MapleLabs. All rights reserved.`,
  address: [
    {
      name: 'INDIA OFFICE',
      address:
        '152, Siddhi Vinayak Towers, Sarjapur - Marathahalli Road, Jakkasandra, 1st Block, Koramangala, Bangalore – 560034',
    },
    {
      name: 'USA OFFICE',
      address: '1248 Reamwood Ave, Sunnyvale, CA 94089',
    },
  ],
  terms: [
    {
      text: 'Privacy Policy',
      url: 'https://www.maplelabs.com/privacy_policy.html',
    },
    {
      text: 'Terms of Use',
      url: 'https://www.maplelabs.com/terms.html',
    },
    {
      text: 'Cookie Policy',
      url: 'https://www.maplelabs.com/cookies.html',
    },
  ],
  subSections: [
    {
      title: 'SERVICES',
      list: [
        {
          text: 'Performance Engineering',
          url: 'https://www.maplelabs.com/performance-engineering.html',
        },
        { text: 'Dev Ops', url: 'https://www.maplelabs.com/devops.html' },
        {
          text: 'Site Reliability Engineering',
          url: 'https://www.maplelabs.com/sreops.html',
        },
        {
          text: 'Implementation Services',
          url: 'https://www.maplelabs.com/services.html',
        },
      ],
    },
    {
      title: 'COMPANY',
      list: [
        {
          text: 'Our Products',
          url: 'https://www.snappyflow.io/',
        },
        {
          text: 'What we do?',
          url: 'https://www.maplelabs.com/index.html',
        },
        {
          text: 'Careers',
          url: 'https://jobs.maplelabs.com/jobs/Careers',
        },
        {
          text: 'Contact Us',
          url: 'https://www.maplelabs.com/getstarted.html',
        },
      ],
    },
  ],
  social: {
    title: 'CONNECT SOCIAL',
    list: [
      {
        text: 'linkedin',
        url: 'https://in.linkedin.com/company/maplelabs-cloud-solutions',
      },
      {
        text: 'instagram',
        url: 'https://www.instagram.com/maplelabs',
      },
    ],
  },
};
