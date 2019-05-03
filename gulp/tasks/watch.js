const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const { styles } = require("./styles.js");
const scripts = require("./scripts.js");

function watchFiles() {
  gulp.watch("./app/assets/styles/**/*.css", gulp.series(styles, cssInject));
  gulp.watch("./app/index.html", function() {
    browsersync.reload();
  });
  gulp.watch(
    "./app/assets/scripts/**/*.js",
    gulp.series(scripts, scriptsRefresh)
  );
}

function scriptsRefresh(cb) {
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
