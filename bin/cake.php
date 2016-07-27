#!/usr/bin/php -q
<?php
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

$minVersion = '5.5.9';
if (file_exists('composer.json')) {
    $composer = json_decode(file_get_contents('composer.json'));
    if (isset($composer->require->php)) {
        $minVersion = preg_replace('/([^0-9\.])/', '', $composer->require->php);
    }
}

if (version_compare(phpversion(), $minVersion, '<')) {
    fwrite(STDERR, sprintf("Minimum PHP version: %s. You are using: %s.\n", $minVersion, phpversion()));
    exit(-1);
}

include dirname(__DIR__) . '/config/bootstrap.php';

exit(Cake\Console\ShellDispatcher::run($argv));
