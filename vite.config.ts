import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SECURITY NOTE: Never expose API keys in client-side code via `define`.
// Any key added here becomes visible in the browser bundle.
// If a Gemini/AI key is needed, proxy requests through a backend server instead.
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
