const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path")
const webpack = require("webpack");

module.exports = {
    // 打包入口
    entry: path.resolve(__dirname,"../src/main.js"),
    output: {
        // 打包输出文件名
        filename: "[hash].bundle.js",
        // 每次打包前先删除上次的构建包
        clean: true,
        // 打包产物存放目录
        path: path.resolve(__dirname,"../dist")
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // 目录别名引用,'@'指向项目src,'css'指向src/styles
        alias: {
            '@': path.join(__dirname, '../src'),
            'css': path.join(__dirname, '../src/styles')
        }
    },
    mode: "development",
    // devtool: "inline-source-map",
    module: {
        rules: [
            // 混入.vue文件资源
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
                exclude: path.resolve(__dirname,"../node_modules/")
            },
            // 它会应用到`.scss`、`sass`、普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            // 图片资源混入
            {
                test: /\.(jpg|png|jepg)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    },
    plugins: [
        // html模板插件
        new HtmlWebpackPlugin({
            // 将打包后的bundlejs注入html模板body标签中
            inject: "body",
            // 指定打包构建使用的html模板
            template: path.resolve(__dirname,"../public/index.html")
        }),
        // vue loader
        new VueLoaderPlugin(),
    ],
};


