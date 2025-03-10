import { THEME_TYPES } from '@vitamin-ui/constants';
import { MoonIcon, SunIcon } from './icons';
import { BaseButton, BaseButtonProps } from './BaseButton';

interface ThemeButtonProps extends BaseButtonProps {
  theme: typeof THEME_TYPES.LIGHT | typeof THEME_TYPES.DARK;
}

/**
 * 테마 전환 컴포넌트
 * 사용자가 버튼을 통해 웹사이트의 밝은 테마와 어두운 테마를 전환할 수 있도록 허용
 */
export const ThemeButton = (props: ThemeButtonProps) => {
  const { children, theme } = props;

  const isDark = () => {
    if (theme === THEME_TYPES.LIGHT) {
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
