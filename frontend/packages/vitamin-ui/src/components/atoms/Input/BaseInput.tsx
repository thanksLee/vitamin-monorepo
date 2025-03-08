import { ReactNode } from 'react';
import { Input, InputProps } from 'antd';

export interface BaseInputProps extends InputProps {
  children?: ReactNode;
}

export const BaseInput = (props: BaseInputProps) => {
  const { children } = props;
  const params: Partial<BaseInputProps> = { ...props };

  return <Input {...params}>{children}</Input>;
};
