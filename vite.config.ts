import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Absolute base: the site uses real paths (/b, /product…), served with an SPA fallback.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
