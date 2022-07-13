const path = require('path');
const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.config');
const cssLoaders = require('./css-loaders');
const SVGOConfig = require('../svgo.config');

module.exports = merge(common, {
	target: 'web',
	devtool: 'eval-source-map',
	devServer: {
		port: 8080,
		static: [
			paths.build,
			// Fallback for templates resources
			{
				directory: paths.src,
				watch: false,
			},
		],
		// Watch templates
		watchFiles: path.resolve(paths.src, '**/*.pug'),
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
	plugins: [
		new ImageMinimizerPlugin({
			test: /\.svg$/i,
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify,
				options: {
					plugins: [
						['svgo', SVGOConfig],
					],
				},
			},
		}),
	],
});
