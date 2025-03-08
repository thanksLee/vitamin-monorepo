import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import i18n from '@/i18n';
import { BaseSignIn } from './BaseSignIn';
import * as S from './signin.styled';

const meta: Meta<typeof BaseSignIn> = {
  title: 'Organisms/SignIn',
  component: BaseSignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <S.SignInWrapper>
        <Story />
      </S.SignInWrapper>
    ),
  ],
} satisfies Meta<typeof BaseSignIn>;

export default meta;
type Story = StoryObj<typeof BaseSignIn>;

// 기본 상태
export const Default: Story = {
  args: {
    onSubmit: (values) => console.log('Submit values:', values),
    loading: false,
  },
};

// 로딩 상태
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

// 인터랙션 테스트 케이스
export const SuccessfulSubmission: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 사용자 입력 시뮬레이션
    await userEvent.type(canvas.getByLabelText(i18n.t('signIn.userid')), 'testuser');
    await userEvent.type(canvas.getByLabelText(i18n.t('signIn.password')), 'password123!');

    // 제출 버튼 클릭
    await userEvent.click(canvas.getByRole('button', { name: i18n.t('signIn.submit') }));
  },
};

// 유효성 검사 실패 케이스
export const ValidationError: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 빈 폼 제출 시도
    await userEvent.click(canvas.getByRole('button', { name: i18n.t('signIn.submit') }));

    // 에러 메시지 확인
    await expect(canvas.findByText(i18n.t('signIn.validation.required', { field: i18n.t('signIn.userid') })));
    await expect(canvas.findByText(i18n.t('signIn.validation.required', { field: i18n.t('signIn.password') })));
  },
};
