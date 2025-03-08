import { I18nextProvider } from 'react-i18next';
import i18n from '@vitamin-ui/i18n';

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
