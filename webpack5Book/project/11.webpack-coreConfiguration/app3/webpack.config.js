const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports={
    mode: 'development',
    entry:{
        test:{
            import:'./src/test.js',
            runtime:"common-runtime"
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean:true,
        publicPath:'./dist',
    },
    plugins:[
        new HtmlWebpackPlugin({}),
        new WebpackBundleAnalyzer()
    ]
}