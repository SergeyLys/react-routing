'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var bs = require('browser-sync').create();

gulp.task('server', function () {

  bs.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("css/*.css").on('change', bs.reload);
  gulp.watch("dist/*.js").on('change', bs.reload);
  gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('sass', function (callback) {
  return gulp.src('css/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(debug({title: 'sass:'}))
    .pipe(autoprefixer({
      browsers: [
        'Chrome >= 35',
        'Firefox >= 31',
        'Edge >= 12',
        'Explorer >= 9',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ],
      cascade: true
    }))
    .pipe(debug({title: 'prefx:'}))
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(debug({title: 'maps:'}))
    .pipe(gulp.dest('css'));
  callback();
});

gulp.task('build', function () {
  return browserify({entries: 'js/input/app.jsx', extensions: ['.jsx'], debug: true})
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('js/output'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('css/sass/**/*.*', ['sass']);
  gulp.watch('js/input/**/*.*', ['build']);
});

gulp.task('default', ['server', 'sass', 'build', 'watch']);