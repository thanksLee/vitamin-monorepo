import type { Meta, StoryObj } from '@storybook/react';
import { SignInHeader } from './SignInHeader';
import * as S from './index.styled';

const meta = {
  title: 'Organisms/Header/SignInHeader',
  component: SignInHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '로그인 페이지에서 사용할 헤더',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <S.SignInContainer>
        <Story />
      </S.SignInContainer>
    ),
  ],
} satisfies Meta<typeof SignInHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 헤더 상태 */
export const Default: Story = {
  args: {
    isSignedIn: false,
  },
};

/** 로그인 상태 표시 */
export const SignedIn: Story = {
  args: {
    isSignedIn: true,
    userName: '김유저',
  },
};

/** 로그아웃 상태 표시 */
export const SignedOut: Story = {
  args: {
    isSignedIn: false,
  },
};
