module.exports = {
  parser: "@typescript-eslint/parser", // Allows ESLint to lint TypeScript.
  extends: [
    "airbnb",
    // "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    // "plugin:@typescript-eslint/recommended", // A plugin that contains a bunch of ESLint rules that are TypeScript specific.
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    // "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "react",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    useJSXTextNode: true,
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    "react/prop-types": [0],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};