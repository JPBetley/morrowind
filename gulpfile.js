var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.sass('app.scss')
    	 .browserify('app.js')
    	 .browserSync({
    	 	proxy: 'http://localhost:3000',
        files: [
            './app/**/*.js',
            './app/views/**/*.ejs',
            './public/**/*.css',
            './public/**/*.js'
        ],
    	 });
});
