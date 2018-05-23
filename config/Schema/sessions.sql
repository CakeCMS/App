--
-- CakeCMS App
--
-- This file is part of the of the simple cms based on CakePHP 3.
-- For the full copyright and license information, please view the LICENSE
-- file that was distributed with this source code.
--
-- @package    App
-- @license    MIT
-- @copyright  MIT License http://www.opensource.org/licenses/mit-license.php
-- @link       https://github.com/CakeCMS/App
--

CREATE TABLE sessions (
  id char(40) NOT NULL,
  data text,
  expires INT(11) NOT NULL,
  PRIMARY KEY  (id)
);
