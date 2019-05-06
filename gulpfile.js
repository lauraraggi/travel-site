const gulp = require("gulp");
const { watchFiles, browserSync } = require("./gulp/tasks/watch.js");
const scripts = require("./gulp/tasks/scripts.js");
const styles = require("./gulp/tasks/styles.js");

const {
  optimizeImages,
  deleteDistFolder,
  useMin,
  copyGeneralFiles,
  previewDist
} = require("./gulp/tasks/build.js");

// Register gulp tasks
exports.watch = gulp.parallel(watchFiles, browserSync);
exports.scripts = scripts;
exports.styles = styles;
exports.previewDist = previewDist;
exports.build = gulp.series(
  deleteDistFolder,
  copyGeneralFiles,
  gulp.parallel(styles, scripts),
  useMin,
  optimizeImages
);
