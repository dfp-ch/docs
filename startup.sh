#!/bin/bash

# Define the repository and the target directory
REPO_URL="https://$GIT_USERNAME:$GIT_PASSWORD@github.com/yourusername/your-repo.git"
PAGES_DIR="/var/www/html/user/pages"

# Copy content from GitHub if running on Heroku
if [ -n "$DYNO" ]; then
    rm -rf ${PAGES_DIR}/*
    git clone ${REPO_URL} ${PAGES_DIR}
fi

/var/www/html/bin/plugin tntsearch index

# Start Apache in the foreground
docker-php-entrypoint apache2-foreground
