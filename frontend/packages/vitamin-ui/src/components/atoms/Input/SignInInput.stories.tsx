import { Meta, StoryObj } from '@storybook/react';
import { SignInInput } from './SignInInput';

const meta: Meta<typeof SignInInput> = {
  title: 'Atoms/Input/SignInInput',
  component: SignInInput,
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

type Story = StoryObj<typeof SignInInput>;

export const Basic: Story = {
  args: {
    minLength: 6,
    maxLength: 30,
  },
};
