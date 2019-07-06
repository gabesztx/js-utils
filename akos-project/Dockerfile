FROM nginx:1.15.12

COPY ./target/package /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
