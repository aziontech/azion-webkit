import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  let config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),

        // 'webkit/LinkButton': resolve(__dirname, 'src/templates/button/link/LinkButton.vue'),
        // 'webkit/ReadableContent': resolve(__dirname, 'src/templates/post/readble-content/ReadbleContent.vue')
      },
    },
    build: {
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: 'inline',
      // LIB or ROLLUP input
      // lib: {
      //   entry: resolve(__dirname, 'src/index.js'),
      //   name: 'webkit',
      // },
      rollupOptions: {
        external: ['vue'],
        input: [
          resolve(__dirname, 'src/templates/button/link/LinkButton.vue'),
          resolve(__dirname, 'src/templates/post/readable-content/ReadableContent.vue')
        ],
        output: {
          // inlineDynamicImports: false,
          globals: {vue: 'vue'},
          dir: 'dist'
        }
      }
    }
  }

  return config;
});
