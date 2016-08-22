/**
 * CakeCMS App
 *
 * This file is part of the of the simple cms based on CakePHP 3.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    App
 * @license    MIT
 * @copyright  MIT License http://www.opensource.org/licenses/mit-license.php
 * @link       https://github.com/CakeCMS/App
 */

'use strict';

var gulp     = require('gulp'),
    config   = require('../config'),
    rename   = require('gulp-rename'),
    uglify   = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    source   = config.path.bower + '/sweetalert/',
    css      = config.path.css,
    js       = config.path.js;

gulp.task('update:sweet-alert', function () {
    gulp
        .src(source + 'dist/sweetalert.min.js')
        .pipe(uglify())
        .pipe(gulp.dest(js + 'libs'));

    gulp.src(source + 'dist/sweetalert.css')
        .pipe(cleanCSS())
        .pipe(rename({
            basename : 'sweetalert',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(css + 'libs'));
});
