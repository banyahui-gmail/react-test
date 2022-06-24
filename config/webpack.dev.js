const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPligun = require('eslint-webpack-plugin');
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

function getCssLoader(adloader) {
    var loaders = [
        'style-loader',
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
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'index title'
        }),
        new EslintWebpackPligun({
            context: path.resolve('src'),
        }),
        new StyleLintWebpackPlugin({
            files: ['src/styles/*.scss', 'src/styles/*.css']
        })
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
                type: 'asset'
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(mp4|avi|mkv)$/,
                type: 'asset/resource',
            }
        ]
    },
    // 开发
    devServer:{
        port: 3001,
        open: true,
        hot: true
    },
    // 警告
    performance: {
        hints: false   
    },
    // 模式
    mode: 'development',
    // 映射
    devtool: 'cheap-module-source-map'
}
