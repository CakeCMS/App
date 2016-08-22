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

var gulp      = require('gulp'),
    config    = require('../config'),
    replace   = require('gulp-replace'),
    mainFiles = require('main-bower-files'),
    webroot   = config.path.webroot,
    css       = config.path.css,
    js        = config.path.js;

gulp.task('update:uikit', function () {
    gulp.src(mainFiles({filter: '**/uikit/fonts/*.*'}))
        .pipe(gulp.dest(webroot + 'fonts'));

    gulp.src(mainFiles({filter: '**/uikit/**/*.js'}))
        .pipe(gulp.dest(js + 'libs'));

    gulp.src(mainFiles({filter: '**/uikit/**/*.css'}))
        .pipe(replace(/\.\.\/fonts\//g, "../../fonts/"))
        .pipe(gulp.dest(css + 'libs'));
});
