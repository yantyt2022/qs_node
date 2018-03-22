var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map', //source-map 可以看到源码的映射
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ]
})
