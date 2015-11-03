// Include gulp
var gulp = require('gulp'); 
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    cp = require('child_process'),
    reload  = browserSync.reload();

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync.init({
        server: "_site",
        host: "localhost"
    });
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('styles/scss/*.scss')
		.pipe(plumber())
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('styles/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('styles/css'))
		.pipe(gulp.dest('_site/styles/css'))
		.pipe(browserSync.stream())
		.pipe(notify({ message: 'Styles complete' }));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
	    .pipe(concat('site-all.js'))
	    .pipe(gulp.dest('js/dist'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest('js/dist'))
	    .pipe(gulp.dest('_site/js/dist'))
		.pipe(browserSync.stream())
	    .pipe(notify({ message: 'Scripts complete' }));
});

// Rebuild Jekyll & reload
gulp.task('html-rebuild', ['jekyll-build'], browserSync.reload);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('styles/scss/*.scss', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['html-rebuild']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'browser-sync', 'watch']);