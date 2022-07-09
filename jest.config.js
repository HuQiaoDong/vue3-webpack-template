
module.exports = {
    // 使用@作为src目录别名
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    "moduleFileExtensions": [ //不需要配置
        "js",
        "json",
        "json5",
        "xml",
        "csv",
        "tsv",
        "yaml",
        // 告诉 Jest 处理 `*.vue` 文件
        "vue"
    ],
    "testMatch": [ //test文件所在位置
        '**/tests/**/*.(spec|test).(js|jsx|ts|tsx)'
    ],
    "transform": {  //不需要配置
        // 用 `vue-jest` 处理 `*.vue` 文件
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
        // 用 `babel-jest` 处理 js
        "^.+\\.js$": "babel-jest"
    },
};
