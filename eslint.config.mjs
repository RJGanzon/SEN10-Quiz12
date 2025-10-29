// eslint.config.mjs
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly", // allow console.log
        window: "readonly", // allow window
        document: "readonly", // allow document
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
