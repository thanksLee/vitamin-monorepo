import { ReactNode } from 'react';
import { Dropdown, DropdownProps } from 'antd';

export interface BaseDropdownProps extends DropdownProps {
  children?: ReactNode;
}

export const BaseDropdown = (props: BaseDropdownProps) => {
  const { children } = props;
  const params: Partial<BaseDropdownProps> = { ...props };
  return <Dropdown {...params}>{children}</Dropdown>;
};
