module.exports = {
    // Transform .ts and .tsx files using the setup in jest.transform.js
    transform: {
        "^.+\\.tsx?$": "<rootDir>/jest.transform.js"
    },

    // Regex to select test files.
    testRegex: "(\\.|/)(test)\\.([t]sx?)$",
    
    // Ignores .scss imports in TypeScript files.
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
    },

    // Setup to run before tests. Used to configure Enzyme.
    setupFiles: [
        "<rootDir>/jest.setup.js"
    ],

    // When collecting coverage output to HTML.
    coverageReporters: ["text", "html"],

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["node_modules", ".cache"],
    transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"]
};