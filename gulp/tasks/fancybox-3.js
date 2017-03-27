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
    params   = require('../config'),
    uglify   = require('gulp-uglify'),
    replace  = require('gulp-replace'),
    rename   = require('gulp-rename'),
    source   = params.path.bower + '/fancybox/dist/',
    css      = params.path.css,
    js       = params.path.js;

gulp.task('update:fancybox-3', function () {
    gulp.src(source + 'jquery.fancybox.min.css')
        .pipe(rename({
            basename : 'fancybox',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(css + 'libs'));

    gulp.src(source + 'jquery.fancybox.min.js')
        .pipe(rename({
            basename : 'fancybox',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(js + 'libs'));
});
