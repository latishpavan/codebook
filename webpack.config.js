const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['babel-loader'],
                exclude: /(node-modules)/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    }
}
