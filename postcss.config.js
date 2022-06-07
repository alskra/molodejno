module.exports = {
	plugins: [
		[
			'postcss-preset-env',
			{
				stage: 0,
				features: {
					'all-property': false,
					'nesting-rules': false,
					'logical-properties-and-values': {dir: 'ltr'},
				},
			},
		],
	],
};
