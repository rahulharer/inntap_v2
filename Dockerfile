FROM nginx:alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app contents directly into Nginx web root
COPY /. /usr/share/nginx/html/

EXPOSE 9009

CMD ["nginx", "-g", "daemon off;"]
