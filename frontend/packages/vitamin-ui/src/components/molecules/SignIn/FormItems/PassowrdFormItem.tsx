import { Rule } from 'antd/es/form';
import { BaseFormItem, BaseFormItemProps, PasswordInput } from '@vitamin-ui/components/atoms';

interface PasswordFormItemProps extends BaseFormItemProps {
  label: string;
  name: string;
  rules: Rule[];
  ruleMessage: string;
  inputLength: {
    min: number;
    max: number;
  };
}

export const PasswordFormItem = ({
  label,
  name,
  rules,
  ruleMessage,
  inputLength,
  ...restProps
}: PasswordFormItemProps) => {
  const passWordRule = (message: string) => ({
    pattern: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*+._\-*]{6,30}$/,
    message,
  });

  return (
    <BaseFormItem label={label} name={name} rules={[...rules, passWordRule(ruleMessage)]} {...restProps}>
      <PasswordInput minLength={inputLength.min} maxLength={inputLength.max} />
    </BaseFormItem>
  );
};
