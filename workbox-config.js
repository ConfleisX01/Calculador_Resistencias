module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,jsx,png,svg,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};