var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['script']);
})
gulp.task('default',['script','watch']);