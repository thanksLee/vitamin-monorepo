import { Meta, StoryObj } from '@storybook/react';
import { Form } from 'antd';
import { SubmitButtonFormItem } from './SubmitButtonFormItem';
import { useState } from 'react';

const meta: Meta<typeof SubmitButtonFormItem> = {
  title: 'molecules/SignIn/FormItems/SubmitButtonFormItem',
  component: SubmitButtonFormItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButtonFormItem>;

const SubmitButtonFormItemComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Form>
      <SubmitButtonFormItem loading={isLoading} onClick={handleSubmit}>
        Submit
      </SubmitButtonFormItem>
    </Form>
  );
};

export const Default: Story = {
  render: () => <SubmitButtonFormItemComponent />,
};
