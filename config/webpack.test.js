const webpack = require("webpack");
// js文件压缩插件
const CompressionPlugin = require("compression-webpack-plugin");
// css文件压缩插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 1.导入公共webpack配置
const baseConfig = require("./webpack.base.js");
// 2.导入合并webpack配置项函数
const merge = require("webpack-merge").merge;
// 3.合并配置项
// const env = require("./config/env")
const testConfig = merge(baseConfig, {
    mode: "production",
    plugins: [
        // 打包文件压缩
        new CompressionPlugin({
            filename:  (asset) => {
                return `${asset.filename}.gz`; // 重命名压缩资源名称
            },
            deleteOriginalAssets: true, // 是否删除原资源
            algorithm: "gzip",//算法
            test: new RegExp(
                "\\.(js|css)$" //压缩 js 与 css
            ),
            threshold: 10240,//只处理比这个值（10kb）大的资源。单位按字节计算
            minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        }),
        // 定义生成全局变量
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("http://api.test.hxcapital.cn") ,
            CRYPTO_KEY: JSON.stringify("abcdef0123456789"),
            HTTP_ENCRYPT: true,
        }),
        // 打包后使用cdn引入库文件
        new HtmlWebpackExternalsPlugin({
            externals: [{
                module: "vue",
                entry: "http://obs.hxcapital.cn/public/js/libs/vue@3.2.37/dist/vue.global.min.js",
                global: "Vue"
            },{
                module: "vue-router",
                entry: "http://obs.hxcapital.cn/public/js/libs/vue-router@4.1.2/dist/vue-router.global.min.js",
                global: "VueRouter"
            }]
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
});
module.exports = testConfig;
