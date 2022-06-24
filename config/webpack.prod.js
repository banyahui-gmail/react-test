const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

function getCssLoader(adloader) {
    var loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
    ];
    if (adloader) loaders.push(adloader)
    return loaders
}

module.exports = {
    // 入口
    entry: {
        'index':'./src/index.js'
    },
    // 输出
    output:{
        path: path.resolve('./build'),
        filename: 'js/[name].js',
        clean: true
    },
    // 优化
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
            test: /\.js(\?.*)?$/i,
            extractComments: false,
            terserOptions: {
                compress: {
                    drop_console: false,
                    drop_debugger: true
                }
            }
        })]
    },
    // 插件
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: true
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: '[name].html',
            title: 'index title'
        }),
        new CssMinimizerWebpackPlugin({})
    ],
    // 模块
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: getCssLoader()
            },
            {
                test: /\.s[ac]ss$/,
                use: getCssLoader('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|bmp|gif|svg)$/,
                type: 'asset',
                generator: {
                    filename: 'static/img/[name][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 16 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/font/[name][ext][query]'
                }
            },
            {
                test: /\.(mp4|avi|mkv)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name][ext][query]'
                }
            }
        ]
    },
    // 检测
    performance: {
        hints: 'warning'   
    },
    // 模式
    mode: 'production',
    // 映射
    devtool: 'source-map'
}
