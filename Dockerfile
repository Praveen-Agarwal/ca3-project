FROM node:13.12.0-alpine
WORKDIR /todo-app
COPY ./package.json ./
COPY ./package-lock.json ./
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm","start"]
