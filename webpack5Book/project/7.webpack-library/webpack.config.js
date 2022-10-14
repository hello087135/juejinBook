const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'myLibrary',
        libraryTarget: 'window'
    },
    module: {
        rules:[{
            test: /\.css$/,
            use: [miniCssExtractPlugin.loader,'css-loader']
        }]
    },
    externals: [webpackNodeExternals()],
    plugins: [new miniCssExtractPlugin()],
    devtool: 'source-map'
}
