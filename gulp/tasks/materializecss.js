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

var gulp    = require('gulp'),
    config  = require('../config'),
    replace = require('gulp-replace'),
    source  = config.path.bower + '/materialize/dist',
    webroot = config.path.webroot,
    js      = config.path.js,
    css     = config.path.css;

gulp.task('update:materialize-css', function () {
    gulp.src(source + '/fonts/roboto/*.*')
        .pipe(gulp.dest(webroot + '/fonts/roboto'));

    gulp.src(source + '/css/materialize.min.css')
        .pipe(replace(/\.\.\/fonts/g, "../../fonts"))
        .pipe(gulp.dest(css + 'libs'));

    gulp.src(source + '/js/materialize.min.js')
        .pipe(gulp.dest(js + 'libs'));
});
