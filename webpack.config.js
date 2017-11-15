const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const theme = require('./package.json').theme;

const postcssOpts = {
	ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
	plugins: () => [
		autoprefixer({
			browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
		}),
		pxtorem({
			rootValue: 100,
			propList: ['*']
		})
	]
};


module.exports = {
	// 页面入口文件配置
	entry: __dirname + '/src/index.js',
	devtool: 'eval-source-map',
	// 入口文件输出配置
	output: {
		path: __dirname + '/', // 打包后的文件存放的地方
		publicPath: '/',
		filename: 'js/index-[hash].js' // 打包后输出文件的文件名
	},
	resolve: {
		modules: [path.resolve(__dirname, 'node_modules'), "node_modules"],
		extensions: ['.web.js', '.jsx', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',	// babel的配置在.babelrc文件中
			},
			{
				test: /\.(png|jpg|gif|woff|eot|ttf)$/,
				loader: "url-loader?limit=8192"
			},
			{
				test: /\.(svg)$/i,
				loader: 'svg-sprite-loader',
				include: [
					require.resolve('antd-mobile').replace(/warn\.js$/, ''),	// 1. 属于 antd-mobile 内置 svg 文件
					path.resolve(__dirname, './src/public/svg'),	// 自己私人的 svg 存放目录
				]
			},
			{
				test: /\.less$/i, 
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: postcssOpts
					},
					{
						loader: 'less-loader',
						options: {
							modifyVars: theme
						}
					}
				]
			},
			{
				test: /\.scss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: postcssOpts
					},
					'sass-loader'
				]
			}, {
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: postcssOpts
					}
				]
			}
		]
	},
	plugins: [
		new LodashModuleReplacementPlugin({
			collections: true,
			paths: true
		}),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/index.html" //new 一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin(), //热加载插件3
		new ExtractTextPlugin("css/[name]-[hash].css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/[name]-[hash].js',
			minChunks: 2
		})
	],
	devServer: {
		contentBase: './build', // 本地服务器所加载的页面所在的目录
		host:'localhost',
		port: 8888,
		historyApiFallback: true,
		inline: true, // 实时刷新
		hot: true,
		proxy: {
			
		}
	},
}