var gulp = require('gulp'); 
var jshint = require('gulp-jshint'); 
var watch = require('gulp-watch'); 

gulp.task('default', ['lint', 'watch']); 

gulp.task('watch', function() { 
  gulp.watch('./javascript/**/*.js', ['lint']); 
}); 

gulp.task('lint', function() { 

  //** is all folders, * is all files
    return gulp.src('./javascript/**/*.js') 
    .pipe(jshint()) 
    .pipe(jshint.reporter('jshint-stylish')); 
});