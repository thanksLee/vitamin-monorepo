import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { LANGUAGE_TYPES, THEME_TYPES, ThemeType } from '@/constants';
import { App as AntApp, ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import koKR from 'antd/es/locale/ko_KR';
import enUS from 'antd/es/locale/en_US';
import { lightTheme, darkTheme } from '@/themes';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

// antd 테마
const { defaultAlgorithm, darkAlgorithm } = antdTheme;
const currentTheme = import.meta.env.VITE_DEFAULT_THEME;
const currentLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE;

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(currentTheme ?? THEME_TYPES.LIGHT);

  // antd 기본 색상 설정은 config에서 한다.
  const themeConfig = {
    algorithm: theme === THEME_TYPES.DARK ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: '#1890ff', // 기본 색상
      borderRadius: 8, // 전역 테두리 반경
    },
    components: {
      Button: {
        colorPrimary: '#1890ff', // 버튼 색상 커스터마이징
      },
    },
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEME_TYPES.DARK ? THEME_TYPES.LIGHT : THEME_TYPES.DARK));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  console.log('theme', theme);
  return (
    <ConfigProvider locale={currentLanguage === LANGUAGE_TYPES.KR ? koKR : enUS} theme={themeConfig}>
      <StyledThemeProvider theme={theme === THEME_TYPES.DARK ? darkTheme : lightTheme}>
        <ThemeContext.Provider value={value}>
          <AntApp>{children}</AntApp>
        </ThemeContext.Provider>
      </StyledThemeProvider>
    </ConfigProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
