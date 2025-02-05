import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true, // Enable CORS if needed
    proxy: {
      "/api": {
        target: "https://turfkshetra-web-app.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    minify: 'terser',
    sourcemap: false,
  },
});
