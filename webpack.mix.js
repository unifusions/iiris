const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .react()
    // .postCss('resources/css/app.css', 'public/css', [
    //     require('postcss-import'),
    //     require('tailwindcss'),
    //     require('autoprefixer'),
    // ])
    .alias({ '@': path.resolve('resources/js'),
    })
    .webpackConfig({
        target:'node',
        externals:[nodeExternals()],
        stats: {
            children: true,
        },

    });



if (mix.inProduction()) {
    mix.version();
}
