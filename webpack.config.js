var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Lemon',
        template: 'src/assets/test.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,  // 用正则去匹配要用该 loader 转换的 CSS 文件
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
};