import { UserOutlined } from '@ant-design/icons';
import { BaseInput, BaseInputProps } from './BaseInput';

export const SignInInput = (props: BaseInputProps) => {
  const { children } = props;

  const params: Partial<BaseInputProps> = { ...props };

  return (
    <BaseInput allowClear autoComplete="username" addonBefore={<UserOutlined className="change" />} {...params}>
      {children}
    </BaseInput>
  );
};
