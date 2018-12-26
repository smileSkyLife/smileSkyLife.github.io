const entry = require('./entry.js')
const config = require('./webpack.config')
const gulp = require('gulp')
// const babel = require('gulp-babel')
const named = require('vinyl-named')
const webpack = require('webpack-stream')

// gulp.task('clean-scripts', function () {
// 	return gulp.src(`./dist/`)
// 		.pipe(clean())
// })

gulp.task('js', function () {
	return gulp.src("demo1/*.js")
		.pipe(named())
		.pipe(webpack(config))
		.pipe(gulp.dest(`dist/${entry}`))
})

gulp.task('html', function () {
	return gulp.src("demo1/*.html")
		.pipe(gulp.dest(`dist/${entry}`))
})

gulp.task('default', ['js', 'html'])
