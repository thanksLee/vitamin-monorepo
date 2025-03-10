// 환경설정파일에 설정 constant
export const ENV_KEYS = {
  VERSION: import.meta.env.VITE_APP_VERSION,
  CURRENT_LANG: import.meta.env.VITE_LANG,
  CURRENT_THEME: import.meta.env.VITE_THEME,
} as const;
