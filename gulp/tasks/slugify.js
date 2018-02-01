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

var gulp            = require('gulp'),
    config          = require('../config'),
    js              = config.path.js + 'libs',
    concate         = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    speakingurl     = config.path.bower + '/speakingurl/speakingurl.min.js',
    jquery_slugify  = config.path.bower + '/jquery-slugify/src/slugify.js';

gulp.task('update:slugify', function () {
    gulp.src([
        speakingurl,
        jquery_slugify
    ])
        .pipe(concate('slugify.min.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest(js));
});
