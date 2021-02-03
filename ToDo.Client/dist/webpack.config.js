/// <binding ProjectOpened='Watch - Development' />
var path = require('path');
var webpack = require('webpack');
module.exports = {
    // Target the output of the typescript compiler
    context: path.join(__dirname, ""),
    // File(s) to target in the 'build' directory
    entry: {
        appbundle: "./dist/app/main.js"
    },
    // Output
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../ToDo/wwwroot/Scripts/App')
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
