var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var paths = {
    html: 'src/index.html',
    styles: 'src/styles/**/*.scss',
    scripts: 'src/scripts/**/*.{js,html}'
};

gulp.task('clean', function() {
    del.sync('./build');
});

gulp.task('copy', function() {
    gulp.src(paths.html)
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    gulp.src(paths.styles)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
        .pipe(gulp.dest('./build/js'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['clean', 'copy', 'sass', 'scripts'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch(paths.html, ['copy']);
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['serve']);
