const svgToMiniDataURI = require('mini-svg-data-uri');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./utils/paths');
const { entry, htmlPluginEntries, htmlPluginChunks } = require('./entry');
const cssLoaders = require('./loaders/css');

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
					filename: (pathData) => {
						const { query } = pathData.module.resourceResolveData;

						if (/webp/i.test(query)) {
							// eslint-disable-next-line no-param-reassign
							pathData.module.resourceResolveData.query = query.replace(/webp/i, '');

							return '[path][name].webp[query]';
						}

						return '[path][name][ext][query]';
					},
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
		...htmlPluginChunks,
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
};