import { AUTH_ROUTES } from './auth';

export const PRIVATE_URI = '/sec';

export const APP_ROUTES = {
  ...AUTH_ROUTES,
  SEC: {
    HOME: '/home',
  },
} as const;
