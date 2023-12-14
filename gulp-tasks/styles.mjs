import gulp from "gulp";
import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const styles = () => {
  return gulp
    .src("./src/assets/css/**/*.css")
    .pipe(gulp.dest("./dist/assets/css"));
};

export default styles;
