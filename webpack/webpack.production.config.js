const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const paths = require('./utils/paths');
const common = require('./webpack.config');
const cssLoaders = require('./utils/css-loaders');
const svgoConfig = require('../svgo.config');

module.exports = merge(common, {
	output: {
		publicPath: '',
		filename: 'js/[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				resourceQuery: { not: [/module/] },
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					...cssLoaders,
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css',
		}),
		new CopyPlugin({
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
	],
	optimization: {
		minimizer: [
			'...',
			new CssMinimizerPlugin(),
			new ImageMinimizerPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['mozjpeg', { progressive: true, quality: 85 }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', svgoConfig],
						],
					},
				},
			}),
		],
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	performance: {
		hints: 'error',
	},
});
