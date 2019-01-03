const path = require('path');
const webpack = require('webpack');
const EslintFriendlyFormatter = require('eslint-friendly-formatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getRootPath = (pathName) => path.resolve(__dirname, pathName ? `../${pathName}/` : '');

module.exports = {
    // 打包环境：开发 & 生产
    mode: 'development',
    // 此选项控制是否生成，以及如何生成 source map
    devtool: 'eval-source-map',
    // 入口：有且可以有多个，多个用数组表示
    entry: './example/index.js',
    // 出口：有且只能有一个
    output: {
        filename: '[name].js',
        path: getRootPath('dist'),
        publicPath: '/'
    },
    // 模块解析
    resolve: {
        alias: {
            '@src': getRootPath('src'),
            '@example': getRootPath('example')
        }
    },
    // 本地服务器
    devServer: {
        // 本地服务器所加载的页面所在的目录
        contentBase: path.join(__dirname, 'dist'),
        // 页面是否显示错误信息
        overlay: true,
        // 不跳转
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        hot: true,
        port: 3000,
        // 浏览器自动打开
        open: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                // eslint检查报告的格式规范
                options: {
                    formatter: EslintFriendlyFormatter
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'postcss-loader', // translates CSS into Abstract Syntax Tree
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: getRootPath('example/index.html'), //new 一个这个插件的实例，并传入相关的参数
            favicon: getRootPath('example/assets/images/favicon.ico')
        }),
        new webpack.DefinePlugin({
            // Definitions...
            UI_NAME: JSON.stringify('awe')
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
};
