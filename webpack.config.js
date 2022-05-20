const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path")
console.log(__dirname)

const config = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        clean: true,
        path: path.resolve(__dirname,"./dist")
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: "development",
    devtool: "inline-source-map",
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
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.resolve(__dirname + "/public/index.html")
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        static: "./dist",
        port: 9001,
        open: true
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
    }

    return config;
};

