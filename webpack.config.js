const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
		'main':'./src/index.js'
	},
    output:{
        path: path.resolve('build'),
        filename: 'js/[name].js',
		clean: true
    },
	optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
		   test: /\.js(\?.*)?$/i,
           extractComments: false
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
                use: [
					MiniCssExtractPlugin.loader,
					'postcss-loader',
					'css-loader'
				]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
            },
			{
				test: /\.(png|jpg|jpeg|bmp|gif|svg)$/,
				type: 'asset',
				generator: {
					filename: 'static/img/[name][ext][query]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 36 * 1024
					}
			   }
			}
		]
	},
	// 开发
    devServer:{
		static: {
		  directory:'./build',
		},
		port: 3001,
		open: true,
		hot: true
	},
	// 检测
	performance: {
		hints:false   
	},
	// 模式
    mode: 'development'
}
