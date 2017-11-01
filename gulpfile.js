const gulp = require( 'gulp' ),
	ts = require( 'gulp-typescript' ),
	clean = require( 'gulp-clean' ),
	nodemon = require( 'gulp-nodemon' );

const BUILD_DIRECTORY = 'dist',
	tsProject = ts.createProject( 'tsconfig.json' );

gulp.task( 'watch', [ 'scripts' ], function () {
	gulp.watch( 'src/**/*.ts', [ 'scripts' ] )
} );

gulp.task( 'clean', function () {
	return gulp.src( BUILD_DIRECTORY, { read: false } ).pipe( clean() );
} );

gulp.task( 'scripts', function () {
	const tsResult = tsProject.src().pipe( tsProject() );
	return tsResult.js.pipe( gulp.dest( BUILD_DIRECTORY ) );
} );

gulp.task( 'start', function () {
	nodemon( {
		script: 'dist/app.js'
	} );
} );

gulp.task( 'serve', [ 'watch', 'start' ] );

gulp.task( 'build', [ 'scripts' ] );