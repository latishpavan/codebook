module.exports = {
	transform: {
		".(ts|tsx)": "<rootDir>/node_modules/ts-jest"
	},
	"testRegex": "(/test/.*|\\.(test|spec)\\.(ts|tsx|js|jsx))$",
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx"
	],
	moduleDirectories: [
		"<rootDir>/node_modules",
		__dirname
	],
	setupFilesAfterEnv: [
		"<rootDir>/jest_setup.ts"
	]
};