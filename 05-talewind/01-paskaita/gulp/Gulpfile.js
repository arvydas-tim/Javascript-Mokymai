const gulp = require(`gulp`);
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const concatCss = require("gulp-concat-css");
const rename = require("gulp-rename");

function styles(cb) {
  gulp
    .src("src/sass/**/*.{scss,sass}")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("style.css", { rebaseUrls: false }))
    .pipe(cleanCSS())
    .pipe(rename({ basename: "style", suffix: ".min" }))
    .pipe(gulp.dest("dest/"));
  cb();
}

function copyHTMLFile(cb) {
  gulp.src("src/index.html").pipe(gulp.dest("dest/"));
  cb();
}
function watch(cb) {
  // gulp.watch(`src/**/*.html`, gulp.series(copyHTMLFile));
  // gulp.watch(`src/sass/**/*.{scss,sass}`, gulp.series(styles));
  gulp.watch(
    [`src/sass/**/*.{scss,sass}`, `src/**/*.html`],
    gulp.series(copyHTMLFile, styles)
  );
  cb();
}
exports.copyHTMLFile = copyHTMLFile;
exports.watch = watch;
exports.styles = styles;
exports.default = gulp.series(gulp.parallel(copyHTMLFile, styles), watch);