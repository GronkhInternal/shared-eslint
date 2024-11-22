// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

const ngcompat = require('./.ng-cli-compat.eslintrc.js');
const ngcompatformat = require('./.ng-cli-compat--formatting-add-on.eslintrc.js');

const eslintImportPlugin = require('eslint-plugin-import')
const eslintUnicornPlugin = require('eslint-plugin-unicorn')
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,

      ...ngcompat,
      ...ngcompatformat,

      eslintConfigPrettier,
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: eslintImportPlugin,
      unicorn: eslintUnicornPlugin,

      // 'eslint-plugin-no-null': 'eslint-plugin-no-null',
      // 'eslint-plugin-jsdoc': 'eslint-plugin-jsdoc',
      // 'eslint-plugin-prefer-arrow': 'eslint-plugin-prefer-arrow'
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-max-inline-declarations': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-forward-ref': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-pipe-impure': 'off',
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/use-component-view-encapsulation': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'default',
          'format': [
            'camelCase',
            'snake_case'
          ],
          'leadingUnderscore': 'allow',
          'filter': {
            'regex': '^\\d+|[-]',
            'match': false
          }
        },
        {
          'selector': 'classProperty',
          'format': [
            'camelCase',
            'snake_case',
            'StrictPascalCase'
          ],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'method',
          'format': [
            'strictCamelCase'
          ],
          'filter': {
            'regex': '^\\d+|[-]',
            'match': false
          }
        },
        {
          'selector': 'typeLike',
          'format': [
            'PascalCase'
          ]
        },
        {
          'selector': 'enumMember',
          'format': [
            'PascalCase'
          ]
        },
        {
          'selector': 'parameter',
          'format': [
            'camelCase',
            'snake_case'
          ],
          'leadingUnderscore': 'allow'
        }
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          'default': [
            'public-field',
            'protected-field',
            'private-field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',
            'public-static-method',
            'public-instance-method',
            'public-abstract-method',
            'protected-static-method',
            'protected-instance-method',
            'protected-abstract-method',
            'private-static-method',
            'private-instance-method'
          ]
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          'accessibility': 'no-public'
        }
      ],
      // '@typescript-eslint/member-delimiter-style': [
      //   'error',
      //   {
      //     'multiline': {
      //       'delimiter': 'semi',
      //       'requireLast': true
      //     },
      //     'singleline': {
      //       'delimiter': 'semi',
      //       'requireLast': false
      //     }
      //   }
      // ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          'allowShortCircuit': true
        }
      ],
      '@typescript-eslint/adjacent-overload-signatures': [
        'off',
        {
          'OPTION_IGNORE_ACCESSORS': true
        }
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      'semi': [
        'error'
      ],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/unbound-method': 'error',
      'arrow-parens': [
        'error',
        'always'
      ],
      'brace-style': [
        'off',
        'off'
      ],
      'class-methods-use-this': 'off',
      'comma-dangle': [
        'error',
        'always-multiline'
      ],
      'complexity': [
        'error',
        {
          'max': 40
        }
      ],
      'default-case': 'off',
      'eqeqeq': [
        'error',
        'always'
      ],
      'id-blacklist': 'off',
      'id-match': 'off',
      'import/no-default-export': 'error',
      'import/no-deprecated': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unassigned-import': [
        'error',
        {
          'allow': [
            'zone.js/**/*',
            'zone.js'
          ]
        }
      ],
      'import/order': 'off',
      'max-len': [
        'error',
        {
          'code': 140,
          'comments': 180
        }
      ],
      'max-lines': [
        'error',
        1200
      ],
      'newline-per-chained-call': 'error',
      'no-bitwise': 'off',
      'no-cond-assign': 'off',
      'no-param-reassign': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-multiple-empty-lines': 'error',
      'no-new-func': 'error',
      'no-null/no-null': 'off',
      'no-plusplus': [
        'off',
        {
          'allowForLoopAfterthoughts': true
        }
      ],
      'no-redeclare': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement'
      ],
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'off',
      'no-underscore-dangle': 'off',
      'no-useless-constructor': 'off',
      'no-void': 'off',
      'padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return'
        }
      ],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'keyword-spacing': 'error',
      'comma-spacing': 'error',
      'key-spacing': 'error',
      'arrow-spacing': 'error',
      'rest-spread-spacing': [
        'error',
        'always'
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'space-infix-ops': 'error',
      'space-before-function-paren': 'error',
      'space-before-blocks': 'error',
      'space-unary-ops': 'error',
      'space-in-parens': [
        'off',
        'always'
      ],
      'unicorn/filename-case': 'error',
      'yoda': 'off'
    },
  },
  {
    // Everything in this config object targets our HTML files (external templates,
    // and inline templates as long as we have the `processor` set on our TypeScript config above)
    files: ['**/*.html'],
    extends: [
      // Apply the recommended Angular template rules
      ...angular.configs.templateRecommended,
      // Apply the Angular template rules which focus on accessibility of our apps
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/alt-text': 'warn',
      '@angular-eslint/template/elements-content': 'warn',
      '@angular-eslint/template/valid-aria': 'warn',
      '@angular-eslint/template/label-has-associated-control': 'warn',
      '@angular-eslint/template/no-distracting-elements': 'off',
      '@angular-eslint/template/conditional-complexity': 'off',
      '@angular-eslint/template/cyclomatic-complexity': 'off',
      '@angular-eslint/template/no-call-expression': 'off',
      '@angular-eslint/template/use-track-by-function': 'off',
      '@angular-eslint/template/no-autofocus': 'warn'
    },
  },
);
