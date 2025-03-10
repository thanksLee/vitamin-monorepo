import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { logger } from '@workspace/vitamin-core';
import { Auth403Template } from './403Template';
const meta: Meta<typeof Auth403Template> = {
  title: 'Templates/Errors/403',
  component: Auth403Template,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '403 페이지 템플릿',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      logger.debug('jjjjjjjjj');
    },
  },
};
