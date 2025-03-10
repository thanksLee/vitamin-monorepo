import { BaseButton, BaseButtonProps } from '@vitamin-ui/components';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

export const NotFoundTemplate = (props: BaseButtonProps) => {
  const { t } = useTranslation();

  const Result404 = (
    <Result
      status="404"
      title="404"
      subTitle={t('public.SubTitle404')}
      extra={
        <BaseButton type="primary" {...props}>
          {t('public.returnHome')}
        </BaseButton>
      }
    />
  );

  return Result404;
};
