import gulp from 'gulp';

// Pull in each task
import fonts from './gulp-tasks/fonts.mjs';
import images from './gulp-tasks/images.mjs';
import styles from './gulp-tasks/styles.mjs';

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
export function watch (){  
  gulp.watch('./src/assets/css/**/*', {ignoreInitial: true}, styles);
  gulp.watch('./src/images/**/*', {ignoreInitial: true}, images);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
export default gulp.parallel(fonts, images, styles);