const _import = require('eslint-plugin-import');

const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    import: _import,
  },

  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "sort-keys": "off",
    "@angular-eslint/component-class-suffix": "error",

    "@angular-eslint/component-selector": ["error", {
      type: "element",
      prefix: "app",
      style: "kebab-case",
    }],

    "@angular-eslint/contextual-lifecycle": "error",
    "@angular-eslint/directive-class-suffix": "error",

    "@angular-eslint/directive-selector": ["error", {
      type: "attribute",
      prefix: "app",
      style: "camelCase",
    }],

    "@angular-eslint/no-conflicting-lifecycle": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",

    "@typescript-eslint/no-restricted-types": ["error", {
      types: {
        Object: {
          message: "Avoid using the `Object` type. Did you mean `object`?",
        },

        Function: {
          message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
        },

        Boolean: {
          message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
        },

        Number: {
          message: "Avoid using the `Number` type. Did you mean `number`?",
        },

        String: {
          message: "Avoid using the `String` type. Did you mean `string`?",
        },

        Symbol: {
          message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
        },
      },
    }],

    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",

    "@typescript-eslint/no-inferrable-types": ["error", {
      ignoreParameters: true,
    }],

    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",

    "@typescript-eslint/triple-slash-reference": ["error", {
      path: "always",
      types: "prefer-import",
      lib: "always",
    }],

    "@typescript-eslint/unified-signatures": "error",
    complexity: "off",
    "constructor-super": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",

    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],

    "id-match": "error",
    "import/no-deprecated": "warn",
    "max-classes-per-file": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",

    "no-console": ["error", {
      allow: [
        "log",
        "warn",
        "dir",
        "timeLog",
        "assert",
        "clear",
        "count",
        "countReset",
        "group",
        "groupEnd",
        "table",
        "dirxml",
        "error",
        "groupCollapsed",
        "Console",
        "profile",
        "profileEnd",
        "timeStamp",
        "context",
      ],
    }],

    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",

    "no-restricted-imports": ["error", {
      name: "rxjs/Rx",
      message: "Please import directly from 'rxjs' instead",
    }],

    "@typescript-eslint/no-shadow": ["error", {
      hoist: "all",
    }],

    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    radix: "error",
    "use-isnan": "error",
    "valid-typeof": "off",
  },
});
