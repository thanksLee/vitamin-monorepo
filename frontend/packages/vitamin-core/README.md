# Vitamin Core

Vitamin Core 는 Vitamin Monorepo 에서 사용하는 공통 모듈이다.

# 1. 필요 모듈 설치

## 1.1 vite.config.ts 에 필요한 Package 설치

  > pnpm add -D less

  > pnpm add -D vite-tsconfig-paths vite-plugin-checker vite-plugin-dts @types/node @types/prop-types rollup-plugin-visualizer vite-plugin-compression

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

## 1.3 Package.json 에 필요한 설정

- package.json 파일 설정

  ```json
    ...기존코드

    "name": "@workspace/vitamin-core",
    "version": "0.1.0",
    "type": "module",
    "main": "./dist/index.js",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",

    ...기존코드
  ```
