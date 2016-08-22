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
    concate = require('gulp-concat'),
    source  = config.path.bower + '/jbzoo-jquery-factory/src',
    js      = [
        source + '/widget.js',
        source + '/jbzoo.js'
    ];

gulp.task('update:jbzoo-jquery-factory', function () {
    return gulp
        .src(js)
        .pipe(concate('jquery-factory.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.path.js + 'libs'));
});
