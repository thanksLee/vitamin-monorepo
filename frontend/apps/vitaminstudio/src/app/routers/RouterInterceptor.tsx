import { useEffect } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { logger } from '@workspace/vitamin-core';
import { PRIVATE_URI, APP_ROUTES } from '@/app/routers/constants';
import { ErrorPage } from '@/pages/errors';

//import { useIsAuthStore } from '@/store';

import useNProgress from './hooks/useNProgress';

export const RouterInterceptor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useNProgress(location);
  const outlet = useOutlet(); // 현재 라우트에 해당하는 컴포넌트

  //const isAuth = useIsAuthStore();
  const isAuth = false;

  // 인증 및 라우팅 처리
  useEffect(() => {
    const uriPath = location.pathname;

    // 루트 경로("/")에 접근 시 인증 상태에 따라 리다이렉트
    if (uriPath === '/') {
      if (isAuth) {
        navigate(PRIVATE_URI, { replace: true }); // 인증된 경우 /sec/로 이동
      } else {
        navigate(APP_ROUTES.SIGNIN, { replace: true }); // 인증되지 않은 경우 /signin으로 이동
      }
      return;
    }

    // 인증되지 않은 사용자가 /sec/ 경로에 접근하려고 할 때 로그인 페이지로 리다이렉트
    if (!isAuth && uriPath.startsWith(PRIVATE_URI)) {
      logger.debug('User is not authenticated, redirecting to login.');
      navigate(`${APP_ROUTES.SIGNIN}?redirect=${uriPath}`, { replace: true });
      return;
    }

    // 인증된 사용자가 로그인 페이지에 접근하려고 할 때 처리 수정
    if (isAuth && uriPath === APP_ROUTES.SIGNIN) {
      const redirect = new URLSearchParams(location.search).get('redirect') || PRIVATE_URI;
      logger.debug(`Redirecting authenticated user to: ${redirect}`);
      navigate(redirect, { replace: true });
      return;
    }
    logger.debug(`uriPath : ${uriPath}`);
  }, [isAuth, location, navigate]);

  // 현재 라우트가 없으면 NotFound 페이지를 렌더링
  return (
    <ErrorBoundary FallbackComponent={(props) => <ErrorPage privateUri={PRIVATE_URI} {...props} />}>
      {outlet}
    </ErrorBoundary>
  );
};
