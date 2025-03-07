import { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Atoms/Input/PasswordInput',
  component: PasswordInput,
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

type Story = StoryObj<typeof PasswordInput>;

export const Basic: Story = {
  args: {},
};
