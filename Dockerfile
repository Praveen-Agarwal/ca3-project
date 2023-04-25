FROM node:18.12.0-alpine
WORKDIR /todo-app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
CMD ["npm","start"]
