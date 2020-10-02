// const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },

    devServer: {
        contentBase: "./public",
        port: 9000,
    },

    // optimization: {
    //     minimizer: [
    //         new TerserPlugin({
    //             parallel: true,
    //             terserOptions: {
    //                 ecma: 6,
    //             },
    //         }),
    //         new OptimizeCSSAssetsPlugin({})
    //     ]
    // },

    plugins: [
        new webpack.DefinePlugin({
            'process.browser': 'true'
        }),
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + '/src/index.html'
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    node: {
        fs: "empty"
    }
}
