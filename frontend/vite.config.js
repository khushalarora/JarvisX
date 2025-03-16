import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // ✅ Redirect all routes to index.html
  },
  preview: {
    historyApiFallback: true,  // ✅ Also enable it for `vite preview`
  }
});
