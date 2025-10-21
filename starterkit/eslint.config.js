import { defineConfig } from "eslint/config";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import promisePlugin from "eslint-plugin-promise";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        allowImportExportEverywhere: true,
      },
      globals: {
        // если нужны дополнительные глобальные переменные, добавь сюда
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      promise: promisePlugin,
      prettier: prettierPlugin,
    },

    rules: {
      "no-console": "off",
      "react/display-name": "off",
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-undef": "off",
      "no-undef": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "no-restricted-globals": "off",

      "import/order": [
        "error",
        {
          groups: [["builtin", "external"], "internal"],
          "newlines-between": "always",
        },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value=/\\.s?css$/i] ~ ImportDeclaration[source.value!=/\\.s?css$/i]",
          message: "Импорты стилей всегда должны идти последними",
        },
        {
          selector: "TSInterfaceDeclaration[id.name!=/^I[^a-z]+/]",
          message:
            "Все интерфейсы должны начинаться с I, чтобы не было путанницы с классами при чтении кода",
        },
        {
          selector: "TSTypeAliasDeclaration[id.name!=/^T[^a-z]+/]",
          message:
            "Все типы должны начинаться с T, чтобы не было путанницы с классами при чтении кода",
        },
      ],

      // поддержка prettier
      "prettier/prettier": "error",
    },
  },

  {
    // игнорируемые файлы (аналог .eslintignore)
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
]);
