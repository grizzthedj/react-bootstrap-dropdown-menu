var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var demoConfig = require('./webpack.config.demo.js');

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
