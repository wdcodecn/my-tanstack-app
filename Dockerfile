FROM alpine:3.19
RUN apk add --no-cache nodejs && echo 'require("http").createServer((q,r) => r.end("ok")).listen(3000)' > /s.js
CMD ["node", "/s.js"]
