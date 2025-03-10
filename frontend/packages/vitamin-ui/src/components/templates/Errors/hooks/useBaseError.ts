import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { logger } from '@workspace/vitamin-core';

interface UseBaseErrorProps {
  resetErrorBoundary: () => void;
  privateUri: string;
}

export const useBaseError = ({ resetErrorBoundary, privateUri }: UseBaseErrorProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const gotoHome = () => {
    resetErrorBoundary();
    logger.debug(`gotoHome : ${privateUri}`);
    navigate(`${privateUri}`);
  };

  useEffect(() => {
    document.title = t('public.errorTitle');
  }, [t]);

  logger.debug(`useBaseError : ${privateUri}`);
  return { t, gotoHome };
};
