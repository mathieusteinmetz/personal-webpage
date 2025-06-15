import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/build/**',
      '**/.vercel/**',
      '**/dist-ssr/**',
    ],
  },

  ...defineConfigWithVueTs(
    {
      name: 'main-app-config',
      files: ['src/**/*.{ts,vue}'],
      rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-console': 'error',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
      },
    },
    vueTsConfigs.recommended,
    {
      ...pluginVitest.configs.recommended,
      files: ['src/**/__tests__/*'],
    },
  ),
]
