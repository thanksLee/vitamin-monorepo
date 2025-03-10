import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { BaseErrorTemplate } from './BaseErrorTemplate';

const meta: Meta<typeof BaseErrorTemplate> = {
  title: 'Templates/Errors/BaseError',
  component: BaseErrorTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // Router 컨텍스트 제공
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BaseErrorTemplate>;

export const Default: Story = {
  args: {
    error: new Error('Something went wrong!'),
    resetErrorBoundary: () => console.log('Error boundary reset'),
    privateUri: '/dashboard',
  },
};

export const WithLongErrorMessage: Story = {
  args: {
    error: new Error(
      'This is a very long error message that might wrap to multiple lines. It contains detailed information about what went wrong in the application.'
    ),
    resetErrorBoundary: () => console.log('Error boundary reset'),
    privateUri: '/dashboard',
  },
};

export const WithStackTrace: Story = {
  args: {
    error: (() => {
      const error = new Error('Failed to fetch data');
      error.stack = `Error: Failed to fetch data
    at fetchData (api.ts:42:11)
    at async Component (Component.tsx:23:5)
    at async renderWithHooks (react-dom.development.js:16305:18)
    at updateFunctionComponent (react-dom.development.js:19588:20)`;
      return error;
    })(),
    resetErrorBoundary: () => console.log('Error boundary reset'),
    privateUri: '/dashboard',
  },
};
