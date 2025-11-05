import js from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  js.configs.recommended,

  {
    files: ["functions.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    env: {
      node: true,
    },
  },

  {
    files: ["functions.test.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    env: {
      node: true,
      jest: true,
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },

  {
    files: ["script.js"],
    env: {
      browser: true,
    },
  },

  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
    },
  },
];
