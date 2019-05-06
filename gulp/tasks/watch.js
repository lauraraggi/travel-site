const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const { styles } = require("./styles");
const scripts = require("./scripts");
const modernizrScript = require("./modernizr");

function watchFiles() {
  gulp.watch("./app/assets/styles/**/*.css", gulp.series(styles, cssInject));
  gulp.watch("./app/index.html", browserSyncReload);
  gulp.watch(
    "./app/assets/scripts/**/*.js",
    gulp.series(modernizrScript, scripts, browserSyncReload)
  );
}

function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// BrowserSync
function browserSync(cb) {
  browsersync.init({
    server: {
      baseDir: "app"
    },
    port: 3000
  });
  cb();
}

function cssInject() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browsersync.stream());
}

module.exports = { watchFiles, browserSync };
