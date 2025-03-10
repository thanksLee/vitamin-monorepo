import { createRoot } from 'react-dom/client';
// 스타일
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'; // 오래된 브라우저와 호환
import 'nprogress/nprogress.css';
import { TanstackQuery } from '@workspace/vitamin-core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LocaleProvider } from '@workspace/vitamin-ui';
import Router from '@/app/routers';
import '@/shared/ui/styles/global.less';

async function initialApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;
  const root = createRoot(rootElement);

  if (import.meta.env.MODE === 'mock') {
    // 'mock' 모드일 때만 worker를 시작합니다.
    const { worker } = await import('./mocks/browser');
    await worker.start({
      onUnhandledRequest: 'warn',
      serviceWorker: {
        url: '../public/mockServiceWorker.js', // 명시적으로 경로 지정
      },
    });
  }

  root.render(
    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      <TanstackQuery>
        <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
        <LocaleProvider>
          <Router />
        </LocaleProvider>
      </TanstackQuery>
    </StyleProvider>
  );

  // 로딩 표시 숨기기
  const firstElement = document.getElementById('first');
  if (firstElement && firstElement.style?.display !== 'none') {
    firstElement.style.display = 'none';
  }
}

initialApp();
