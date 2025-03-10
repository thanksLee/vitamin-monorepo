import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

interface IpBlockTemplateProps {
  ipAddress: string;
}

export const IpBlockTemplate = ({ ipAddress }: IpBlockTemplateProps) => {
  const { t } = useTranslation();

  const Result404 = (
    <Result
      status="error"
      title={t('public.errorIpBlockTitle')}
      subTitle={`${t('public.errorIpBlockSubTitle')} ${ipAddress ?? ''}`}
      extra={t('public.errorIpBlockMessage')}
    />
  );

  return Result404;
};
