// Include gulp
var gulp = require('gulp'); 
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    bourbon = require('node-bourbon'),
    bs = require('browser-sync').create(),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint');
//    uglify = require('gulp-uglify'),
//    rename = require('gulp-rename'),
//    clean = require('gulp-clean'),
//    concat = require('gulp-concat'),


gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
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
    	.pipe(sourcemaps.init())
	    .pipe(sass({
		  errLogToConsole: true,
		  outputStyle: 'compressed',
	      includePaths: bourbon.includePaths,
	      quiet: true
	    }).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('styles/css'))
        .pipe(bs.stream())
		.pipe(notify({ message: 'Compiled sass' }));
});

// Concatenate & Minify JS
//gulp.task('scripts', function() {
//    return gulp.src('js/*.js')
//	    .pipe(concat('site-all.js'))
//	    .pipe(gulp.dest('js'))
//	    .pipe(rename({suffix: '.min'}))
//	    .pipe(uglify())
//	    .pipe(gulp.dest('js/dist'))
//	    .pipe(gulp.dest('_site/js/dist'))
//		.pipe(browserSync.stream())
//	    .pipe(notify({ message: 'Scripts complete' }));
//});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('styles/scss/*.scss', ['sass']);
    gulp.watch('*.html').on('change', bs.reload);
});

// Default Task
gulp.task('default', ['browser-sync', 'lint', 'sass', 'watch']);