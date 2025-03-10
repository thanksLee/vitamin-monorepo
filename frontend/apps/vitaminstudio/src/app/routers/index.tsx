import { useEffect } from 'react';
import nprogress from 'nprogress';

import { ThemeProvider } from '@workspace/vitamin-ui';
import { ENV_KEYS } from '@/shared/constants';
import RouterPage from './RouterPage';

// 프로그레스 바에 로딩 표시 비활성화
nprogress.configure({ showSpinner: false });

const Router = () => {
  /** 버전 초기화 */
  const handleClearVersion = () => {
    localStorage.removeItem(ENV_KEYS.VERSION);
  };

  useEffect(() => {
    // 첫 진입 시 버전 캐시 초기화
    handleClearVersion();

    // 로딩 닫기
    const firstElement = document.getElementById('first');
    if (firstElement && firstElement.style?.display !== 'none') {
      firstElement.style.display = 'none';
    }
  }, []);

  return (
    <ThemeProvider>
      <RouterPage />
    </ThemeProvider>
  );
};

export default Router;
