import React from 'react';
import type { Preview } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import 'antd/dist/reset.css'; // 추가
import { StyleProvider } from '@ant-design/cssinjs'; // 추가

import '../src/styles/global.less'; // 추가
import i18n from '../src/i18n';
import { ThemeProvider } from '../src/contexts/ThemeContext';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <StyleProvider hashPriority="high">
          <ThemeProvider>
            <I18nextProvider i18n={i18n}>
              <Story />
            </I18nextProvider>
          </ThemeProvider>
        </StyleProvider>
      );
    },
  ],  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
