import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node, // Combine sourceType and globals in one object
    },
    rules: {
      // Add your custom rules here
     // "no-var": "error", // Disallow use of var
     // eqeqeq: "error", // Require strict equality (===)
      "no-unused-vars": "warn", // Warn on unused variables
      "prefer-const": "error", // Prefer const over let where possible
      "no-else-return": "error", // Disallow return before else
      curly: "error", // Enforce consistent brace style
      "no-multiple-empty-lines": ["error", { max: 1 }], // Limit multiple empty lines
      camelcase: "error", // Enforce camelCase naming
      "no-eval": "error", // Disallow eval()
    },
  },
  pluginJs.configs.recommended,
];