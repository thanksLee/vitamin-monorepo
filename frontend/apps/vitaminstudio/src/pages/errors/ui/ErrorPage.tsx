import type { FallbackProps } from 'react-error-boundary';
import { BaseErrorTemplate } from '@workspace/vitamin-ui';

interface ErrorPageProps extends FallbackProps {
  privateUri: string;
}

export const ErrorPage = ({ privateUri, ...props }: ErrorPageProps) => {
  return <BaseErrorTemplate privateUri={privateUri} {...props} />;
};
