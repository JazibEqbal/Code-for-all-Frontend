FROM node:18-alpine AS build
WORKDIR /build
ENV REACT_APP_BACKEND_URL=https://code-for-all-backend.herokuapp.com\
    REACT_APP_YOUR_KEY_ID=rzp_live_jgx5BuQib4M9tb\
    REACT_APP_YOUR_KEY_SECRET=5AfRyO2860dPgY46QUyQEqHT

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/build/ /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'