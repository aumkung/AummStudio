let mix = require('webpack-mix');

mix.js('assets/js/app.js', 'public/js/app.js')
   .sass('assets/sass/app.scss', 'public/css/app.css')
   .copy('assets/images', 'public/images')
   .setPublicPath('public');