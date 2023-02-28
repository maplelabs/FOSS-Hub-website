import Config from './config';
import githubService from './services/GithubService';

const config: Config = {
  render: 'static',
  header: {
    template: 'ElectricGorilla',
    data: {
      title: 'OpenSource @ MapleLabs',
      text: 'At MapleLabs we contribute back.',
      logo: {
        alternateText: 'Maple Labs Logo',
        darkMode: '/images/dark-logo.svg',
        lightMode: '/images/logo.svg',
      },
      favicon: '/images/favicon.png',
      show: true,
      menu: [
        {
          title: 'Projects',
          path: '#projects',
        },
        {
          title: 'Getting Started',
          path: '#getstarted',
        },
        {
          title: 'Blogs',
          path: '#blogs',
        },
      ],
    },
  },
  body: {
    sections: [
      {
        template: 'AggressiveClownfish',
        data: {
          title1: 'Embracing Collaboration.',
          title2: 'Embracing Open Source.',
          description:
            "We at MapleLabs believe open source solves real-world problems. We are a passionate, open-minded and focused group of software enthusiasts pushing boundaries with an aim to contribute back to open-source by developing value adding applications, tools, plugins, utilities, etc relevant to company's product/services' offerings.",

          button: {
            text: 'MapleLabs on Github',
            icon: 'github',
            url: 'https://github.com/maplelabs',
          },
          backgroundImage: '../../../images/background_intro.svg',
        },
      },
      {
        template: 'SpotlessAntelope',
        data: {
          title: 'Getting Started',
          subtitle:
            'You can get started by choosing a project you want to use/contribute-to and go to the respective github link.',
          description:
            'It is easy to get started if you join our open source discord community',
          button: {
            text: 'Click to join',
            url: 'https://discord.gg/XQudKrsmdk',
          },
          image: {
            url: '/images/questions.svg',
          },
        },
      },
      //   {
      //     template: 'UltimateCardinal',
      //     data: {
      //       title: 'Blogs',
      //       Blogs: [],
      //     },
      //   },

      {
        template: 'RainyCoral',
        data: {
          title: 'Top Contributors',
          description:
            'Meet our contributors who believe in the notion that open source brings the best out in people. Join us in building the future with open source.',
        },
        dynamicData: async () => {
          const [, topContributors] = await githubService.getHomePageData();
          const tiles = topContributors.map((item) => ({
            id: item.login,
            title: item.name || item.login,
            subtitle: item._repo[0],
            avatar: item.avatar_url,
            link: {
              icon: 'github',
              text: 'View on GitHub',
              url: item.html_url,
            },
          }));
          return { tiles };
        },
      },
    ],
  },
  footer: {
    template: 'SmallDragon',
    data: {
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
    },
  },
  pages: [{}],
};

export default config;
