#!/bin/bash

# Define the repository and the target directory
REPO_URL="https://$GITHUB_USER:$GITHUB_TOKEN@github.com/dfp-ch/dfp-docs.git"
PAGES_DIR="/var/www/html/user/pages"

# Copy content from GitHub if running on Heroku
if [ -n "$DYNO" ]; then
    rm -rf ${PAGES_DIR}/*
    git clone ${REPO_URL} ${PAGES_DIR}
fi

/var/www/html/bin/plugin tntsearch index

# Start Apache in the foreground
docker-php-entrypoint apache2-foreground
