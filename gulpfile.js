const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

function browserSyncInit(cb) {
  console.log("serve");
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchHtml(cb) {
  console.log("watchHtml");
  return watch("**/*.html", browserSyncReload);
  cb();
}
function watchCss(cb) {
  console.log("watchCss");
  return watch("**/*.css", browserSyncReload);
  cb();
}
function watchJs(cb) {
  console.log("watchJs");
  return watch("**/*.js", browserSyncReload);
  cb();
}

function serve(cb) {
  console.log("serve");

  cb();
}

function defaultTask(cb) {
  // place code for your default task here
  console.log("defaultTask");
  cb();
}

exports.serve = series(browserSyncInit, parallel(watchHtml, watchCss, watchJs));

exports.default = defaultTask;
