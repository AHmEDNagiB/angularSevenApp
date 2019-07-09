// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');
const ini = require('ini');
const fs = require('fs');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
const environment = process.env.NODE_ENV || 'local';
const properties = config[environment];
const cdnURL = properties.cdnURL;
console.log("test webpack");
console.log("cdnURL:", cdnURL);

module.exports = {
    mode: 'none',
    entry: {
        // This is our Express server for Dynamic universal
        server: './server.ts',
        prerender: './prerender.ts'
    },
    target: 'node',
    resolve: { extensions: ['.ts', '.js'] },
    optimization: {
        minimize: false
    },
    output: {
        libraryTarget: 'commonjs2',
        // Puts the output at the root of the dist folder
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                // Removing this will cause deprecation warnings to appear.
                test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
                parser: { system: true },
            },
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'), {}
        ),
        new webpack.DefinePlugin({
            IN_DEBUG: true,
            cdnURL: cdnURL
        }),
    ]
};