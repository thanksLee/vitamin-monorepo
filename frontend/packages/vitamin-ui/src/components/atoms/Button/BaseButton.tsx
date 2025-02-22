import { ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';

export interface BaseButtonProps extends ButtonProps {
  children?: ReactNode;
}

export const BaseButton = (props: BaseButtonProps) => {
  const { children } = props;

  const params: Partial<BaseButtonProps> = { ...props };
  delete params.color;

  return <Button {...params}>{children}</Button>;
};
