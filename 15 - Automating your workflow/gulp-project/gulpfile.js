var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('clean', function() {
  del.sync('./build');
});


gulp.task('copy', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  gulp.src('app/styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
})

// Static Server + watching scss/html files
gulp.task('serve', ['clean', 'copy', 'sass'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch('app/index.html', ['copy']);
    gulp.watch("app/styles/**/*.scss", ['sass']);
});

gulp.task('default', ['serve']);
