import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Cambia esto por la URL de tu backend
        ws: true,
        changeOrigin: true
      }
    }
  }
});
