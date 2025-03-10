import { ReactNode } from 'react';
import { Input, InputProps } from 'antd';
import { LockOutlined } from '@ant-design/icons';

interface PasswordInputProps extends InputProps {
  children?: ReactNode;
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { children } = props;
  const params: Partial<PasswordInputProps> = { ...props };
  return (
    <Input.Password
      allowClear
      addonBefore={<LockOutlined className="change" />}
      minLength={6}
      maxLength={30}
      autoComplete="current-password"
      {...params}
    >
      {children}
    </Input.Password>
  );
};
