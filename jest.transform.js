// Transpiles TypeScript files and removes graphql queries.
const babelOptions = 
{
    plugins: 
    [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "babel-plugin-remove-graphql-queries"
    ],
    presets:
    [
        "@babel/preset-typescript",
        "@babel/preset-env",
        "@babel/preset-react"
    ]
  };
  
  module.exports = require("babel-jest").createTransformer(babelOptions);