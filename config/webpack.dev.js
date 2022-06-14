const path = require('path');
const {merge} = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
	target: 'web',
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		'port': 8080,
		'static': [
			paths.build,
			// Fallback for templates resources
			{
				directory: paths.src,
				watch: false,
			},
		],
		// Watch templates
		'watchFiles': path.resolve(paths.src, '**/*.pug'),
		'historyApiFallback': true,
		'open': true,
		'compress': true,
		'hot': true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [
					'style-loader',
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
		],
	},
	plugins: [
		new ImageMinimizerPlugin({
			test: /\.svg$/i,
			minimizerOptions: {
				plugins: [
					[
						'svgo',
						{
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeUnknownsAndDefaults: false,
											removeViewBox: false,
											cleanupIDs: {
												prefix: {
													toString() {
														this.counter = this.counter || 0;

														return `id-${this.counter++}`;
													},
												},
											},
										},
									},
								},
								'removeDimensions',
								'sortAttrs',
							],
						},
					],
				],
			},
		}),
	],
});
