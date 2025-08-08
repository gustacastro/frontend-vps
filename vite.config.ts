import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Para funcionar em containers Docker
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Remover sourcemaps em produção
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['react-icons', 'react-hot-toast']
        }
      }
    }
  },
  preview: {
    port: 3000,
    host: true
  }
})
