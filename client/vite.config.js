import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const host = window.location.hostname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: host,
        secure: false,
        changeOrigin: true
      }
    }
  }
})