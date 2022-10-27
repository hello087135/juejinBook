const path =require('path');

module.exports={
    mode:'development',
    entry:'./index.js',
    output: {
        clean:true,
        path: path.resolve(__dirname, './dist'),
    },
    cache:{
        type:'filesystem',
        profile:true,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        cacheDirectory:true
                    }
                }
            }
        ]
    }
}