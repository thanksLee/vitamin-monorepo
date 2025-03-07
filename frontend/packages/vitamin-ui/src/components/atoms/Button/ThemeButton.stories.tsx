import { Meta, StoryObj } from '@storybook/react';
import { THEME_TYPES } from '@/constants';
import { ThemeButton } from './ThemeButton';

const meta: Meta<typeof ThemeButton> = {
  title: 'Atoms/Button/ThemeButton',
  component: ThemeButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    themeStyle: { control: 'select', options: [THEME_TYPES.LIGHT, THEME_TYPES.DARK] },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeButton>;

export const Primary: Story = {
  args: {
    themeStyle: THEME_TYPES.LIGHT,
  },
};
