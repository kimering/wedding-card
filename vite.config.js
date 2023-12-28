import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/wedding-card/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/_variable.scss";
          @import "@/assets/style/_mixin.scss";
        `
      }
    }
  }
})
