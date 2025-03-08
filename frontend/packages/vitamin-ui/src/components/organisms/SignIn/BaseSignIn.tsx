import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { PasswordFormItem, SignInFormItem, SubmitButtonFormItem } from '@vitamin-ui/components/molecules';

interface SignInFormValues {
  userid: string;
  password: string;
}

export interface BaseSignInProps {
  onSubmit: (values: SignInFormValues) => void;
  loading: boolean;
}

export const BaseSignIn = ({ onSubmit, loading }: BaseSignInProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={onSubmit} initialValues={{ username: '', password: '' }} layout="vertical">
      <SignInFormItem
        name="userid"
        label={t('signIn.userid')}
        rules={[
          {
            required: true,
            message: t('signIn.validation.required', { field: t('signIn.userid') }),
          },
        ]}
        inputLength={{ min: 6, max: 30 }}
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
        {loading ? t('signIn.loading') : t('signIn.submit')}
      </SubmitButtonFormItem>
    </Form>
  );
};
