/**
 * Created by Micky on 7/15/2017.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
  gulp.watch('sass/style.scss',['styles']);
});