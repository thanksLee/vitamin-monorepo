import { BaseButton, BaseButtonProps } from '@vitamin-ui/components';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

export const ServerErrorTemplate = (props: BaseButtonProps) => {
  const { t } = useTranslation();

  const Result500 = (
    <Result
      status="500"
      title="500"
      subTitle={t('public.SubTitle500')}
      extra={
        <BaseButton type="primary" {...props}>
          {t('public.returnHome')}
        </BaseButton>
      }
    />
  );

  return Result500;
};
