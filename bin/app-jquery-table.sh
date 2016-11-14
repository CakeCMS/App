#!/usr/bin/env sh

#
# CakeCMS App
#
# This file is part of the of the simple cms based on CakePHP 3.
# For the full copyright and license information, please view the LICENSE
# file that was distributed with this source code.
#
# @package   App
# @license   MIT
# @copyright MIT License http://www.opensource.org/licenses/mit-license.php
# @link      https://github.com/CakeCMS/App
#

if [ "$1" == "dev" ]
then
    FILE=$(pwd)/application/vendor/jquery-check-all/jquery-check-all.min.js
    GITDIR="application/vendor"

else
    FILE=$(pwd)/vendor/jquery-check-all/jquery-check-all.min.js
    GITDIR="vendor"
fi

if [ ! -f $FILE ]
    then
        echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Clone JQuery table check all \033[0m"
        git clone --depth=50 --branch=master https://github.com/markgx/jquery-check-all.git $GITDIR/jquery-check-all

    else
        echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m JQuery table all ready exists \033[0m"
    fi