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

var gulp    = require('gulp'),
    config  = require('../config'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    source  = config.path.vendor + '/imgareaselect/jquery.imgareaselect.dev.js',
    js      = config.path.js;

gulp.task('update:img-area-select', function () {
    gulp.src(source)
        .pipe(uglify())
        .pipe(rename({
            basename : 'img-area-select',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(js + 'libs'));
});
