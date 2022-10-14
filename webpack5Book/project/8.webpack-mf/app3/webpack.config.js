const path = require('path');
const {ModuleFederationPlugin} = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app3',
            filename: 'remoteEntry.js',
            exposes: {
                './index': './src/index.js'
            }
        }),
        new HtmlWebpackPlugin({})
    ],
    devServer: {
        port: 3003,
        open: true,
        hot: true
    }
}