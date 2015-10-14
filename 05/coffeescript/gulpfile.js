var gulp       = require('gulp'),
	gutil      = require('gulp-util'),
	uglify     = require('gulp-uglify'),
	sass       = require('gulp-ruby-sass'),
	concat     = require('gulp-concat'),
	livereload = require('gulp-livereload');

var jsSources = [
	'components/lib/jquery/jquery.js', 
	'components/scripts/*.js'
];

var sassSources = [
	'components/sass/*.scss'
];

gulp.task('js', function() {
	gulp.src(jsSources)
			.pipe(uglify())
			.pipe(concat('script.js'))
			.pipe(gulp.dest('js'))
			.pipe(livereload());
});

gulp.task('sass', function() {
	sass(sassSources, {style: 'expanded', sourcemap: true})
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});

gulp.task('html', function() {
	gulp.src('*.html').pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('*.html', ['html']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(['js/script.js', '*.html']);
  gulp.watch(['*.html', '*.html']);
  livereload.listen();
});

gulp.task('default', ['js', 'sass', 'html', 'watch']);



