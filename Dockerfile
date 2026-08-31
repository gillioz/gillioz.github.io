FROM ruby:slim

ARG GROUPID=901
ARG GROUPNAME=ruby
ARG USERID=901
ARG USERNAME=jekyll

ENV DEBIAN_FRONTEND noninteractive

LABEL authors="Amir Pourmand,George Araújo" \
      description="Docker image for al-folio academic template" \
      maintainer="Amir Pourmand"

# add a non-root user to the image with a specific group and user id to avoid
# permission issues on the bind-mounted project directory
RUN groupadd -r $GROUPNAME -g $GROUPID && \
    useradd -u $USERID -m -g $GROUPNAME $USERNAME

# install system dependencies
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        build-essential \
        curl \
        git \
        imagemagick \
        inotify-tools \
        locales \
        nodejs \
        procps \
        python3-pip \
        zlib1g-dev && \
    pip --no-cache-dir install --upgrade --break-system-packages nbconvert

# clean up
RUN apt-get clean && \
    apt-get autoremove && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*  /tmp/*

# set the locale
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen

# set environment variables
ENV EXECJS_RUNTIME=Node \
    JEKYLL_ENV=production \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

# create a directory for the jekyll site
RUN mkdir /srv/jekyll && chown $USERNAME:$GROUPNAME /srv/jekyll

# copy the Gemfile to the image (Gemfile.lock is intentionally not
# committed to git, see manage_gemfile_lock() in bin/entry_point.sh, so it
# isn't guaranteed to exist in the build context; `bundle install` below
# generates one from the Gemfile alone if needed)
ADD Gemfile /srv/jekyll

# set the working directory
WORKDIR /srv/jekyll

# install jekyll and dependencies
RUN gem install --no-document jekyll bundler
RUN bundle install --no-cache

# entry_point.sh runs `bundle install` again at container start (see
# bin/entry_point.sh) as the non-root user below, so it needs write access
# to the gem directory, not just read access.
RUN chown -R $USERNAME:$GROUPNAME /usr/local/bundle

EXPOSE 8080

COPY --chown=$USERNAME:$GROUPNAME bin/entry_point.sh /tmp/entry_point.sh

# run as the non-root user created above, so files written back to the
# bind-mounted project directory (Gemfile.lock, .jekyll-cache, _site, ...)
# are owned by the host user instead of root
USER $USERNAME

CMD ["/tmp/entry_point.sh"]
