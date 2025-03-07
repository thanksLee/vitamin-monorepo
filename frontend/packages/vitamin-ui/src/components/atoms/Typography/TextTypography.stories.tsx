import { Meta, StoryObj } from '@storybook/react';
import { BaseTextWrapper } from './BaseTypography';

const meta: Meta<typeof BaseTextWrapper> = {
  title: 'atoms/Typography/TextTypography',
  component: BaseTextWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: [undefined, 'secondary', 'success', 'warning', 'danger'] },
  },
};

export default meta;

type Story = StoryObj<typeof BaseTextWrapper>;

export const BaseText: Story = {
  args: {
    children: 'Hello World',
    type: undefined,
  },
};
