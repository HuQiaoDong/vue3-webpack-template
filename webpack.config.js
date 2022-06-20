const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path")
const webpack = require("webpack");
const env = require("./config/env")

const config = {
    // 打包入口
    entry: "./src/main.js",
    output: {
        // 打包输出文件名
        filename: "[hash].bundle.js",
        // 每次打包前先删除上次的构建包
        clean: true,
        // 打包产物存放目录
        path: path.resolve(__dirname,"./dist")
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // 目录别名引用,'@'指向项目src,'css'指向src/styles
        alias: {
           '@': path.join(__dirname, 'src'),
           'css': path.join(__dirname, 'src/styles')
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
                exclude: path.resolve(__dirname,"./node_modules/")
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
            template: path.resolve(__dirname + "/public/index.html")
        }),
        // vue loader
        new VueLoaderPlugin(),
        // 定义全局变量
        new webpack.DefinePlugin({
            ENV: JSON.stringify(env)
        }),
        // 打包文件压缩
        new CompressionPlugin({
            filename:  (asset) => {
                return `${asset.filename}.gz` // 重命名压缩资源名称
            },
            deleteOriginalAssets: true, // 是否删除原资源
            algorithm: 'gzip',//算法
            test: new RegExp(
                '\\.(js|css)$' //压缩 js 与 css
            ),
            threshold: 10240,//只处理比这个值（10kb）大的资源。单位按字节计算
            minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        })
    ],
    // 开发环境服务器
    devServer: {
        // 服务器依赖资源
        static: "./dist",
        // 服务占用端口
        port: 8080,
        // 启动服务器时自动打开服务url
        open: true
    },
};

// 这里可以对webpack config做一些逻辑处理
module.exports = (env, argv) => {
    // process.env.NODE_ENV是webpack的环境变量参数，配合npm script可以区分环境，依赖cross-env插件
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
        config.devtool = 'inline-source-map';
    }

    if (process.env.NODE_ENV === 'production') {
    }

    return config;
};

