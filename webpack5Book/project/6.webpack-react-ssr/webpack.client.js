const Merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtraPlugin = require('mini-css-extract-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = Merge.merge(baseConfig, {
    mode: 'production',
    entry: {
        client: path.resolve(__dirname, './src/entry-client.js'),
    },
    output: {
        filename: 'index.css.js',
        publicPath: '/',
    },
    module: {
        rules: [
                {
                    test: /\.css$/,
                    use: [MiniCSSExtraPlugin.loader, 'css-loader'],
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.css.html'),
        }),
        new MiniCSSExtraPlugin({
            filename: 'index.css.[contenthash].css',
        }),
        new WebpackManifestPlugin({
            fileName: 'manifest-client.json',
        }),
        ]
})
