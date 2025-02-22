import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';
import { logger, timePlugin } from '@workspace/vitamin-core';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  logger.log('==============================================');
  logger.log(`#### mode #### : ${mode}`);
  logger.log(`#### NODE_ENV #### : ${process.env.NODE_ENV}`);
  logger.log(`#### root #### : ${root}`);
  logger.log(`#### __dirname #### : ${__dirname}`);
  logger.log(`#### path.resolve #### : ${resolve(__dirname, 'src')}`);
  logger.log(`#### env #### : ${JSON.stringify(env)}`);
  logger.log('==============================================');

  return {
    base: './',
    publicDir: '../../shared/public',
    plugins: [
      react(),
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
      // 빌드 시간 측정 플러그인
      timePlugin(),
      // 압축을 위한 Vite 플러그인
      viteCompression(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@assets': resolve(__dirname, '../../shared/assets'), // ✅ 절대 경로 사용
        '@workspace/vitamin-ui': resolve(__dirname, '../../packages/vitamin-ui/src'),
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
    server: {
      open: false,
      port: parseInt(env.VITE_SERVER_PORT),
      host: '0.0.0.0',
      proxy: {
        '^/api/*': {
          target: env.VITE_BACKEND_SERVER_URL,
          secure: true,
          changeOrigin: true,
        },
        '^/files/*': {
          target: env.VITE_BACKEND_SERVER_URL,
          secure: true,
          changeOrigin: true,
        },
      },
    },
    build: {
      emptyOutDir: true,
      outDir: 'dist',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000, // 1000k 이상일 때 경고
      sourcemap: process.env.NODE_ENV !== 'production', // Production 환경에서 소스 맵 활성화
      terserOptions: {
        compress: {
          // Production 환경에서 console 및 debugger 제거
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        },
      },
      manifest: true,
    },
  };
});
