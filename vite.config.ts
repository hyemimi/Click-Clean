import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  /* custom */
  resolve: { 
    alias: [
      { find: '@Types', replacement: path.resolve('./src/@Types') },
      { find: 'apis', replacement: path.resolve('./src/apis') },
      { find: 'assets', replacement: path.resolve('./src/assets') },
      { find: 'components', replacement: path.resolve('./src/components') },
      { find: 'pages', replacement: path.resolve('./src/pages') },
      { find: 'routes', replacement: path.resolve('./src/routes') },
      { find: 'styles', replacement: path.resolve('./src/styles') }
    ]
  }
});