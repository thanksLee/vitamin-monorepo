import { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'Atoms/Button/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['primary', 'default', 'dashed', 'text', 'link'] },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    danger: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['large', 'middle', 'small'] },
    disabled: { control: 'boolean' },
    htmlType: { control: 'select', options: ['submit', 'reset', 'button'] },
    //color: { control: 'select', options: PresetColors },
  },
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    onClick: () => alert('Hi'),
    htmlType: 'button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
};

export const WithForm: Story = {
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
      onReset={() => alert('Form reset!')}
    >
      <BaseButton {...args} />
    </form>
  ),
  args: {
    type: 'primary',
    children: 'Submit Button',
    htmlType: 'submit',
  },
};
