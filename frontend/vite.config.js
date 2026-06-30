import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config.
// - During local dev, /api is proxied to the Go backend so the frontend and
//   backend can run on different ports without CORS headaches.
// - In production the build is served as static files by nginx (see frontend/nginx.conf),
//   and nginx reverse-proxies /api to the backend container.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
