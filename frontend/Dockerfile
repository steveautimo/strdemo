FROM node:21 as builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .

FROM builder as dev
CMD ["npm", "run", "dev"]

FROM builder as artifacts
RUN npm run build

FROM docker.io/library/nginx:1.25 as deploy
COPY --from=artifacts /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
