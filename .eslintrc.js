module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": "off" ,
    // "prettier/prettier": ["error", { endOfLine: "off" }],
    // "prettier/prettier": ["error", { tabWidth: 4 }],
    "prettier/prettier": 'off', 
  //   "max-len": ["error", 140, 2, {
  //     ignoreComments: false,
  //     ignoreRegExpLiterals: true,
  //     ignoreStrings: false,
  //     ignoreTemplateLiterals: false,
  //  }],
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off',
  },
};
