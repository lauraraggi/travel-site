const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const browsersync = require("browser-sync").create();
const distFolder = "docs";

function previewDist(cb) {
  browsersync.init({
    server: {
      baseDir: distFolder
    },
    port: 3000
  });
  cb();
}

function copyGeneralFiles() {
  const pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];
  return gulp.src(pathsToCopy).pipe(gulp.dest(`./${distFolder}`));
}

function deleteDistFolder() {
  return del(`./${distFolder}`);
}

function optimizeImages() {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icon/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest(`./${distFolder}/assets/images`));
}

function useMin() {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest(`./${distFolder}`));
}

module.exports = {
  optimizeImages,
  deleteDistFolder,
  useMin,
  copyGeneralFiles,
  previewDist
};
