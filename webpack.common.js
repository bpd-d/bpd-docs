'use strict'
var path = require('path');

const setPath = function (folderName) {
    return path.join(__dirname, folderName);
};
const isProd = function () {
    return (process.env.NODE_ENV === 'production') ? true : false;
};
module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
        }
    },
    resolveLoader: {
        modules: [setPath('node_modules')]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false
    },
    entry: {
        index: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: "bpd-docs",
        umdNamedDefine: true
    },
    plugins: [

    ]
};