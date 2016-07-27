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

// for built-in server
if (php_sapi_name() === 'cli-server') {
    $_SERVER['PHP_SELF'] = '/' . basename(__FILE__);

    $url = parse_url(urldecode($_SERVER['REQUEST_URI']));
    $file = __DIR__ . $url['path'];
    if (strpos($url['path'], '..') === false && strpos($url['path'], '.') !== false && is_file($file)) {
        return false;
    }
}
require dirname(__DIR__) . '/config/bootstrap.php';

use Cake\Network\Request;
use Cake\Network\Response;
use Cake\Routing\DispatcherFactory;

$dispatcher = DispatcherFactory::create();
$dispatcher->dispatch(
    Request::createFromGlobals(),
    new Response()
);
