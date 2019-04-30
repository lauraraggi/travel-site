const { watchFiles, browserSync } = require("./app/gulp/tasks/watch.js");
const gulp = require("gulp");
exports.watch = gulp.parallel(watchFiles, browserSync);
