import '../styles/globals.css';
import 'uikit/dist/css/uikit.css';
import React from 'react';
import * as NextImage from 'next/image';
import UIkit from '../components/uikit';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <UIkit>
      <Story />
    </UIkit>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
