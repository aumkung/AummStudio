var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
  return gulp.src('public/css/app.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('js', function(){
  return gulp.src('public/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['css', 'js' ]);