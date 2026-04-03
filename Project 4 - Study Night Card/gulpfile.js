import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("parcel build index.html"));
gulp.task("parcel server", shell.task("parcel index.html"));

gulp.task("unit-test", shell.task("mocha"));
gulp.task("cy-test", shell.task("npm run cy:run"));

gulp.task("all-tests", gulp.series("unit-test", "cy-test"));

gulp.task("default", gulp.series("build", "parcel server"));
