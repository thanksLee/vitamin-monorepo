import { Meta, StoryObj } from '@storybook/react';

import { BaseInput } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
  title: 'Atoms/Input/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    minLength: { control: 'number' },
    maxLength: { control: 'number' },
    allowClear: { control: 'boolean' },
    status: { control: 'select', options: ['default', 'error', 'warning'] },
    placeholder: { control: 'text' },
    showCount: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Basic: Story = {
  args: {},
};
