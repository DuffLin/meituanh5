import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
const pathResolve = (dir) => resolve(__dirname, '.', dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host:'192.168.101.111',
    port: '8080'
  },
  resolve: {
    alias: [ { find: "@", replacement: pathResolve("src") }]
  }
})
