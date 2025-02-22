/* eslint-disable @typescript-eslint/no-explicit-any */
const isDev = process.env.NODE_ENV === 'development';

console.log(`isDev : ${isDev}`);

export const logger = {
  debug: (...args: any[]) => {
    if (isDev) {
      console.debug('[DEBUG]', ...args);
    }
  },
  log: (...args: any[]) => {
    if (isDev) {
      console.log('[LOG]', ...args);
    }
  },
  dir: (...args: any[]) => {
    if (isDev) {
      console.dir('[DIR]', ...args);
    }
  },
  warn: (...args: any[]) => {
    console.warn('[WARN]', ...args);
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
  },
};
