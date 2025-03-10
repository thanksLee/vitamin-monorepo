import { useNavigate } from 'react-router-dom';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButton, BaseButtonProps } from '@vitamin-ui/components';

export const Auth403Template = (props: BaseButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Result403 = (
    <Result
      status="403"
      title="403"
      subTitle={t('public.SubTitle403')}
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

  return Result403;
};
