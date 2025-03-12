import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

interface IpBlockErrorTemplateProps {
  ipAddress: string;
}

export const IpBlockErrorTemplate = ({ ipAddress }: IpBlockErrorTemplateProps) => {
  const { t } = useTranslation();

  const IpBlockError = (
    <Result
      status="error"
      title={t('public.errorIpBlockTitle')}
      subTitle={`${t('public.errorIpBlockSubTitle')} ${ipAddress ?? ''}`}
      extra={t('public.errorIpBlockMessage')}
    />
  );

  return IpBlockError;
};
