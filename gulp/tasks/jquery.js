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

var gulp   = require('gulp'),
    config = require('../config'),
    source = config.path.bower + '/jquery/dist/jquery.min.js';

gulp.task('update:jquery', function () {
    return gulp
        .src(source)
        .pipe(gulp.dest(config.path.js + 'libs'));
});
