const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-react',{
                            runtime: 'automatic'
                        }]]
                    }
                }
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
            ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        hot: true,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}
