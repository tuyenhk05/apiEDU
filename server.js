// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8081;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});