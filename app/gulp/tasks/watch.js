const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const { styles } = require("./styles.js");

function watchFiles() {
  gulp.watch("./app/assets/styles/**/*.css", gulp.series(styles, cssInject));
  gulp.watch("./app/index.html", function() {
    browserSyncReload();
  });
}
// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "app"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function cssInject() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browsersync.stream());
}

exports.watchFiles = watchFiles;
exports.browserSync = browserSync;
