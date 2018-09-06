const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    watch: false,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: /node_modules/
    },
    entry: path.resolve(__dirname, 'src/index.sass'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /.sass$/,
                loaders: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9',
                                    ],
                                    flexbox: true,
                                }),
                                require('cssnano')({
                                    preset: 'default',
                                }),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'flexbox-layout.css',
        }),
    ]
};
