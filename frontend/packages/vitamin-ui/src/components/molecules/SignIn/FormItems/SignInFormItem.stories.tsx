import { Form } from 'antd';
import { Meta, StoryObj } from '@storybook/react';
import { SignInFormItem } from './SignInFormItem';

const meta: Meta<typeof SignInFormItem> = {
  title: 'molecules/SignIn/FormItems/SignInFormItem',
  component: SignInFormItem,
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

type Story = StoryObj<typeof SignInFormItem>;

const SingInComponent = (args: Story) => {
  return (
    <Form
      initialValues={{
        userId: '123456',
      }}
    >
      <SignInFormItem
        label="UserId"
        name="userId"
        rules={[{ message: 'Please enter your userId' }]}
        inputLength={{ min: 1, max: 10 }}
        {...args}
      />
    </Form>
  );
};

export const Default: Story = {
  render: (args) => <SingInComponent {...args} />,
  args: {
    layout: 'horizontal',
  },
};
