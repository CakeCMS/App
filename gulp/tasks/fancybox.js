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

var gulp     = require('gulp'),
    params   = require('../config'),
    uglify   = require('gulp-uglify'),
    concate  = require('gulp-concat'),
    replace  = require('gulp-replace'),
    cleanCSS = require('gulp-clean-css'),
    source   = params.path.bower + '/fancybox/source/',
    css      = params.path.css,
    js       = params.path.js,
    img      = params.path.img,

    config = {
        js      : [
            source + 'jquery.fancybox.pack.js',
            source + 'helpers/jquery.fancybox-buttons.js',
            source + 'helpers/jquery.fancybox-thumbs.js',
            source + 'helpers/jquery.fancybox-media.js'
        ],
        css     : [
            source + 'jquery.fancybox.css',
            source + 'helpers/jquery.fancybox-buttons.css',
            source + 'helpers/jquery.fancybox-thumbs.css'
        ],
        images  : [
            source + 'helpers/**/*.{jpg,png,svg,gif,webp,ico}',
            source + '*.{jpg,png,svg,gif,webp,ico}'
        ]
    },

    dist = {
        images  : img + 'fancybox',
        css     : css + 'libs',
        js      : js + 'libs'
    };

gulp.task('update:fancybox', function () {
    //  Scripts
    gulp.src(config.js)
        .pipe(concate('fancybox.min.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest(dist.js));

    //  Styles
    gulp.src(config.css)
        .pipe(concate('fancybox.min.css'))
        .pipe(replace(/url\('?(.*)'?\)/g, "url('../../img/fancybox/$1')"))
        .pipe(replace("''", "'"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist.css));

    //  Images
    gulp.src(config.images)
        .pipe(gulp.dest(dist.images));
});
