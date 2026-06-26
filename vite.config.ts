import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',  // Vercel serves from the domain root
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split big, rarely-changing vendor code into cacheable chunks so
        // repeat visits don't re-download React/Motion, and the main app
        // chunk stays small.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react/') ||
              id.includes('node_modules/scheduler')
            ) return 'react-vendor'
            if (id.includes('motion') || id.includes('framer')) return 'motion'
            if (id.includes('@radix-ui')) return 'radix'
            if (id.includes('lucide-react')) return 'icons'
          }
        },
      },
    },
  },
})
