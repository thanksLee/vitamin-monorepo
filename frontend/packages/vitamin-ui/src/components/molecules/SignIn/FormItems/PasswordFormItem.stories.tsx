import { Form } from 'antd';
import { Meta, StoryObj } from '@storybook/react';
import { PasswordFormItem } from './PasswordFormItem';

const meta: Meta<typeof PasswordFormItem> = {
  title: 'molecules/SignIn/FormItems/PasswordFormItem',
  component: PasswordFormItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    layout: { control: 'select', options: ['horizontal', 'vertical', 'inline'] },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordFormItem>;

const PasswordFormItemComponent = (args: Story) => {
  return (
    <Form
      initialValues={{
        password: '123456',
      }}
    >
      <PasswordFormItem
        label="Password"
        name="password"
        rules={[{ message: 'Please enter your password' }]}
        ruleMessage="Please enter your password"
        inputLength={{ min: 1, max: 10 }}
        {...args}
      />
    </Form>
  );
};

export const Default: Story = {
  render: (args) => <PasswordFormItemComponent {...args} />,
  args: {
    layout: 'horizontal',
  },
};
