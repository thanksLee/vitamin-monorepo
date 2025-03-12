import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { IpBlockErrorTemplate } from './IpBlockErrorTemplate';

const meta: Meta<typeof IpBlockErrorTemplate> = {
  title: 'Templates/Errors/IpBlockErrorTemplate',
  component: IpBlockErrorTemplate,
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
type Story = StoryObj<typeof IpBlockErrorTemplate>;

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
