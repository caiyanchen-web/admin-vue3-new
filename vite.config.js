import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
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
  lintOnSave: false,//关闭校验
  productionSourceMap: false,//关闭map
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  server:{
    port: 3000,
    host: '0.0.0.0',
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
       // rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    client: {
      overlay:false,
    }
  }
})
