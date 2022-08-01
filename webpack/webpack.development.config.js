const path = require('path');
const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const paths = require('./utils/paths');
const webpackConfig = require('./webpack.config');
const cssLoaders = require('./loaders/css');
const svgoConfig = require('../svgo.config');

module.exports = merge(webpackConfig, {
	target: 'web',
	devtool: 'eval-source-map',
	devServer: {
		port: 8080,
		static: paths.public,
		// Watch templates
		watchFiles: path.join(paths.src, '**/*.pug'),
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				resourceQuery: { not: [/module/] },
				use: [
					'style-loader',
					...cssLoaders,
				],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new ImageMinimizerPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['svgo', svgoConfig],
							'webp',
						],
					},
				},
			}),
		],
	},
});