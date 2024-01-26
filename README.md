
# Installation

## Apache Crash I (docker image problem?)

see https://stackoverflow.com/questions/61197970/heroku-php-apache-dyno-crash-with-error-h10

enable labs feature on heroku

`heroku labs:enable --app=dfp-cms runtime-new-layer-extract`

## Apache Crash II (port)

change port at runtime before app start

`CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf && docker-php-entrypoint apache2-foreground`
