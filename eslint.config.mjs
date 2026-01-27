import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      eqeqeq: ["error", "smart"],
      "prefer-const": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      curly: ["error", "multi-line"],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
        project: [path.join(path.dirname(fileURLToPath(import.meta.url)), "tsconfig.json")],
      },
    },
    rules: {
      // TypeScript hygiene
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      // prefer TS-aware unused-vars handling
      "no-unused-vars": "off",

      // Reliability (typed)
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/require-await": "warn",

      // React
      "react/self-closing-comp": "warn",
    },
  },
]);

export default eslintConfig;
