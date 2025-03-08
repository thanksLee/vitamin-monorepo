import { Meta, StoryObj } from '@storybook/react';
import { BaseInput } from '@vitamin-ui/components/atoms/Input';
import { BaseFormItem } from './BaseFormItem';

const meta: Meta<typeof BaseFormItem> = {
  title: 'Atoms/FormItem/BaseFormItem',
  component: BaseFormItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseFormItem>;

const FormComponent = (args: Story) => {
  return (
    <BaseFormItem label="Username" name="username" {...args}>
      <BaseInput />
    </BaseFormItem>
  );
};

export const Default: Story = {
  render: (args) => <FormComponent {...args} />,
};
