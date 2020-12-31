var gulp = require('gulp');
var sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
let cleanCSS = require('gulp-clean-css'); //css to min.css
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs');
var htmllint = require('gulp-htmllint'),
    fancyLog = require('fancy-log'),
    colors = require('ansi-colors');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
var cache = require('gulp-cached');
const path = require('path');
const base = path.resolve(__dirname, ''); // 一番上ルート
const srcPath = '.'; // ソースルート

gulp.task('sass', function() {
    return gulp
        .src([srcPath + '/assets/**/*.scss', '!**/helper.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false,
            }),
        )
        .pipe(cleanCSS())
        .pipe(rename({ dirname: './' }))
        .pipe(
            sourcemaps.write('./maps/', {
                includeContent: false,
            }),
        )
        .pipe(gulp.dest('assets/css/'))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
});

gulp.task('browserSync', function(done) {
    connect.server(
        {
            base: base,
            port: '3000',
        },
        function() {
            browserSync({
                proxy: '127.0.0.1:3000',
            });
        },
    );
    browserSync.reload();
    done();
});

//===Lint Tasks===
//HTML Lint
function htmllintReporter(filepath, issues) {
    if (issues.length > 0) {
        issues.forEach(function(issue) {
            fancyLog(
                colors.cyan('[gulp-htmllint] ') +
                    colors.white(filepath + '\r\n' + ' [' + colors.green('Row_' + issue.line) + ',' + issue.column + ']: ') +
                    colors.red('(' + issue.code + ') ' + issue.msg),
            );
        });

        process.exitCode = 1;
    }
}
gulp.task('htmlLint', function() {
    return gulp.src(['**/*.html', '**/*.php', '!**/node_modules{,/**}', '!**/inc{,/**}']).pipe(htmllint({ config: 'config/.htmllintrc' }, htmllintReporter));
});
gulp.task('jsCompile', function(done) {
    gulp.src(srcPath + '/src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(
            babel({
                presets: [
                    [
                        'env',
                        {
                            targets: {
                                browsers: ['last 2 versions', 'safari >= 7'],
                            },
                        },
                    ],
                ],
            }),
        )
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('assets/js'));
    done();
});

gulp.task(
    'default',
    gulp.series(gulp.series('htmlLint', 'sass', 'jsCompile', 'browserSync'), function(done) {
        gulp.watch([srcPath + '/assets/**/*.scss'], gulp.series('sass'));

        gulp.watch(
            [srcPath + '**/*.html', '**/*.php'],
            gulp.series('htmlLint', function(done) {
                browserSync.reload();
                done();
            }),
        );
        gulp.watch(
            [srcPath + '/assets/**/*.js'],
            gulp.series('jsCompile', function(done) {
                browserSync.reload();
                done();
            }),
        );

        // gulp.watch(['assets/**/*.ejs','templates/*.json'],
        //     gulp.series('ejs'));
    }),
);
