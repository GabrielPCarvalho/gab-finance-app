module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2023,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "unused-imports"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
    "react/jsx-max-props-per-line": [
      "error",
      { "maximum": 1, "when": "multiline" }
    ],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "reservedFirst": true,
        "ignoreCase": true,
        "reservedFirst": ["key", "ref"],
        "shorthandFirst": true,
        "shorthandLast": false,
        "noSortAlphabetically": false
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "react-native",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "react-native"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  }
};
