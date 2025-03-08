import { TranslationOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

import { BaseButton, BaseDropdown, BaseDropdownProps } from '@/components/atoms';

export type Lang = 'ko' | 'en';

interface I18nDropdownProps extends BaseDropdownProps {
  menuProps: {
    items: MenuProps['items'];
    selectable: boolean;
    defaultSelectedKeys?: string[];
    onClick: MenuProps['onClick'];
  };
}

export const I18nDropdown = ({ menuProps, ...restProps }: I18nDropdownProps) => {
  return (
    <BaseDropdown menu={menuProps} {...restProps}>
      <BaseButton onClick={(e) => e.preventDefault()} icon={<TranslationOutlined />} type="text" size="large" />
    </BaseDropdown>
  );
};
