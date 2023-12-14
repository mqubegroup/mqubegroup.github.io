import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = () => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return gulp.src('./src/images/**/*')
    .pipe(
      imagemin(        
        {
          silent: true,
          plugins: [imageminMozjpeg()]
        }
      )
    )
    .pipe(gulp.dest('./dist/images'));
};

export default images;