/**
 * CakeCMS App
 *
 * This file is part of the of the simple cms based on CakePHP 3.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package   App
 * @license   MIT
 * @copyright MIT License http://www.opensource.org/licenses/mit-license.php
 * @link      https://github.com/CakeCMS/App".
 * @author    Sergey Kalistratov <kalistratov.s.m@gmail.com>
 */

'use strict';

var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    config = require('../config'),
    source = config.path.bower + '/jbzoo-utils/';

gulp.task('update:jbzoo-utils', function () {
    return gulp
        .src(source + 'src/helper.js')
        .pipe(uglify())
        .pipe(rename({
            basename : 'utils',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(config.path.js + 'libs'));
});
