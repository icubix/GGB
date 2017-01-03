var gulp = require('gulp'),
	server = require('gulp-develop-server');

gulp.task('server:start',function(){
	server.listen({path:'./app.js'});
});

gulp.task('server:restart',function(){
	gulp.watch(['./app.js'],server.restart);
});

gulp.task('default',function(){
	gulp.run('server:start');
});