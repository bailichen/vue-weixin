const path = require('path');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const remain = JSON.parse(process.env.npm_config_argv).remain;
const host = remain.length ? JSON.parse(process.env.npm_config_argv).remain[0].replace(/^--/, '') : 'default';

const domain = process.env.DOMAIN;

//开发环境下不单独提取css
const styleLoader = domain === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';


const os = require('os');
const networkInterfaces = os.networkInterfaces();


let ip = '';
for (var key in networkInterfaces) {
    networkInterfaces[key].forEach(item => {
        if (!item.internal && item.family === 'IPv4') {
            ip = item.address;
        }
    });
}


module.exports = {
    entry: {
        'index': [path.resolve('src/main.js')]
    },
    output: {
        publicPath: '/'
    },
    devServer: {
        host: ip,
        port: 10022
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve('src'),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve('src'),
                path.resolve('node_modules/dom7/'),
                // path.resolve('node_modules/swiper/'),
                // path.resolve('node_modules/axios/'),
            ]
        },
        {
            test: /\.css$/,
            use: [
                styleLoader,
                "css-loader",
            ],
        },
        {
            test: /\.less$/,
            use: [
                styleLoader,
                "css-loader",
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
        },
        {
            test: /\.scss$/,
            use: [
                styleLoader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            // include: /images/,
            loader: 'url-loader',
            query: {
                limit: 1,
                name: 'static/asset/images/[hash:16].[ext]'
            }
        },
        {
            test: /\.(ttf|woff2?|eot|svg)$/,
            // include: /font/,
            loader: 'url-loader',
            query: {
                limit: 1,
                name: 'static/asset/fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    name: 'vendors/library',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                'vendors/vue-bucket': {
                    name: 'vendors/vue-bucket',
                    test: /[\\/]node_modules[\\/]vue/,
                    priority: -9
                },
            }

        },
        runtimeChunk: {
            name: 'vendors/manifest',
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve('src/index.html'),
            showErrors: true,
        }),
        //new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|en-gb)$/),
        new webpack.DefinePlugin({
            'process.env': {
                domain: JSON.stringify(domain),
                host: JSON.stringify(host),
            },
        }),
    ]
};
