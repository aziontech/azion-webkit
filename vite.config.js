import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode, ssrBuild }) => {
    let config = {
        plugins: [
            vue()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        build: {
            minify: 'esbuild', // default
            cssMinify: true,
            sourcemap: 'inline',
            lib: {
               entry: resolve(__dirname, './src/index.js'),
               name: 'azion-webblocks-kit',
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: { vue: 'vue' }
                }
            }
        }
    }

    return config;
})
