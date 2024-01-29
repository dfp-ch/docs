FROM grav:latest
LABEL maintainer="Hannes Brunner <hannes.brunner@dfp.ch>"

# Install sqlite3
RUN apt-get update
RUN apt-get install -y sqlite3
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

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

RUN chown www-data: -R ./user

# Index the content
RUN /var/www/html/bin/plugin tntsearch index

# Start the server
CMD sed -i "s/80/${PORT:-80}/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf && docker-php-entrypoint apache2-foreground
