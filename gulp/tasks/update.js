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

var gulp = require('gulp');

gulp.task('update', [
    'update:uikit',
    'update:jquery',
    'update:fancybox',
    'update:bootstrap',
    'update:sweet-alert',
    'update:jbzoo-utils',
    'update:font-awesome',
    'update:materialize-css',
    'update:jbzoo-jquery-factory'
]);
