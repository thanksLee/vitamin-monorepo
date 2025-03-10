/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import nprogress from 'nprogress';

/*
  아래와 같이 UseEffect를 사용하지 않으면
  페이지 로딩이 완료된 이후에도 progressbar가 사라지지 않는다.
 */

// 프로그레스 바 설정 변경
nprogress.configure({
  minimum: 0.6, // 최소 진행률 (기본값은 0.1)
  speed: 1000, // 프로그레스 바의 속도 (기본값은 200ms)
  trickleSpeed: 400, // 트릭클 효과의 속도 (기본값은 200ms)
});

const useNProgress = (location: any) => {
  useEffect(() => {
    // Browser 주소하단의 progressbar 시작
    nprogress.start();

    // 페이지가 렌더링 완료된 후 nprogress 종료
    const timer = setTimeout(() => {
      nprogress.done();
    }, 300); // 약간의 지연을 추가하여 자연스러운 종료 효과 제공

    return () => {
      clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
      nprogress.done(); // 안전하게 종료
    };
  }, [location]);
};

export default useNProgress;