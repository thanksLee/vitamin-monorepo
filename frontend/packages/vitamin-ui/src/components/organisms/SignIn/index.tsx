import { PasswordFormItem, SignInFormItem, SubmitButtonFormItem } from '@/components/molecules';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';

interface SignInFormValues {
  username: string;
  password: string;
}

interface SignInProps {
  onSubmit: (values: SignInFormValues) => void;
  loading: boolean;
}

export const SignIn = ({ onSubmit, loading }: SignInProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onSubmit} initialValues={{ username: '', password: '' }} layout="vertical">
      <SignInFormItem
        name="username"
        label={t('signIn.username')}
        rules={[
          {
            required: true,
            message: t('signIn.validation.required', { field: t('signIn.username') }),
          },
        ]}
        inputLength={{ min: 1, max: 10 }}
      />
      <PasswordFormItem
        name="password"
        label={t('signIn.password')}
        ruleMessage={t('signIn.validation.passwordPattern')}
        rules={[
          {
            required: true,
            message: t('signIn.validation.required', { field: t('signIn.password') }),
          },
        ]}
        inputLength={{ min: 6, max: 30 }}
      />
      <SubmitButtonFormItem loading={loading}>
        {loading ? t('common.processing') : t('signIn.submit')}
      </SubmitButtonFormItem>
    </Form>
  );
};
