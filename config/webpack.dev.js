const webpack = require("webpack");
// 1.导入公共webpack配置
const baseConfig = require("./webpack.base.js");
// 2.导入合并webpack配置项函数
const merge = require("webpack-merge").merge;
// 3.合并配置项
// const env = require("./config/env")
const devConfig = merge(baseConfig, {
    mode: "development",
    // 开发环境服务器
    devServer: {
        // 服务器依赖资源
        static: "./dist",
        // 启动服务器时自动打开服务url
        open: true,
        // 服务占用端口
        port: 3000,
        // 启用文件压缩
        compress: true,
        // 热更新
        hot: true,
    },
    // sourcemap调试
    devtool: "inline-source-map",
    plugins: [
        // 定义全局变量
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("http://127.0.0.1:9530") ,
            CRYPTO_KEY: JSON.stringify("abcdef0123456789"),
            HTTP_ENCRYPT: false,
        }),
    ]

});
module.exports = devConfig;
