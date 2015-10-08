var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', [], function () {

  return gulp.src(['./lambda.js'])
             .pipe(concat('lambda.atomic-es.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dest'));

});