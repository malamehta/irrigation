
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

gulp.task('serve',function(){
    browserSync.init({
        server:"./app"
    });
    gulp.watch("app/scss/*.scss",gulp.series('sass'));
    gulp.watch("app/*.html").on('change',browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());


});

gulp.task('start',gulp.series('serve','sass'));