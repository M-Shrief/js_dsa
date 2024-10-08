import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  plugins: [swc.vite()],
  test: {
    globals: true,
    includeSource: [  
      'src/**/*.spec.{js,ts}',
      'src/problems/**/**.{js,ts}' // Component testing
    ],
    exclude:  ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
})