import { Meta, StoryObj } from '@storybook/react';
import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { I18nDropdown } from './index';

const meta: Meta<typeof I18nDropdown> = {
  title: 'molecules/I18nDropdown',
  component: I18nDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof I18nDropdown>;

const I18nDropdownComponent = () => {
  const { t } = useTranslation();

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <I18nDropdown
      menuProps={{
        items,
        selectable: true,
        defaultSelectedKeys: [],
        onClick: (e) => {
          changeLanguage(e.key);
        },
      }}
    />
  );
};

export const Default: Story = {
  render: () => <I18nDropdownComponent />,
};
