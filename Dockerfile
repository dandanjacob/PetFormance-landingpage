FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/.dockerignore /usr/share/nginx/html/README.md /usr/share/nginx/html/Makefile
RUN echo 'error_page 404 /404.html;' > /etc/nginx/conf.d/404.conf
EXPOSE 80
