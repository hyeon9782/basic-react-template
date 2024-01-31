module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off', // propTypes를 사용하지 않을 경우
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수의 반환 타입을 명시하지 않을 경우
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
