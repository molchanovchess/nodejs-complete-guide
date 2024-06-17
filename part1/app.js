const http = require('http');

const routes = require('./routes');

const run = () => {
    console.log(routes.someText);

    const server = http.createServer(routes.handler);
    
    server.listen(3000);
}

module.exports = {
    run: run
}