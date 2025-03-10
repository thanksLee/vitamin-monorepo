import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { logger } from '@workspace/vitamin-core';
import { NotFoundTemplate } from './404Template';

const meta: Meta<typeof NotFoundTemplate> = {
  title: 'Templates/Errors/404',
  component: NotFoundTemplate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '404 페이지 템플릿',
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
