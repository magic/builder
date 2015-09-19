'use strict';
var join = require('path').join;

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var watch = require('gulp-watch');

gulp.task('clean', function(cb) {
  var dist = [
    'gulp',
    'index.js',
  ];
  del(dist).then(cb);
});

gulp.task('build', ['clean'], function () {
  return gulp.src(join('src', '**'))
    .pipe(babel())
    .pipe(gulp.dest(__dirname));
});

gulp.task('watch', ['default'], function() {
  var src = [
    join(__dirname, 'src', '**', '*'),
    join(__dirname, 'gulpfile.js'),
  ];

  watch(src, function() {
    gulp.start('default');
  });
});

gulp.task('default', ['clean', 'build']);
