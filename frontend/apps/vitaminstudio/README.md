# Vitamin UI

Atomic Design 기반의 컴포넌트 라이브러리이다.

# 1. 필요 모듈 설치

## 1.1 vite.config.ts 에 필요한 Package 설치

  > pnpm add -D vite-tsconfig-paths @types/node @types/prop-types vite-plugin-checker vite-plugin-dts

  > pnpm add -D less @svgr/plugin-jsx @svgr/plugin-svgo vite-plugin-svgr

  > pnpm add -D rollup-plugin-visualizer vite-plugin-compression

## 1.2 vite.config.ts 에 필요한 모듈 설정

- vite.config.ts 파일 수정

  - checker 사용시 vite.config.ts 수정

    ```ts
      plugins: [
        ...기존코드
      checker({
          typescript: true,
          terminal: false,
          enableBuild: false,
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}" --config ./tsconfig.json',
            useFlatConfig: true,
          },
        }),
        ...기존코드
      ]
    ```
  - workspace 에 있는 dependency 추가

    ```ts
      ...기존코드
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
          '@assets': resolve(__dirname, '../../shared/assets'), // ✅ 절대 경로 사용
          '@workspace/vitamin-ui': resolve(__dirname, '../../packages/vitamin-ui/src'),  // 재 build 하지 않아도 수정된 사항이 바로 반영된다.
          '@workspace/vitamin-core': resolve(__dirname, '../../packages/vitamin-core/src'), // 재 build 하지 않아도 수정된 사항이 바로 반영된다.
        },
      },
    ```

## 1.3 workspace 에 있는 dependency 설치

  > pnpm add @workspace/vitamin-core --workspace

  > pnpm add @workspace/vitamin-ui --workspace

  - 아래와 같이 추가된다.

  ```json
    ...기존코드

    "dependencies": {
      "@workspace/vitamin-core": "workspace:^",
      "@workspace/vitamin-ui": "workspace:^"

      ...기존코드
    }

    ...기존코드
  ```

## 1.4 Package.json 에 필요한 설정

- package.json 파일 설정

  ```json
    "name": "vitaminstudio",
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite --mode dev --host",
      "mock": "vite --mode mock --host",
      "test": "vitest --coverage --watch --root src/ --reporter dot",
      "build": "tsc && vite build",
      "lint": "eslint . --report-unused-disable-directives --max-warnings 0 --fix",
      "preview": "vite preview"
    },
    ...기존코드

  ```
