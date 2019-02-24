var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", shell.task(
	'npm test'
));

gulp.task("to-json", shell.task(
	'node ./rdf-to-json.js ./test/pg132.rdf'
));
