module.exports = (api) => {
	api.cache(true)

	return {
		presets: [
			['babel-preset-expo', { jsxImportSource: 'nativewind' }],
			'nativewind/babel',
		],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'@tamagui/babel-plugin',
				{
					components: ['tamagui'],
					config: './tamagui.config.ts',
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === 'development',
				},
			],
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@': './',
					},
				},
			],
		],
	}
}
