var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Gulp.task() 를 사용해 combine:js 테스크를 정의
gulp.task('combine:js', function () {
    return gulp.src('src/*.js')
        .pipe(concat('scriptAll.js'))
        .pipe(uglify({
            mangle : true, // 알파벳 한 글자 압축 과정 설정
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());

});

gulp.task('combine:html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function(){
    // note the .init
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        notify:true
    });
});

gulp.task('watch', gulp.parallel('browser-sync', 'combine:html', 'combine:js', function(done){
    // change in the previous line and the following line
    gulp.watch('src/*.js', gulp.series('combine:js'));
    gulp.watch('src/*.html', gulp.series('combine:html'));
    gulp.watch('dist/*.html', browserSync.reload);

    done();
}));

gulp.task('default',  gulp.parallel('watch'));