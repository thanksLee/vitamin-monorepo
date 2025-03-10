import { useNavigate } from 'react-router-dom';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButton, BaseButtonProps } from '@vitamin-ui/components';

export const NotFoundTemplate = (props: BaseButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Result404 = (
    <Result
      status="404"
      title="404"
      subTitle={t('public.SubTitle404')}
      extra={
        <BaseButton
          type="primary"
          {...props}
          onClick={() => {
            navigate('/');
          }}
        >
          {t('public.returnHome')}
        </BaseButton>
      }
    />
  );

  return Result404;
};
