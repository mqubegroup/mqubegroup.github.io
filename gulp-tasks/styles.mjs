import gulp from "gulp";

const styles = () => {
  return gulp
    .src("./src/assets/css/**/*.css")
    .pipe(gulp.dest("./dist/assets/css"));
};

export default styles;
