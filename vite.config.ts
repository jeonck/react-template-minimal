import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-template-v1/',
  build: {
    outDir: 'dist'
  }
})