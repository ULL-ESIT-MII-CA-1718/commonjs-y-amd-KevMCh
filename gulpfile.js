var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("preinstall", shell.task("npm install -g static-server"));

gulp.task("server", shell.task("static-server -p 8080"));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha"));
