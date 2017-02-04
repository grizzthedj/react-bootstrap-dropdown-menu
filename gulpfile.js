const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const demoConfig = require('./webpack.config.demo.js');
const babel = require('gulp-babel');

gulp.task('build', function() {
  gulp.src(['./src/**/*.js', './src/*js'])
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('demo', function() {
  new WebpackDevServer(webpack(demoConfig), {
    publicPath: "/",
    contentBase: "demo/",
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false
    },
    historyApiFallback: true
  }).listen(8080, 'localhost', function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8080');
  });
});
