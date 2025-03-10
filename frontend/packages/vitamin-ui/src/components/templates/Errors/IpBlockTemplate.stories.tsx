import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { IpBlockTemplate } from './IpBlockTemplate';

const meta: Meta<typeof IpBlockTemplate> = {
  title: 'Templates/Errors/IpBlockTemplate',
  component: IpBlockTemplate,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IpBlockTemplate>;

export const Default: Story = {
  args: {
    ipAddress: '192.168.1.1',
  },
};

export const Large: Story = {
  args: {
    ipAddress: '192.168.1.1',
  },
};

export const Small: Story = {
  args: {
    ipAddress: '192.168.1.1',
  },
};
