module.exports = {
	plugins: {
		"postcss-pxtorem": {
			rootValue: 16,
			propList: ["*"], 
			selectorBlackList: [],
			mediaQuery: true, 
			minPixelValue: 0, 
		},
	},
};
