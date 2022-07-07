module.exports = {
	plugins: [
		[
			'postcss-preset-env',
			{
				stage: 0,
				features: {
					'all-property': false,
					'custom-properties': false,
					'has-pseudo-class': false,
					'logical-properties-and-values': { dir: 'ltr' },
				},
			},
		],
		'@csstools/css-has-pseudo-experimental',
		'postcss-sort-media-queries',
	],
};
