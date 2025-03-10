import type { FallbackProps } from 'react-error-boundary';
import { BaseButton } from '@vitamin-ui/components';
import BugFixing from '@assets/images/undraw-bug-fixing.svg?react';

import * as S from './index.styled';
import { useBaseError } from './hooks/useBaseError';

interface BaseErrorProps extends FallbackProps {
  privateUri: string;
}

export const BaseErrorTemplate = ({ privateUri, ...props }: BaseErrorProps) => {
  const { error, resetErrorBoundary } = props;
  const { t, gotoHome } = useBaseError({ resetErrorBoundary: resetErrorBoundary, privateUri });

  return (
    <S.ErrorMainContainer>
      {/* 첫 번째 행 - 타이틀 */}
      <S.CenterWrapper>
        <S.TypographyTitle level={3}>{t('public.errorTitle')}</S.TypographyTitle>
      </S.CenterWrapper>

      {/* 두 번째 행 - 이미지 */}
      <S.BugFixingWrapper>
        <BugFixing />
      </S.BugFixingWrapper>

      {/* 세 번째 행 - 좌측 에러 메시지 */}
      <S.LeftErrorBox>
        <S.TypographyTitle level={4}>{t('public.errorBoxTitle')}</S.TypographyTitle>
        <S.TypographyParagraph type="danger">{error.message}</S.TypographyParagraph>
      </S.LeftErrorBox>

      {/* 세 번째 행 - 우측 에러 스택 */}
      <S.RightErrorBox>
        <S.TypographyTitle level={4}>{t('public.errorBoxStack')}</S.TypographyTitle>
        <S.TypographyParagraph type="warning">{error.stack}</S.TypographyParagraph>
      </S.RightErrorBox>

      {/* 세 번째 행 - 중앙 버튼 */}
      <S.CenterButtonWrapper>
        <BaseButton type="primary" onClick={gotoHome}>
          {t('public.returnHome')}
        </BaseButton>
      </S.CenterButtonWrapper>
    </S.ErrorMainContainer>
  );
};
