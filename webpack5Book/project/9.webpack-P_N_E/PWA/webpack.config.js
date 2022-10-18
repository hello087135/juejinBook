const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {GenerateSW} = require("workbox-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({}),
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new WebpackPwaManifest({
            name: "My Progressive Web App",
            short_name: "MyPWA",
            description: "My awesome Progressive Web App!",
            crossorigin: "use-credentials",
            publicPath:'./',
        })
    ],
    devServer: {
        open: true,
        hot: true,
    }
}