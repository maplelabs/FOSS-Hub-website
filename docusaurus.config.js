// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSource @ Maplelabs',
  tagline: 'At MapleLabs we contribute back.',
  url: 'https://my-first-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/maple-favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maplelabs', // Usually your GitHub org/user name.
  projectName: 'Open-source', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true
      },
      navbar: {
      
        title: 'Open Source',
        logo: {
          alt: 'Maple Labs Logo',
          src: 'img/MapleLabs-Logo.jpg',
        },
        items: [

          {
            to: '/projects',
            position: 'right',
            label: 'Projects',
          },
          // {to: '/blog', label: 'Blog', position: 'right'}
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discord.com/channels/1020294105802219530/1020294105802219533',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/orgs/maplelabs/repositories',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} MapleLabs. All rights reserved.`,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            html: `
                <a href="https://www.maplelabs.com" target="_blank" rel="noreferrer noopener">
                  <img src="/img/maple-favicon.png" alt="Maplelabs" width="20" height="20" />
                </a>
              `,
          },
          {
            html: `<a href="https://www.maplelabs.com" target="_blank" rel="noreferrer noopener" uk-icon="discord"/>`
          },
          {
            html: `<a href="https://in.linkedin.com/company/maplelabs-cloud-solutions" target="_blank" rel="noreferrer noopener" uk-icon="linkedin"/>`
          },
          {
            html: `<a href="https://www.instagram.com/maplelabs" target="_blank" rel="noreferrer noopener" uk-icon="instagram"/>`
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MapleLabs. All rights reserved.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    scripts: ['https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit.min.js','https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit-icons.min.js'],
    stylesheets:['https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/css/uikit.min.css']
};

module.exports = config;
