#!/bin/bash

set -e

# monorepo 구성
pnpm init

pnpm self-update

# prettier 구성
pnpm add -D prettier typescript

PRETTIER_IGNORE=".prettierignore"
PRETTIERRC=".prettierrc"
EDITORCONFIG=".editorconfig"

touch ${PRETTIER_IGNORE}

echo "coverage" >>${PRETTIER_IGNORE}
echo "public" >>${PRETTIER_IGNORE}
echo "dist" >>${PRETTIER_IGNORE}
echo "pnpm-lock.yaml" >>${PRETTIER_IGNORE}
echo "pnpm-workspace.yaml" >>${PRETTIER_IGNORE}
echo "Readme.md" >>${PRETTIER_IGNORE}

touch ${PRETTIERRC}

echo "{" >>${PRETTIERRC}
echo "  \"trailingComma\": \"es5\"," >>${PRETTIERRC}
echo "  \"tabWidth\": 2," >>${PRETTIERRC}
echo "  \"semi\": true," >>${PRETTIERRC}
echo "  \"singleQuote\": true," >>${PRETTIERRC}
echo "  \"printWidth\": 120" >>${PRETTIERRC}
echo "}" >>${PRETTIERRC}

touch ${EDITORCONFIG}

echo "# EditorConfig is awesome: https://EditorConfig.org" >>${EDITORCONFIG}
echo "# top-most EditorConfig file" >>${EDITORCONFIG}
echo "root = true" >>${EDITORCONFIG}
echo "" >>${EDITORCONFIG}
echo "[*]" >>${EDITORCONFIG}
echo "indent_style = space" >>${EDITORCONFIG}
echo "indent_size = 2" >>${EDITORCONFIG}
echo "end_of_line = lf" >>${EDITORCONFIG}
echo "charset = utf-8" >>${EDITORCONFIG}
echo "trim_trailing_whitespace = false" >>${EDITORCONFIG}
echo "insert_final_newline = false" >>${EDITORCONFIG}

mkdir .vscode

SETTINGSJSON="settings.json"
touch ./.vscode/${SETTINGSJSON}

cat <<EOL >./.vscode/${SETTINGSJSON}
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.tabSize": 4,
  "files.eol": "\n",
  "[ignore]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
  "[dotenv]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
  "[md]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
EOL

# eslint 구성

pnpm create @eslint/config

# ESLINTRC=".eslintrc.js"

pnpm add -D eslint-config-prettier eslint-plugin-prettier
# sed -i '/"plugin:react\/recommended"/a \ \ \ \ ,"plugin:prettier/recommended",' ${ESLINTRC}

ESLINTCONFIG="eslint.config.mjs"

cat <<EOL >${ESLINTCONFIG}
import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['.eslintrc.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
    },
    env: {
      node: true,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...prettier.rules,
    },
  },
];
EOL

# package.json

PACKAGEJSON="package.json"

sed -i '/"test": "echo \\"Error: no test specified\\" && exit 1"/a \ \ \ \ ,"lint": "eslint .",' ${PACKAGEJSON}
sed -i '/"lint": "eslint ."/a \ \ \ \ "format": "prettier --write .",' ${PACKAGEJSON}
sed -i '/"format": "prettier --write ."/a \ \ \ \ "dev": "pnpm --parallel --stream -r run dev"' ${PACKAGEJSON}

PNPM_WORKSPACE="pnpm-workspace.yaml"

touch ${PNPM_WORKSPACE}

mkdir ./apps
mkdir ./packages

echo "packages:" >>${PNPM_WORKSPACE}
echo "  - 'apps/*'" >>${PNPM_WORKSPACE}
echo "  - 'packages/*'" >>${PNPM_WORKSPACE}

TSCONFIG="tsconfig.json"

touch ${TSCONFIG}

cat <<EOL >${TSCONFIG}
{
  "compilerOptions": {
    "strict": true,
    "forceConsistentCasingInFileNames": true
  },
}
EOL

pnpm run format

# 기본 package 설치

# pnpm create vite@latest vitaminstudio
# pnpm add -D vite-tsconfig-paths vite-plugin-dts @types/node
