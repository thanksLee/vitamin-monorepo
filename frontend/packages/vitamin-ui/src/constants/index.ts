export const THEME_TYPES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

export const LANGUAGE_TYPES = {
  KR: 'kr',
  EN: 'en',
} as const;

export type LanguageType = (typeof LANGUAGE_TYPES)[keyof typeof LANGUAGE_TYPES];
