var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var minify = require('gulp-minify');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    scssSource: './scss/**/*.scss',
    jsSource: './js/**/*.js',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src(config.scssSource)
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets/'],
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('js', function() {
    gulp.src(config.jsSource)
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest(config.publicDir + '/js'))
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});


gulp.task('connect', function() {
    connect.server({
        root: '',
        port:8081,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['index.html'], ['html']);
    gulp.watch([config.jsSource], ['js']);
    gulp.watch([config.scssSource, config.bootstrapDir + '/assets/stylesheets/**/*.scss'], ['css']);
});

gulp.task('default', ['css', 'js', 'fonts', 'html', 'connect', 'watch']);

