import type { Meta, StoryObj } from '@storybook/react';

import { BaseSignInTemplate } from './BaseSignInTemplate';
import { SuccessfulSubmission, ValidationError } from '@vitamin-ui/components/organisms/SignIn/BaseSignIn.stories';

const meta: Meta<typeof BaseSignInTemplate> = {
  title: 'Templates/SignIn/BaseSignIn',
  component: BaseSignInTemplate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '로그인 페이지 기본 템플릿 - 헤더와 로그인 폼을 포함',
      },
    },
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (values) => console.log('Submit values:', values),
    loading: false,
  },
};

/** 성공 상태 */
// 인터랙션 테스트 케이스
export const SuccessTemplate: Story = {
  args: Default.args,
  play: async ({ context }) => {
    await SuccessfulSubmission.play?.(context);
  },
};

export const ValidationErrorTemplate: Story = {
  args: Default.args,
  play: async ({ context }) => {
    await ValidationError.play?.(context);
  },
};
