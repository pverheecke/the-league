const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['webpack-hot-middleware/client', './client/main.js'],
    output: {
        path: path.resolve(__dirname, '../public/js'),
        publicPath: '/js',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../public/index.html'),
            template: path.resolve(__dirname, '../build/index_dev.html'),
            inject: true
        })
    ],
    devtool: '#eval-source-map'
}
