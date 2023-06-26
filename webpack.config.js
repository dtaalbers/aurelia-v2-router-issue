/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const cssLoader = 'css-loader';

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sassOptions: {
            includePaths: ['node_modules']
        }
    }
};

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [require('tailwindcss')('tailwind.config.js'), 'autoprefixer']
        }
    }
};

module.exports = function (env, { analyze }) {
    const production = env.production || process.env.NODE_ENV === 'production';
    return {
        target: 'web',
        mode: production ? 'production' : 'development',
        devtool: production ? undefined : 'eval-cheap-source-map',
        entry: {
            entry: './src/main.ts'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: production ? '[name].[contenthash].bundle.js' : '[name].bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev-app'), 'node_modules'],
            alias: production
                ? {
                      // add your production aliases here
                  }
                : {
                      ...getAureliaDevAliases()
                      // add your development aliases here
                  }
        },
        devServer: {
            historyApiFallback: true,
            open: false,
            port: 9000,
            hot: false
        },
        module: {
            rules: [
                { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset' },
                { test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, type: 'asset' },
                { test: /\.css$/i, use: ['style-loader', cssLoader, postcssLoader] },
                { test: /\.scss$/i, use: ['style-loader', cssLoader, postcssLoader, sassLoader] },
                { test: /\.ts$/i, use: ['ts-loader', '@aurelia/webpack-loader'], exclude: /node_modules/ },
                {
                    test: /[/\\]src[/\\].+\.html$/i,
                    use: '@aurelia/webpack-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'index.html', favicon: 'favicon.ico' }),
            new Dotenv({
                path: `./.env${production ? '' : '.' + (process.env.NODE_ENV || 'development')}`
            }),
            analyze && new BundleAnalyzerPlugin()
        ].filter((p) => p)
    };
};

function getAureliaDevAliases() {
    return [
        'aurelia',
        'fetch-client',
        'kernel',
        'metadata',
        'platform',
        'platform-browser',
        'route-recognizer',
        'router',
        'router-lite',
        'runtime',
        'runtime-html',
        'testing',
        'state',
        'ui-virtualization'
    ].reduce((map, pkg) => {
        const name = pkg === 'aurelia' ? pkg : `@aurelia/${pkg}`;
        try {
            const packageLocation = require.resolve(name);
            map[name] = path.resolve(packageLocation, `../../esm/index.dev.mjs`);
        } catch {
            /**/
        }
        return map;
    });
}
