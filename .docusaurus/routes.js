import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '99f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fda'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '358'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '667'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ae2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1e2'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '1e2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '398'),
    exact: true
  },
  {
    path: '/blog/openapi-generator',
    component: ComponentCreator('/blog/openapi-generator', '72a'),
    exact: true
  },
  {
    path: '/contributors',
    component: ComponentCreator('/contributors', '328'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'fa8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ec7'),
    routes: [
      {
        path: '/docs/blog',
        component: ComponentCreator('/docs/blog', '751'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/blog1',
        component: ComponentCreator('/docs/blog1', '628'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/blog2',
        component: ComponentCreator('/docs/blog2', '6b9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/blog3',
        component: ComponentCreator('/docs/blog3', '822'),
        exact: true,
        sidebar: "defaultSidebar"
      },
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
    component: ComponentCreator('/', 'f24'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
