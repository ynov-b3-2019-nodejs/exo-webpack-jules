const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'images/[name].[ext]',
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new HtmlWebpackRootPlugin('app')

    ],
    resolve: {
        modules: ["node_modules"],
        extensions: ['*','.js','.jsx']
    }
}
