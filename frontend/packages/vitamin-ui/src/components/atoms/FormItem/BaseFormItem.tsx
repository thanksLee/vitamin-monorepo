import { ReactNode } from 'react';
import { Form, FormItemProps } from 'antd';

export interface BaseFormItemProps extends FormItemProps {
  children?: ReactNode;
}

export const BaseFormItem = (props: BaseFormItemProps) => {
  const { children } = props;
  const params: Partial<BaseFormItemProps> = { ...props };

  return <Form.Item {...params}>{children}</Form.Item>;
};
