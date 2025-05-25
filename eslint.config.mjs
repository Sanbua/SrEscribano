import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
      braceStyle: '1tbs',
    },
  },
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'node/prefer-global/process': 'off',
      'no-console': 'off',
      'antfu/no-top-level-await': 'off',
      'brace-style': ['error', '1tbs'],
    },

  },
)
