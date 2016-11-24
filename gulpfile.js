const path = require('path');
const gulp = require('gulp');
const clean = require('gulp-clean');
const htmlreplace = require('gulp-html-replace');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const Builder = require('systemjs-builder');
const builder = new Builder('', 'systemjs.config.js');

const bundleHash = new Date().getTime();
const mainBundleName = bundleHash + '.main.bundle.js';
const vendorBundleName = bundleHash + '.vendor.bundle.js';
const destFolder = path.resolve('./docs');

// This is main task for production use
gulp.task('prod', function(done) {
    runSequence('clean', 'compile_ts', 'bundle', 'copy_assets', function() {
        done();
    });
});

gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            app: mainBundleName,
            vendor: vendorBundleName
        }))
        .pipe(gulp.dest(destFolder));
});

gulp.task('bundle:vendor', function () {
    return builder
        .buildStatic('app/vendor.js', path.join(destFolder, vendorBundleName))
        .catch(function (err) {
            console.log('Vendor bundle error');
            console.log(err);
        });
});


gulp.task('bundle:app', function () {
    return builder
        .buildStatic('app/main.js', path.join(destFolder, mainBundleName))
        .catch(function (err) {
            console.log('App bundle error');
            console.log(err);
        });
});

gulp.task('compile_ts', ['clean:ts'], shell.task([
    'tsc'
]));

gulp.task('copy_assets', function() {
     return gulp.src(['./assets/**/*'], {base:"."})
        .pipe(gulp.dest(destFolder));
});

gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('clean:dist', function () {
    return gulp.src([destFolder], {read: false})
        .pipe(clean());
});

gulp.task('clean:ts', function () {
    return gulp.src(['./app/**/*.js', './app/**/*.js.map'], {read: false})
        .pipe(clean());
});
