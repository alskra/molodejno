const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {extendDefaultPlugins} = require('svgo');

const common = require('./webpack.common');

module.exports = merge(common, {
	target: 'browserslist',
	mode: 'production',
	devtool: false,
	output: {
		filename: 'js/[name].js',
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
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
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css',
		}),
		new ImageMinimizerPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			minimizerOptions: {
				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					[
						'gifsicle',
						{interlaced: true},
					],
					[
						'mozjpeg',
						{
							progressive: true,
							quality: 80,
						},
					],
					[
						'optipng',
						{optimizationLevel: 5},
					],
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
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), '...'],
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
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
