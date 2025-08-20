import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// Vite + React + Tailwind — just React plugin here
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
