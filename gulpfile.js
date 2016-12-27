/**
 * Created by xunjie on 16/12/26.
 */
var gulp = require("gulp");
var postcss = require('gulp-postcss');
var scss = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("copy", function() {
    // 路径必须写成"./src/"或者添加{cwd:"./src"}
    gulp.src("./src/js/**/*.*").pipe(gulp.dest("./build/js"));

    gulp.src("./src/images/**/*.*").pipe(gulp.dest("./build/images"));

    gulp.src("./src/view/**/*.*").pipe(gulp.dest("./build/view"));
});

gulp.task("css", function(e) {
    gulp.src("./src/css/**/*.scss")
        .pipe(postcss([]))
        .pipe(gulp.dest("./build/css"));
});

gulp.task("watch", function(){
    gulp.watch("./src/**/*.*", ["copy"]);
    gulp.watch("./src/css/**/*.scss", ["css"]);
});

gulp.task("default", ["copy", "css", "watch"]);