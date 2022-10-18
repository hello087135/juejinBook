const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        home: './src/home/index.js',
        login: './src/login/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(jsx|js|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-react',{
                            runtime: 'automatic'
                        }
                        ]]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['login'],
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    }
}