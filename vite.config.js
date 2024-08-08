import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  let config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // build: {
    //   minify: 'esbuild',
    //   cssMinify: true,
    //   sourcemap: 'inline',
    //   rollupOptions: {
    //     external: ['vue'],
    //     input: [
    //     ],
    //     output: {
    //       // inlineDynamicImports: false,
    //       globals: {vue: 'vue'},
    //       dir: 'dist'
    //     }
    //   }
    // }
  }

  return config;
});
