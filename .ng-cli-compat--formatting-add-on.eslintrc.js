const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },

  rules: {
    "arrow-body-style": "error",
    "arrow-parens": "off",
    "comma-dangle": "off",
    curly: "error",
    "eol-last": "error",

    "max-len": ["error", {
      code: 140,
    }],

    "new-parens": "error",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "error",
    "quote-props": ["error", "as-needed"],

    "space-before-function-paren": ["error", {
      anonymous: "never",
      asyncArrow: "always",
      named: "never",
    }],

    // "@typescript-eslint/member-delimiter-style": ["error", {
    //   multiline: {
    //     delimiter: "semi",
    //     requireLast: true,
    //   },

    //   singleline: {
    //     delimiter: "semi",
    //     requireLast: false,
    //   },
    // }],

    quotes: "off",

    // "@typescript-eslint/quotes": ["error", "single", {
    //   allowTemplateLiterals: true,
    // }],

    "semi": ["error", "always"],
    // "@typescript-eslint/type-annotation-spacing": "error",
  },
});
