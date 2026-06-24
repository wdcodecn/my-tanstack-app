FROM node:22-alpine
WORKDIR /app
RUN echo "console.log('hello from tanstack'); require('http').createServer((req,res) => res.end('Hello Gold Label')).listen(3000)" > server.js
CMD ["node", "server.js"]
