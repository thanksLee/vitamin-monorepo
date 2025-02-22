import type { PluginOption } from 'vite';

/**
 * JS 모듈 분할
 * @param id - 식별자
 */
export const splitJSModules = (id: string) => {
  // pnpm 호환성
  const pnpmName = id.includes('.pnpm') ? '.pnpm/' : '';
  const fileName = `node_modules/${pnpmName}`;

  const result = id.split(fileName)[1].split('/')[0].toString();

  return result;
};

/**
 * 빌드 시간 표시 플러그인
 */
export const timePlugin = (): PluginOption => {
  return {
    name: 'vite-build-time',
    enforce: 'pre',
    apply: 'build',
    buildStart: () => {
      console.time('빌드 시간');
    },
    buildEnd: () => {
      // console.timeEnd('\n변환 완료 시간')
    },
    // 서버 종료 시 호출
    closeBundle: () => {
      console.timeEnd('빌드 시간');
    },
  };
};
