import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: /pink-clean/  |  Vercel/local: /
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-compare-slider')) return 'compare'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react'
          }
        },
      },
    },
  },
})
