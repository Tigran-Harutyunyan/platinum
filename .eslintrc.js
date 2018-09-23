module.exports = {
    env: {
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1,
                VariableDeclarator: { var: 2, let: 2, const: 3 },
                FunctionDeclaration: { body: 1, parameters: 2 },
                ObjectExpression: 1 
            }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        quotes: [
            "error",
            "single"
        ],
        semi: [
            "error",
            "always"
        ],
        "no-console": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-global-assign": "off",
        "no-debugger": "off"
    }
};