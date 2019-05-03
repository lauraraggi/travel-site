const gulp = require("gulp");
const { watchFiles, browserSync } = require("./gulp/tasks/watch.js");
const scripts = require("./gulp/tasks/scripts.js");

exports.watch = gulp.parallel(watchFiles, browserSync);
exports.scripts = scripts;
