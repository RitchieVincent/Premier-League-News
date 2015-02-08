var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');

var paths = {
    sass: ['../scss/ionic.app.scss']
};

gulp.task('styles', function() {
    return gulp.src(sass)
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./www/css'))
    .pipe(rename({suffix: '.css'}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', [''], function() {
    gulp.start('styles');
});

