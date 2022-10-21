const path =require('path');
// module.exports=[{
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name]-1.js'
//     }
// },{
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name]-2.js'
//     }
// }]a
module.exports=function (env, argv) {
    console.log(env, argv);
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js'
        }
    }
}