import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

interface UseBaseErrorProps {
  resetErrorBoundary: () => void;
  privateUri: string;
}

export const useBaseError = ({ resetErrorBoundary, privateUri }: UseBaseErrorProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const gotoHome = () => {
    resetErrorBoundary();
    navigate(`${privateUri}`);
  };

  useEffect(() => {
    document.title = t('public.errorTitle');
  }, [t]);

  return { t, gotoHome };
};

