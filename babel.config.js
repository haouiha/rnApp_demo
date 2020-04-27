module.exports = api => {
	api.cache(true);
	return {
		presets: ['module:metro-react-native-babel-preset'],
		env: {
			development: {
				plugins: [
					'babel-plugin-styled-components',
					[
						'module-resolver',
						{
							root: ['./src'],
						},
					],
				],
			},
		},
	};
};
