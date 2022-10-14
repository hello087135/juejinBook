const path =require('path');
const {ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devtool: false,
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8081/dist/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './utils': './src/utils.js',
                './foo': './src/foo.js',
            },
            shared: {
                lodash: {
                    requiredVersion: '4.17.19',
                }
            }

        })
    ],
    devServer: {
        port: 8081,
        hot: true,
    }
}
