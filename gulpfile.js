
const del        = require('del');
const gulp        = require('gulp');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
// const clean = () => del(['build']);

// Gulp.task() 를 사용해 combine:js 테스크를 정의
gulp.task('combine:js', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('scriptAll.js'))
        .pipe(uglify({
            mangle : true, // 알파벳 한 글자 압축 과정 설정
        }))
        .pipe(javascriptObfuscator({
            compact: true,
            renameGlobals : true,
            unicodeEscapeSequence : true,
            splitStrings : true,
            selfDefending : true,
            controlFlowFlattening : true,
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());

});

// gulp combine:css tasks ()
gulp.task('combine:scss', function () {
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(concat('styleAll.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('clean', () => {
    return del.sync(['./dist']);
});

// gulp html tasks ()
gulp.task('combine:html', function () {
    return gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

// gulp assets tasks ()
gulp.task('combine:assets', function () {
    return gulp.src(['src/assets/*','src/assets/**/*'])
        .pipe(gulp.dest('./dist/assets/'))
        .pipe(browserSync.stream());
});

// 브라우저 sync
gulp.task('browser-sync', function(){
    // note the .init
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        notify:true
    });
});

gulp.task('watch', gulp.parallel('clean','browser-sync', 'combine:html', 'combine:js', 'combine:scss','combine:assets', function(done){
    // change in the previous line and the following line
    gulp.watch('src/scss/*.scss', gulp.series('combine:scss'));
    gulp.watch('src/**/*.js', gulp.series('combine:js'));
    gulp.watch(['src/assets/*', 'src/assets/**/*'], gulp.series('combine:assets'));
    gulp.watch(['src/*.html', 'src/**/*.html'], gulp.series('combine:html'));
    gulp.watch('dist/*.html', browserSync.reload);

    done();
}));

gulp.task('default',  gulp.parallel('watch'));