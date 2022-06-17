const fs = require('fs');
const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./paths');

const pages = fs.readdirSync(path.resolve(paths.src, 'pages'))
	.filter((item) => item !== 'ajax');
const ajax = fs.readdirSync(path.resolve(paths.src, 'pages/ajax'));
const entry = {};

// pages.forEach((page) => {
// 	entry[page] = [`./pages/${page}/${page}.js`, './components/app/app.js'];
// });

entry.main = pages.map((page) => `./pages/${page}/${page}.js`);
entry.main.push('./components/app/app.js');

const htmlPluginEntries = pages.map((page) => {
	return new HtmlWebpackPlugin({
		template: `./pages/${page}/${page}.pug`,
		filename: `${page}.html`,
		title: 'Webpack Starter',
		// chunks: [page],
		minify: false,
	});
});

const htmlPluginEntriesAjax = ajax.map((item) => {
	return new HtmlWebpackPlugin({
		template: `./pages/ajax/${item}`,
		filename: `ajax/${path.basename(item, '.pug')}.html`,
		minify: false,
		inject: false,
	});
});

module.exports = {
	context: paths.src,
	entry,
	output: {
		filename: 'js/[name].js',
		path: paths.build,
		publicPath: '/',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.pug$/i,
				use: [
					{
						loader: 'html-loader',
						options: {
							sources: {
								urlFilter: (attribute, value) => !/^\//.test(value),
							},
							minimize: false,
						},
					},
					{
						loader: 'pug-plain-loader',
						options: {
							basedir: paths.src,
							pretty: '\t',
						},
					},
				],
			},
			{
				test: /\.s?css$/i,
				resourceQuery: /module/,
				use: [
					{
						loader: 'css-loader',
						options: {
							url: {
								filter: (url) => !/^\//.test(url),
							},
							importLoaders: 3,
						},
					},
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							additionalData: '@use "/css/global" as *;\n\n',
						},
					},
				],
			},
			{
				test: /\.m?js$/i,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(jpe?g|png|gif|webp)$/i,
				type: 'asset',
				generator: {
					filename: '[path][name][ext][query]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024,
					},
				},
			},
			{
				test: /\.svg$/i,
				resourceQuery: {not: [/raw/]},
				type: 'asset',
				generator: {
					filename: '[path][name][ext][query]',
					dataUrl: (content) => svgToMiniDataURI(content.toString()),
				},
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024,
					},
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: '[path][name][ext][query]',
				},
			},
			{
				resourceQuery: /raw/,
				type: 'asset/source',
			},
		],
	},
	plugins: [
		...htmlPluginEntries,
		...htmlPluginEntriesAjax,
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: '',
					globOptions: {
						ignore: [
							'**/.gitkeep',
							'**/.DS_Store',
						],
					},
					noErrorOnMissing: true,
				},
			],
		}),
		new StylelintPlugin({
			files: '**/*.?(s)css',
		}),
		new ESLintPlugin({
			files: '.',
			formatter: 'table',
		}),
	],
	resolve: {
		modules: ['node_modules'],
		extensions: ['...', '.css', '.scss'],
		alias: {
			'@': paths.src,
		},
	},
};
