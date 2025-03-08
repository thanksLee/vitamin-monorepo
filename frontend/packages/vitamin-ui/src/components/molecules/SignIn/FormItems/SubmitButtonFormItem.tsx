import { BaseFormItem, BaseButton, BaseButtonProps } from '@/components/atoms';
import { ReactNode } from 'react';

interface SubmitButtonFormItemProps extends BaseButtonProps {
  children: ReactNode;
  loading: boolean;
}

export const SubmitButtonFormItem = ({ loading, ...restProps }: SubmitButtonFormItemProps) => {
  const { children } = restProps;

  return (
    <BaseFormItem>
      <BaseButton {...restProps} type="primary" htmlType="submit" loading={loading} block>
        {children}
      </BaseButton>
    </BaseFormItem>
  );
};
