import { Meta, StoryObj } from '@storybook/react';
import { BaseParagraphWrapper } from './BaseTypography';

const meta: Meta<typeof BaseParagraphWrapper> = {
  title: 'atoms/Typography/BaseTypography',
  component: BaseParagraphWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: [undefined, 'secondary', 'success', 'warning', 'danger'] },
  },
};

export default meta;

type Story = StoryObj<typeof BaseParagraphWrapper>;

export const BaseParagraph: Story = {
  args: {
    children: 'Hello World',
    type: undefined,
  },
};
