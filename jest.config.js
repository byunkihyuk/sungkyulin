const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        "^@libs/(.*)$": "<rootDir>/libs/$1",
        "^@components/(.*)$": "<rootDir>/components/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
