module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "on",
    "no-console": "on",
    "spaced-comment": "on",
    "no-else-return": "off",
  },
};
