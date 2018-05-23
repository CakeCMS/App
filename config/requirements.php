<?php
/**
 * CakeCMS App
 *
 * This file is part of the of the simple cms based on CakePHP 3.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package     App
 * @license     MIT
 * @copyright   MIT License http://www.opensource.org/licenses/mit-license.php
 * @link        https://github.com/CakeCMS/App".
 * @author      Sergey Kalistratov <kalistratov.s.m@gmail.com>
 */

/*
 * You can empty out this file, if you are certain that you match all requirements.
 */
/*
 * You can remove this if you are confident that your PHP version is sufficient.
 */
if (version_compare(PHP_VERSION, '5.6.0') < 0) {
    trigger_error('Your PHP version must be equal or higher than 5.6.0 to use CakePHP.' . PHP_EOL, E_USER_ERROR);
}
/*
 * You can remove this if you are confident you have intl installed.
 */
if (!extension_loaded('intl')) {
    trigger_error('You must enable the intl extension to use CakePHP.' . PHP_EOL, E_USER_ERROR);
}
/*
 * You can remove this if you are confident you have mbstring installed.
 */
if (!extension_loaded('mbstring')) {
    trigger_error('You must enable the mbstring extension to use CakePHP.' . PHP_EOL, E_USER_ERROR);
}
