import { BaseButton, BaseButtonProps } from './BaseButton';
import { MoonIcon, SunIcon } from './icons';
import { THEME_TYPES } from '@/constants';

interface ThemeButtonProps extends BaseButtonProps {
  themeStyle: typeof THEME_TYPES.LIGHT | typeof THEME_TYPES.DARK;
}

/**
 * 테마 전환 컴포넌트
 * 사용자가 버튼을 통해 웹사이트의 밝은 테마와 어두운 테마를 전환할 수 있도록 허용
 */
export const ThemeButton = (props: ThemeButtonProps) => {
  const { children, themeStyle } = props;

  const isDark = () => {
    if (themeStyle === THEME_TYPES.LIGHT) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <BaseButton type="text" {...props} icon={isDark() ? <SunIcon /> : <MoonIcon />}>
      {children}
    </BaseButton>
  );
};
