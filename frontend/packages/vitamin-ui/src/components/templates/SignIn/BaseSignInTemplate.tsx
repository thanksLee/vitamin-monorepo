import { BaseSignIn, BaseSignInProps, SignInHeader } from '@vitamin-ui/components';
import * as S from './index.styled';

export const BaseSignInTemplate = ({ onSubmit, loading }: BaseSignInProps) => {
  return (
    <S.SignInContainer>
      <SignInHeader />
      <S.SignInWrapper>
        <BaseSignIn onSubmit={onSubmit} loading={loading} />
      </S.SignInWrapper>
    </S.SignInContainer>
  );
};
