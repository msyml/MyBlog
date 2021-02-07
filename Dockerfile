FROM node
RUN npm install -g npm@7.5.2
RUN npm install

FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf