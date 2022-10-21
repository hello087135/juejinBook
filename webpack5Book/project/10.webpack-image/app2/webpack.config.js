const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // {
            //     test:/\.(jpg|png|gif)$/,
            //     type:'asset/resource'
            // },
            {
                test:/\.(jpg|png|gif)$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 1024*1024*1024
                    }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./plublic/index.html'
        })
    ]
}