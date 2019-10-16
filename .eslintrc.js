module.exports = {
  parser: "@typescript-eslint/parser", // Allows ESLint to lint TypeScript.
  extends: [
    "airbnb",
    // "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    // "plugin:@typescript-eslint/recommended", // A plugin that contains a bunch of ESLint rules that are TypeScript specific.
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    // "plugin:prettier/recommended",
    // "plugin:jest/recommended",
    // "prettier",
    // "prettier/react",
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
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

    /**
     * @description rules of eslint official
     */
    "arrow-body-style": [
      "error",
      "always"
    ],
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "import/export": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    // "@typescript-eslint/prefer-interface": "off", // also want to use "type"
    // "@typescript-eslint/explicit-function-return-type": "off", // annoying to force return type
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }
    ],
    /**
     * @description rules of eslint-plugin-react
     */
    "react/jsx-filename-extension": ["warn", {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    "react/prop-types": "off", // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    "react-hooks/rules-of-hooks": "error",

    /**
     * @description rules of eslint-plugin-prettier
     */
    // "prettier/prettier": [
    //   "error", {
    //     "singleQuote": true,
    //     "semi": false
    //   }
    // ],

    "import/no-extraneous-dependencies": [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    "@typescript-eslint/indent": [2, 2],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};