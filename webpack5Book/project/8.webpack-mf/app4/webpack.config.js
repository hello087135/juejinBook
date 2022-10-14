const path = require('path');
const {ModuleFederationPlugin} = require('webpack').container;
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes:{
                app3: 'app3@http://localhost:3003/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({})
    ],
    devServer: {
        port: 3004,
        open: true,
        hot: true
    }
}