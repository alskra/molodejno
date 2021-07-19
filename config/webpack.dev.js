const {merge} = require('webpack-merge');
const chokidar = require('chokidar');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {extendDefaultPlugins} = require('svgo');

const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
	target: 'web',
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: [paths.build, paths.src],
		open: true,
		compress: true,
		hot: true,
		port: 8080,
		before(app, server) {
			chokidar.watch([
				'./src/**/*.pug',
			]).on('all', () => {
				server.sockWrite(server.sockets, 'content-changed');
			});
		},
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 3,
						},
					},
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							additionalData: '@use "sass:math"; @import "/css/env";',
						},
					},
				],
			},
		],
	},
	plugins: [
		new ImageMinimizerPlugin({
			test: /\.svg$/i,
			minimizerOptions: {
				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					[
						'svgo',
						{
							plugins: extendDefaultPlugins([
								{
									name: 'removeUnknownsAndDefaults',
									active: false,
								},
								{
									name: 'removeDimensions',
								},
								{
									name: 'removeViewBox',
									active: false,
								},
								{
									name: 'sortAttrs',
								},
								{
									name: 'cleanupIDs',
									params: {
										prefix: {
											toString() {
												this.counter = this.counter || 0;

												return `id-${this.counter++}`;
											},
										},
									},
								},
							]),
						},
					],
				],
			},
		}),
	],
});
