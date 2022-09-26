const path =require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-react', {
                            runtime: 'automatic',
                        }]]
                    }
                },
            }],
    }
}
