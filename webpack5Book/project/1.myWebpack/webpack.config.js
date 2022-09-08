const path =require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        test:'./text.js'
    },
    context:path.resolve(__dirname,'./src/'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    resolve:{
        alias:{
            'aa':path.resolve(__dirname,'./src/testResolve/')
        },
        extensions:['.ts','.js','.json'],
        modules:[path.resolve(__dirname,'./src/testResolve/'),'node_modules'],
    },
    externals:['lodash',],   // 不会去打包这个模块
    optimization:{
        // minimize:true,
    },
    target:"web",
    // watch:true,
    // devtool:'source-map',
    devServer:{
        host:'0.0.0.0',
        open:true,
        lazy:true,
        overlay:{
            warnings:true,
        },
        hot:true,
    },
    // stats:'errors-only',
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'style-loader',
                    {
                        loader:'less-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    },
    plugins:[
        new ESLintPlugin(),
    ],
}
