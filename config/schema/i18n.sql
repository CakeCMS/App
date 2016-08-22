--
-- CakeCMS App
--
-- This file is part of the of the simple cms based on CakePHP 3.
-- For the full copyright and license information, please view the LICENSE
-- file that was distributed with this source code.
--
-- @package   App
-- @license   MIT
-- @copyright MIT License http://www.opensource.org/licenses/mit-license.php
-- @link      https://github.com/CakeCMS/App
--

CREATE TABLE i18n (
    id int NOT NULL auto_increment,
    locale varchar(6) NOT NULL,
    model varchar(255) NOT NULL,
    foreign_key int(10) NOT NULL,
    field varchar(255) NOT NULL,
    content text,
    PRIMARY KEY (id),
    UNIQUE INDEX I18N_LOCALE_FIELD(locale, model, foreign_key, field),
    INDEX I18N_FIELD(model, foreign_key, field)
);
