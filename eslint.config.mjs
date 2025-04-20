import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["*.js"],
        languageOptions: {
            ecmaVersion: 2015,
            globals: {
                ...globals.browser,
                ...globals.node,
                define: "readonly",
                "JZZ": "readonly",
                "React": "readonly"
            }
        },
        rules: {
            "no-unused-vars": ["error", { caughtErrors: "none"}]
        }
    }
];
