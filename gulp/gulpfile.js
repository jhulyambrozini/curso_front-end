const gulp = require('gulp')
const { series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass(callback) {
    gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed', //mimificando sass
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
    return callback()
}

function minimificaJS(callback) {

    gulp.src('./src/js/*.js')

           .pipe(uglify())
           .pipe(obfuscate()) // griptografando js
           .pipe(gulp.dest('./build/js'))

   return callback()
}

function imageMin(callback) {

    gulp.src('./src/images/*')
 
             .pipe(imagemin())
             .pipe(gulp.dest('./build/images'))
 
         return callback()
 
 }


exports.default = function() {
    gulp.watch('./src/styles/main.scss', { ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./src/js/*.js', { ignoreInitial: false}, gulp.series(minimificaJS))
    gulp.watch('./src/images/*', { ignoreInitial: false}, gulp.series(imageMin))
}