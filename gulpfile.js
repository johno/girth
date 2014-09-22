var gulp    = require('gulp');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var prefix  = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp.src([
      'css/furtive.css',
      'node_modules/normalize.css/normalize.css',
      'node_modules/colors.css/css/colors.css',
      'node_modules/padding.css/padding.css',
      'node_modules/margins.css/margins.css',
      'node_modules/gray/css/gray.css',
      'css/girth.css'])
    .pipe(concat('c.min.css'))
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(csslint())
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['css']);
