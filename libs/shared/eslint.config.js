// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
      'import/order': [
        'error',
        {
          'alphabetize': { order: 'asc' },
          'groups': [['builtin'], 'external', 'internal', 'index', 'object', ['sibling', 'parent']],
          'pathGroups': [
            {
              pattern: '@angular/material/**',
              group: 'external',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['internal'],
          'newlines-between': 'always',
          'warnOnUnassignedImports': true,
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  }
);
