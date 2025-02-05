import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 3000, // Use Render's assigned port
    host: '0.0.0.0', // Ensures it's accessible
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  }
});
