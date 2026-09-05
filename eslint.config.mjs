import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'node_modules/**']),
  {
    rules: {
      'react/jsx-no-comment-textnodes': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]);
