FROM php:7.4-apache
LABEL maintainer="Andy Miller <rhuk@getgrav.org> (@rhukster)"

# Enable Apache Rewrite + Expires Module
RUN a2enmod rewrite expires && \
    sed -i 's/ServerTokens OS/ServerTokens ProductOnly/g' \
    /etc/apache2/conf-available/security.conf

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    unzip \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libyaml-dev \
    libzip4 \
    libzip-dev \
    zlib1g-dev \
    libicu-dev \
    g++ \
    git \
    cron \
    vim \
    && docker-php-ext-install opcache \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

# set recommended PHP.ini settings
# see https://secure.php.net/manual/en/opcache.installation.php
RUN { \
    echo 'opcache.memory_consumption=128'; \
    echo 'opcache.interned_strings_buffer=8'; \
    echo 'opcache.max_accelerated_files=4000'; \
    echo 'opcache.revalidate_freq=2'; \
    echo 'opcache.fast_shutdown=1'; \
    echo 'opcache.enable_cli=1'; \
    echo 'upload_max_filesize=128M'; \
    echo 'post_max_size=128M'; \
    echo 'expose_php=off'; \
    } > /usr/local/etc/php/conf.d/php-recommended.ini

RUN pecl install apcu \
    && pecl install yaml-2.0.4 \
    && docker-php-ext-enable apcu yaml

# Install sqlite3
RUN apt-get update
RUN apt-get install -y sqlite3
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN chown www-data:www-data /var/www

# Set user to www-data
USER www-data

# Define Grav specific version of Grav or use latest stable
ARG GRAV_VERSION=latest

# Install grav
WORKDIR /var/www

RUN curl -o grav-admin.zip -SL https://getgrav.org/download/core/grav-admin/${GRAV_VERSION} && \
    unzip grav-admin.zip && \
    mv -T /var/www/grav-admin /var/www/html && \
    rm grav-admin.zip

# Copy grav config (excluding plugins)
RUN rm -rf /var/www/html/user/*
COPY --chown=www-data:www-data grav/ /var/www/html/user

# Install plugins
WORKDIR /var/www/html

RUN bin/gpm install anchors
RUN bin/gpm install breadcrumbs
RUN bin/gpm install error
RUN bin/gpm install github
RUN bin/gpm install highlight
RUN bin/gpm install langswitcher
RUN bin/gpm install markdown-notices
RUN bin/gpm install page-inject
RUN bin/gpm install page-toc
RUN bin/gpm install shortcode-core
RUN bin/gpm install shortcode-ui
RUN bin/gpm install youtube
RUN bin/gpm install prism-highlight
RUN bin/gpm install tntsearch
RUN bin/gpm install presentation

# Copy content
# COPY --chown=www-data:www-data pages/ /var/www/html/user/pages

# Index pages for search
# RUN bin/plugin tntsearch index

# Return to root user
USER root

# Create cron job for Grav maintenance scripts (DOES NOT work on Heroku)
# RUN (crontab -l; echo "* * * * * cd /var/www/html;/usr/local/bin/php bin/grav scheduler 1>> /dev/null 2>&1") | crontab -

# Copy init scripts
# COPY docker-entrypoint.sh /entrypoint.sh

# mount point for local development only (see compose.yaml, Heroku DOES NOT support volumes)
# VOLUME ["/var/www/html/user/pages"]

# Copy the startup script
COPY startup.sh /startup.sh

# Make the script executable
RUN chmod +x /startup.sh

# ENTRYPOINT ["/entrypoint.sh"]
# CMD ["apache2-foreground"]
# CMD ["sh", "-c", "cron && apache2-foreground"]
RUN sed -i "s/80/${PORT:-80}/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf

# Set the script as the entry point
ENTRYPOINT ["/startup.sh"]
