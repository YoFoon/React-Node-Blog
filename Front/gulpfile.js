var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    md5 = require('gulp-md5-plus'),
    fileinclude = require('gulp-file-include'),
    spriter = require('gulp-css-spriter'),
    base64 = require('gulp-css-base64'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    sourcemaps = require('gulp-sourcemap'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');
    webpackDevConfig = require('./webpack-dev.config.js');



//引用webpack对js进行操作(生产环境)
gulp.task("build-js", function(callback) {
    var myDevConfig = Object.create(webpackConfig);
    var devCompiler = webpack(myDevConfig);
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//引用webpack对js进行操作(开发环境)
gulp.task("build-dev-js", function(callback) {
    var myDevConfig = Object.create(webpackDevConfig);
    var devCompiler = webpack(myDevConfig);
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});


//将图片拷贝到目标目录
gulp.task('copy:images', function (done) {
    gulp.src(['src/images/**/*'])
        .pipe(gulp.dest('dist/images'))
        .on('end', done);
});

//将图标字体库拷贝到目标目录
gulp.task('copy:icon', function (done) {
    gulp.src(['src/icon/**/*'])
        .pipe(gulp.dest('dist/icon'))
        .on('end', done);
});

//压缩合并css, css中既有自己写的.less, 也有引入第三方库的.css
gulp.task('sassmin', function (done) {
    return gulp.src(['src/css/**/*']) //匹配文件
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({               //进行浏览器兼容
            browsers: ['last 10 versions']
        }))
        //这里可以加css sprite 让每一个css合并为一个雪碧图
        //.pipe(spriter({}))
        //.pipe(concat('style.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));    //输出压缩好的新css文件
});

gulp.task('sassmin-dev', function() {
    return gulp.src('./src/css/**/*') //匹配文件
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({               //进行浏览器兼容
        //     browsers: ['last 10 versions']
        // }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));    //输出压缩好的新css文件
});
//将js加上10位md5,并修改html中的引用路径，该动作依赖build-js
gulp.task('md5:js', ['build-js'], function (done) {
    gulp.src('dist/js/*.js')
        .pipe(md5(10, './view/**/*.html'))
        .pipe(gulp.dest('dist/js'))
        .on('end', done);
});

//将css加上10位md5，并修改html中的引用路径，该动作依赖sprite
gulp.task('md5:css',['sassmin'], /*['sprite'],*/ function (done) {
    gulp.src('dist/css/*.css')
        .pipe(md5(10, './view/**/*.html'))
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

//用于在html文件中直接include文件
gulp.task('fileinclude', function (done) {
    gulp.src(['src/app/**/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('./view'))
        .on('end', done);
        // .pipe(connect.reload())
});

//雪碧图操作，应该先拷贝图片并压缩合并css
gulp.task('sprite', ['copy:images', 'sassmin'], function (done) {
    var timestamp = +new Date();
    gulp.src('dist/css/style.min.css')
        .pipe(spriter({
            spriteSheet: 'dist/images/spritesheet' + timestamp + '.png',
            pathToSpriteSheetFromCSS: '../images/spritesheet' + timestamp + '.png',
            spritesmithOptions: {
                padding: 10
            }
        }))
        .pipe(base64())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

//上传前图片压缩
gulp.task('img-res',function(){
   return gulp.src(['src/images/**/*'])
   .pipe(imagemin())
   .pipe(gulp.dest('./dist/images'));
})

gulp.task('watch', function (done) {

    gulp.watch('src/**/*', ['sassmin-dev', 'build-dev-js', 'fileinclude','copy:images'])
        .on('change', reload)
        .on('end', done);
        
});

gulp.task('watcher', function() {
    gulp.watch("src/css/**/*", ['sassmin-dev']).on('change', reload).on('end', done);
    gulp.watch("src/js/**/*", ['build-dev-js']).on('change', reload).on('end', done);
    gulp.watch("src/icon/**/*",['copy:icon']).on('change', reload).on('end', done);
    gulp.watch("src/app/**/*",['fileinclude']).on('change', reload).on('end', done);
    gulp.watch("src/images/**/*",['copy:images']).on('change',reload).on('end', done);
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理
/*gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "kd.me"
  });
});*/

//发布
gulp.task('default', ['fileinclude', 'md5:css', 'md5:js', 'img-res']);
//开发
gulp.task('dev', ['browser-sync', 'copy:images','copy:icon','sassmin-dev', 'fileinclude',  'build-dev-js', 'watch']);