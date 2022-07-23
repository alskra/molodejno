const fs = require('fs');
const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');
const HTMLPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./utils/paths');
const cssLoaders = require('./utils/css-loaders');

const pages = fs.readdirSync(paths.pages).filter((item) => !['ajax'].includes(item));
const ajax = fs.readdirSync(path.join(paths.pages, 'ajax'));
const entry = {};

// pages.forEach((page) => {
// 	entry[page] = [`./pages/${page}/${page}.js`, './components/app/app.js'];
// });

entry.main = pages.map((page) => `./pages/${page}/${page}.js`);
entry.main.push('./components/app/app.js');

const htmlPluginEntries = pages.map((page) => new HTMLPlugin({
	template: `./pages/${page}/${page}.pug`,
	filename: `${page}.html`,
	title: 'Webpack Starter',
	// chunks: [page],
	minify: false,
}));

const htmlPluginEntriesAjax = ajax.map((item) => new HTMLPlugin({
	template: `./pages/ajax/${item}`,
	filename: `ajax/${path.basename(item, '.pug')}.html`,
	minify: false,
	inject: false,
}));

module.exports = {
	context: paths.src,
	entry,
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name].js',
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
								urlFilter: (attribute, value) => !/^\/|^(.*\/)?media\//i.test(value),
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
				use: cssLoaders,
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
				resourceQuery: { not: [/raw/] },
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
		new StylelintPlugin({
			files: '**/*.?(s)css',
		}),
		new ESLintPlugin({
			files: '**/*.?(m)js',
			formatter: 'table',
		}),
	],
	resolve: {
		modules: [paths.js, 'node_modules'],
		extensions: ['...', '.css', '.scss'],
		alias: {
			'@': paths.src,
			'@components': paths.components,
			'@css': paths.css,
			'@fonts': paths.fonts,
			'@images': paths.images,
			'@js': paths.js,
			'@pages': paths.pages,
			'@pug': paths.pug,
		},
	},
	performance: {
		hints: 'warning',
		// maxEntrypointSize: 512000,
		// maxAssetSize: 512000,
	},
};
