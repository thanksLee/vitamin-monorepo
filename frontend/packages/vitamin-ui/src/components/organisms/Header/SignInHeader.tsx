import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { I18nDropdown, ThemeButton } from '@vitamin-ui/components';
import i18n from '@vitamin-ui/i18n';
import { useTheme } from '@vitamin-ui/contexts';

import * as S from './index.styled';

export const SignInHeader = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const items: MenuProps['items'] = [
    {
      key: 'kr',
      label: <>{t('public.localeKor')}</>,
    },
    {
      key: 'en',
      label: <>{t('public.localeEng')}</>,
    },
    {
      key: 'zh',
      label: <>{t('public.localeChn')}</>,
    },
  ];

  const handleClickChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <S.SignInHeader>
      <ThemeButton themeStyle={theme} onClick={toggleTheme} />
      <I18nDropdown
        menuProps={{
          items,
          selectable: true,
          defaultSelectedKeys: [i18n.language],
          onClick: (e) => {
            handleClickChangeLanguage(e.key);
          },
        }}
      />
    </S.SignInHeader>
  );
};
