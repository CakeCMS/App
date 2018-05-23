#!/usr/bin/env sh

#
# CakeCMS App
#
# This file is part of the of the simple cms based on CakePHP 3.
# For the full copyright and license information, please view the LICENSE
# file that was distributed with this source code.
#
# @package    App
# @license    MIT
# @copyright  MIT License http://www.opensource.org/licenses/mit-license.php
# @link       https://github.com/CakeCMS/App
#

if [ "$1" == "dev" ]
then
    FILE=$(pwd)/application/vendor/imgareaselect/jquery.imgareaselect.dev.js
    GITDIR="application/vendor"

else
    FILE=$(pwd)/vendor/imgareaselect/jquery.imgareaselect.dev.js
    GITDIR="vendor"
fi

if [ ! -f $FILE ]
    then
        echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Clone JQuery Image Area Select \033[0m"
        git clone --depth=50 --branch=master https://github.com/odyniec/imgareaselect.git $GITDIR/imgareaselect

    else
        echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m JQuery Image Area Select all ready exists \033[0m"
    fi