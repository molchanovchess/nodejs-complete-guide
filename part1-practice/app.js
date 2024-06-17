const http = require('http');

const routes = require('./routes');

const runPractice = () => {
    const server = http.createServer(routes.handler);
    server.listen(3001);
}

module.exports = {
    run: runPractice
}