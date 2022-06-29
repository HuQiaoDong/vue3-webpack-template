module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // 字符串统一使用双引号，允许使用反引号，错误级别为警告
        "quotes": ["warn", "double",{
            "allowTemplateLiterals": true
        }],
        // 强制要求使用分号
        semi: ["error", "always"]
    },
};
