FROM node:18.12.0-alpine
WORKDIR /todo-app
ENV PATH="./node_modules/.bin:$PATH"
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
