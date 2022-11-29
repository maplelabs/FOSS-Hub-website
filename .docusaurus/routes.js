import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '176'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '069'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f93'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c33'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd1e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1d8'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'a33'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e41'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '916'),
    exact: true
  },
  {
    path: '/blog/blog',
    component: ComponentCreator('/blog/blog', 'a07'),
    exact: true
  },
  {
    path: '/contributors',
    component: ComponentCreator('/contributors', 'f60'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e73'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', '94b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e0e'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'da9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
