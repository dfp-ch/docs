#!/bin/bash

# Define the repository and the target directory
REPO_URL="https://$GITHUB_USER:$GITHUB_TOKEN@github.com/dfp-ch/dfp-docs.git"
PAGES_DIR="/var/www/html/user/pages"

# Copy content from GitHub if running on Heroku
if [ -n "$DYNO" ]; then
    rm -rf ${PAGES_DIR}/*
    git clone ${REPO_URL} ${PAGES_DIR}
fi

# chown -R www-data:www-data ${PAGES_DIR}

# Index the documentation
/var/www/html/bin/plugin tntsearch index

# Set the port
echo whoami
echo $PORT
echo ${PORT:-80}

sed -i "s/80/${PORT:-80}/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf

# Start Apache in the foreground
docker-php-entrypoint apache2-foreground
