import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Adjust the groups to avoid problematic regular expressions
            ["^\\u0000"], // Side effect imports
            ["^@?\\w"], // Packages
            ["^[^.]"], // Absolute imports
            ["^\\."], // Relative imports
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
];

export default eslintConfig;
