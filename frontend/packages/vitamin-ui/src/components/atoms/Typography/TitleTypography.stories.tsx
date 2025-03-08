import { Meta, StoryObj } from '@storybook/react';
import { BaseTitleWrapper } from './BaseTypography';

const meta: Meta<typeof BaseTitleWrapper> = {
  title: 'atoms/Typography/TtitleTypography',
  component: BaseTitleWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: [undefined, 'secondary', 'success', 'warning', 'danger'] },
    level: { control: 'select', options: [1, 2, 3, 4] },
  },
};

export default meta;

type Story = StoryObj<typeof BaseTitleWrapper>;

export const BaseTitle: Story = {
  args: {
    children: 'Hello World',
    type: undefined,
    level: 1,
  },
};
