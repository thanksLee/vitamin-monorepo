import { Meta, StoryObj } from '@storybook/react';
import { MenuProps } from 'antd';
import { BaseDropdown } from './BaseDropdown';
import { BaseButton } from '../Button';

const meta: Meta<typeof BaseDropdown> = {
  title: 'Atoms/Dropdown/BaseDropdown',
  component: BaseDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof BaseDropdown>;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '1st menu item',
  },
  {
    key: '2',
    label: '2nd menu item',
    disabled: true,
  },
  {
    key: '3',
    label: '3rd menu item',
  },
];

export const Basic: Story = {
  render: (args) => (
    <BaseDropdown menu={{ items }} {...args}>
      <BaseButton>Mouse Over me</BaseButton>
    </BaseDropdown>
  ),
};

export const Selectable: Story = {
  render: (args) => (
    <BaseDropdown menu={{ items, selectable: true }} {...args}>
      <BaseButton>Mouse Over me</BaseButton>
    </BaseDropdown>
  ),
};
