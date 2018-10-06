var gulp = require('gulp');
var uglifyes = require('gulp-uglify-es').default;
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var copy = require('gulp-copy');
var concat = require('gulp-concat');

gulp.task('minify-components', function () {

    gulp.src('components/**/*.js')
        .pipe(concat("components.min.js"))
        // .pipe(uglifyes())
        .pipe(gulp.dest('public/js'));

});

gulp.task('minify-components-prod', function () {

    gulp.src('components/**/*.js')
        .pipe(concat("components.min.js"))
        // .pipe(uglifyes())
        .pipe(gulp.dest('public/js'));

});

gulp.task('minify-js', function () {

    gulp.src([
            "static/dist/js/Vue/vue.js",
            "static/dist/js/Vue/vue-router.js",
            "static/dist/js/Vue/vuex.min.js",
            "static/dist/js/Vue/vue-tables-2.min.js",
            "static/dist/js/Vue/axios.min.js",
            "static/plugins/jquery/jquery.min.js",
            "static/plugins/popper/popper.min.js",
            "static/plugins/bootstrap/bootstrap.min.js",
            "static/plugins/perfect-scrollbar/perfect-scrollbar.jquery.min.js",
            "static/plugins/waves/waves.js",
            "static/plugins/sidebarmenu/sidebarmenu.js",
            "static/plugins/sticky-kit/sticky-kit.min.js",
            "static/plugins/sparkline/jquery.sparkline.min.js",
            "static/dist/js/custom.js",
            "static/plugins/sweetalert/sweetalert.min.js",            
        ])
        .pipe(concat("all.min.js"))
        // .pipe(uglify())
        .pipe(gulp.dest('public/js'));

});

gulp.task('default', ['minify-components', 'minify-js']);
