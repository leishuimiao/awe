const path = require('path');
const webpack = require('webpack');
const EslintFriendlyFormatter = require('eslint-friendly-formatter');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const getRootPath = (pathName) => path.resolve(__dirname, pathName ? `../${pathName}/` : '');
const OUTPUT_NAME = 'dist'

module.exports = {
    // 打包环境：开发 & 生产
    mode: 'production',
    // 入口：有且可以有多个，多个用数组表示
    entry: './example/index.js',
    // 出口：有且只能有一个
    output: {
        filename: 'static/js/[name].[hash:8].js',
        path: getRootPath(OUTPUT_NAME),
        publicPath: ''
    },
    // 模块解析
    resolve: {
        alias: {
            '@src': getRootPath('src'),
            '@example': getRootPath('example')
        }
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    'css-loader', // translates CSS into CommonJS
                    'postcss-loader', // translates CSS into Abstract Syntax Tree
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/fonts/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
          new OptimizeCSSAssetsPlugin(),
          new UglifyJsPlugin({
              uglifyOptions: {
                  warnings: false,
                  output: {
                      comments: false,
                      beautify: false
                  },
              }
          })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(getRootPath(OUTPUT_NAME), {root: process.cwd()}),
        new HtmlWebpackPlugin({
            template: getRootPath('example/index.html'), //new 一个这个插件的实例，并传入相关的参数
            favicon: getRootPath('example/assets/images/favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
            chunkFilename: 'static/css/[id].[hash:8].css'
        }),
        new webpack.DefinePlugin({
            // Definitions...
            UI_NAME: JSON.stringify('awe')
        })
    ]
};
