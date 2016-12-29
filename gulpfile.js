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
    var autoprefixer = require("autoprefixer");
    var precss = require("precss");
    var cssgrace = require("cssgrace");

    var processsors = [
        autoprefixer({
            browsers: [
                'last 5 versions',
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 6',
                'opera >= 12.1',
                'ios >= 6',
                'android >= 4.4',
                'bb >= 10',
            ] }),
        cssgrace,
        precss
    ];

    gulp.src("./src/css/**/*.*")
        .pipe(scss({outputStyle : "expanded"}))
        .pipe(postcss(processsors))
        .pipe(gulp.dest("./build/css"));
});

gulp.task("watch", function(){
    gulp.watch(["./src/js/**/*.*", "./src/images/**/*.*", "./src/view/**/*.*"], ["copy"]);
    gulp.watch("src/css/**/*.*", ["css"]);
});

gulp.task("default", ["copy", "css", "watch"]);