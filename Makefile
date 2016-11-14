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

.PHONY: build update test-all autoload test phpmd phpcs phpcpd phploc coveralls npm bower gulp

test-all:
	@echo -e "\033[0;33m>>> \033[0;30;46m Run all tests \033[0m"
	@make update autoload test-unit phpmd phpcs phpcpd phploc prepare-app

update:
	@echo -e "\033[0;33m>>> \033[0;30;46m Update project \033[0m"
	@composer update --no-interaction --optimize-autoloader
	@echo ""

autoload:
	@echo -e "\033[0;33m>>> \033[0;30;46m Composer autoload \033[0m"
	@composer dump-autoload --optimize --no-interaction
	@echo ""

test-unit:
	@echo -e "\033[0;33m>>> \033[0;30;46m Run unit-tests \033[0m"
	@php ./vendor/phpunit/phpunit/phpunit --configuration ./phpunit.xml.dist
	@echo ""

phpmd:
	@echo -e "\033[0;33m>>> \033[0;30;46m Check PHPmd \033[0m"
	@php ./vendor/phpmd/phpmd/src/bin/phpmd ./src text ./vendor/jbzoo/misc/phpmd/jbzoo.xml --verbose
	@echo ""

phpcs:
	@echo -e "\033[0;33m>>> \033[0;30;46m Check Code Style \033[0m"
	@php ./vendor/squizlabs/php_codesniffer/scripts/phpcs ./src   \
        --standard=./vendor/jbzoo/misc/phpcs/JBZoo/ruleset.xml    \
        --report=full
	@echo ""

phpcpd:
	@echo -e "\033[0;33m>>> \033[0;30;46m Check Copy&Paste \033[0m"
	@php ./vendor/sebastian/phpcpd/phpcpd ./src --verbose
	@echo ""

phploc:
	@echo -e "\033[0;33m>>> \033[0;30;46m Show statistic \033[0m"
	@php ./vendor/phploc/phploc/phploc ./src --verbose
	@echo ""

coveralls:
	@echo -e "\033[0;33m>>> \033[0;30;46m Send coverage to coveralls.io \033[0m"
	@php ./vendor/satooshi/php-coveralls/bin/coveralls --verbose
	@echo ""

prepare-app:
	@make app-jquery-table
	@echo -e "\033[0;33m>>> \033[0;30;46m Install application npm \033[0m"
	npm install
	@echo ""

	@echo -e "\033[0;33m>>> \033[0;30;46m Install application bower \033[0m"
	bower install
	@echo ""

	@echo -e "\033[0;33m>>> \033[0;30;46m Application gulp update \033[0m"
	gulp update
	@echo ""

app-jquery-table:
	if [ "$1" == "dev" ]
	then
		FILE=$(pwd)/application/vendor/jquery-check-all/jquery-check-all.min.js
		GITDIR="application/vendor"
		echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m (DEV) Clone JQuery table check all \033[0m"

	else
		FILE=$(pwd)/vendor/jquery-check-all/jquery-check-all.min.js
		GITDIR="vendor"
		echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Clone JQuery table check all \033[0m"
	fi

	if [ ! -f $FILE ]
		then
			echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Clone JQuery table check all \033[0m"
			git clone --depth=50 --branch=master https://github.com/markgx/jquery-check-all.git $GITDIR/jquery-check-all

		else
			echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m JQuery table all ready exists \033[0m"
		fi
