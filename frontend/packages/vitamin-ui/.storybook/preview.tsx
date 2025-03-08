import React from 'react';
import type { Preview } from '@storybook/react';
import 'antd/dist/reset.css'; // 추가
import { StyleProvider } from '@ant-design/cssinjs'; // 추가

import { LocaleProvider, ThemeProvider } from '../src/contexts';
import '../src/styles/global.less'; // 추가

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <StyleProvider hashPriority="high">
          <ThemeProvider>
            <LocaleProvider>
              <Story />
            </LocaleProvider>
          </ThemeProvider>
        </StyleProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
