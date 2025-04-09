import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../back/public', // Set the build output directory
    emptyOutDir: true, // Ensure the directory is cleared before building
  },
  server: {
    proxy: {
      '/backend/': {
        target: 'http://localhost:4000', // Proxy API requests to localhost:4000
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, '/'), // Keep the '/backend' prefix
      },
    },
  },
});
