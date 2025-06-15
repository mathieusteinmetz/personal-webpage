import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        reporter: ['html', 'lcov'], // ✅ reporters valides
        provider: 'istanbul', // ✅ provider valides
        exclude: ['node_modules/', 'tests/', 'dist/'],
        include: ['src/**/*.{js,ts,vue}'],
        enabled: true,
        thresholds: {
          '100': true, // ✅ thresholds valides
        },
      },
      setupFiles: ['./vitest/vitest.setup.ts'],
    },
  }),
)
