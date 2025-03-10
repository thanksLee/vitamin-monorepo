import { UserOutlined } from '@ant-design/icons';
import { Rule } from 'antd/es/form';
import { BaseFormItem, BaseFormItemProps, SignInInput } from '@vitamin-ui/components';

interface SignInFormItemProps extends BaseFormItemProps {
  label: string;
  name: string;
  rules: Rule[];
  inputLength: {
    min: number;
    max: number;
  };
}

export const SignInFormItem = ({ label, name, rules, inputLength, ...restProps }: SignInFormItemProps) => {
  return (
    <BaseFormItem label={label} name={name} rules={rules} {...restProps}>
      <SignInInput
        allowClear
        addonBefore={<UserOutlined className="change" />}
        minLength={inputLength.min}
        maxLength={inputLength.max}
      />
    </BaseFormItem>
  );
};
