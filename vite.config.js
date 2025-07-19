import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Timer-Stopwatch/', // important for GitHub Pages!
});
