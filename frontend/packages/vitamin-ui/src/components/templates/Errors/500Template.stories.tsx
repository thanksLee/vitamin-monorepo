import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { logger } from '@workspace/vitamin-core';
import { ServerErrorTemplate } from './500Template';

const meta: Meta<typeof ServerErrorTemplate> = {
  title: 'Templates/Errors/500',
  component: ServerErrorTemplate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '500 페이지 템플릿',
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
