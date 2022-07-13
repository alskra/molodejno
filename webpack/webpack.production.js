const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const common = require('./webpack.config');
const cssLoaders = require('./css-loaders');
const SVGOConfig = require('../svgo.config');

module.exports = merge(common, {
	target: 'browserslist',
	output: {
		filename: 'js/[name].js',
		publicPath: '',
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
		new ImageMinimizerPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify,
				options: {
					plugins: [
						['gifsicle', { interlaced: true }],
						['mozjpeg', { progressive: true, quality: 85 }],
						['optipng', { optimizationLevel: 5 }],
						['svgo', SVGOConfig],
					],
				},
			},
		}),
	],
	optimization: {
		minimize: false,
		minimizer: ['...', new CssMinimizerPlugin()],
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
