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
    rename  = require('gulp-rename'),
    replace = require('gulp-replace'),
    source  = config.path.bower + '/font-awesome/web-fonts-with-css',
    webroot = config.path.webroot,
    css     = config.path.css;

gulp.task('update:font-awesome', function () {
    gulp.src(source + '/webfonts/*.*')
        .pipe(gulp.dest(webroot + '/fonts/fa'));

    gulp.src(source + '/css/fontawesome-all.min.css')
        .pipe(replace(/\.\.\/webfonts\//g, "../../fonts/fa/"))
        .pipe(replace("''", "'"))
        .pipe(rename({
            basename : 'font-awesome',
            suffix   : '.min'
        }))
        .pipe(gulp.dest(css + 'libs'));
});
