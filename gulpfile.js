'use strict';

/**
 * Import node modules
 */
var gulp = require("gulp");
var browser = require("browser-sync").create();
var Server = require("karma").Server;

var dir = {
  root: '.'
}

/**
 * Browsersync
 */
gulp.task('browsersync', function () {
  browser.init({
    server: {
      baseDir: dir.root
    },
    files: [
      dir.root + '/index.html'
    ]
  });
});

/**
 * Run test once and exit
 */
gulp.task("jstest", function (done) {
  new Server({
      configFile: __dirname + "\\karma.conf.js",
      singleRun: true
    },
    function () {
      done();
    }).start();
});

/**
 * default setting
 */
gulp.task('default', ['browsersync']);