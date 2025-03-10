import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundTemplate } from '@workspace/vitamin-ui';

import { Dashboard, Home, MyPage, Setting, SignIn, EtcWrapper } from '@/pages';
import { RouterInterceptor } from './RouterInterceptor';
import { APP_ROUTES } from '@/app/routers/constants';
import { HomeSample1, HomeSample2 } from '@/pages/samples';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouterInterceptor />}>
          {/* 공개 경로 */}
          <Route index element={<SignIn />} />
          <Route path={APP_ROUTES.SIGNIN} element={<SignIn />} />
          <Route path="etc" element={<EtcWrapper />} />

          {/* 인증이 완료된 사용자 전용 경로 */}
          <Route path="sec">
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="setting" element={<Setting />} />
            <Route path="homesample1" element={<HomeSample1 />} />
            <Route path="homesample2" element={<HomeSample2 />} />
          </Route>

          {/* 와일드카드 경로 */}
          <Route path="*" element={<NotFoundTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
