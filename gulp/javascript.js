'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// JavaScript livereload.
gulp.task('js', function() {
  browserSync.reload();
});
