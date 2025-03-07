import { GetProps } from 'antd';
import Icon from '@ant-design/icons';

import Sun from './svg/sun.svg?react';
import Moon from './svg/moon.svg?react';

type CustomIconComponentProps = GetProps<typeof Icon>;

export const MoonIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={Moon} {...props} />;
};

export const SunIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={Sun} {...props} />;
};
