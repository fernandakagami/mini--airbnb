module.exports = {
	testPathIgnorePatterns: ["/node_modules/", "/.next/", "/public/"],
	setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
	testEnvironment: "jsdom",
	verbose: true,
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
};
