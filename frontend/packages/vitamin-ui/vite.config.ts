import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import pkg from './package.json';
import viteCompression from 'vite-plugin-compression';

import { logger, splitJSModules, timePlugin } from '@workspace/vitamin-core';

logger.debug('vite.config.ts');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      // https://react-svgr.com/docs/options/
      svgrOptions: {
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
    checker({
      typescript: true,
      terminal: false,
      enableBuild: false,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}" --config ./tsconfig.json',
        useFlatConfig: true,
      },
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
    dts({
      // d.ts 파일 생성 플러그인 추가
      insertTypesEntry: true, // package.json에 types 필드 자동 추가
      outDir: 'dist', // 타입 정의 출력 디렉토리
      tsconfigPath: './tsconfig.app.json', // 사용할 tsconfig 경로 지정
    }),
    // 빌드 시간 측정 플러그인
    timePlugin(),
    // 압축을 위한 Vite 플러그인
    viteCompression(),
  ],
  optimizeDeps: {
    include: ['@storybook/react > @mdx-js/react'],
    exclude: [
      // 최적화에서 제외할 패키지
      '@mdx-js/react',
      '@storybook/builder-vite',
      '@storybook/manager-vite',
    ],
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': resolve(__dirname, '../../shared/assets'),
      '@workspace/vitamin-core': resolve(__dirname, '../../packages/vitamin-core/src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
      },
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: pkg.name,
      fileName: 'index',
      formats: ['es' as const],
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000, // 1000k 이상일 때 경고
    sourcemap: process.env.NODE_ENV !== 'production', // Production 환경에서 소스 맵 활성화
    minify: 'terser',
    terserOptions: {
      compress: {
        // Production 환경에서 console 및 debugger 제거
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vite'], // React를 외부 모듈로 처리
      output: {
        globals: {
          react: 'React',
          reactDOM: 'React-DOM',
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        manualChunks(id) {
          // JS 모듈
          if (id.includes('node_modules')) {
            return splitJSModules(id);
          }
        },
      },
    },
  },
});
