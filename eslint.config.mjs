import js from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  js.configs.recommended,

  // ✅ Node/CommonJS environment (for functions.js)
  {
    files: ["functions.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: true,
        require: true,
        process: true,
      },
    },
  },

  // ✅ Jest test environment (for functions.test.js)
  {
    files: ["functions.test.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        test: true,
        expect: true,
        require: true,
        module: true,
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },

  // ✅ Browser environment (for script.js)
  {
    files: ["script.js"],
    languageOptions: {
      globals: {
        window: true,
        document: true,
        console: true,
        setTimeout: true,
      },
    },
  },

  // ✅ Global rules
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
    },
  },
];
