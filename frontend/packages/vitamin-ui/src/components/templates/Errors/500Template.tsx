import { useNavigate } from 'react-router-dom';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButton, BaseButtonProps } from '@vitamin-ui/components';

export const ServerErrorTemplate = (props: BaseButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Result500 = (
    <Result
      status="500"
      title="500"
      subTitle={t('public.SubTitle500')}
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

  return Result500;
};
